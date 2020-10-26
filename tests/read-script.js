import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend, Rate } from 'k6/metrics';

let reviewErrorRate = new Rate('Read Reviews errors');
let reviewTrend = new Trend('Read Reviews');

export let options = {
  // target = VUs
  stages: [
    { duration: '30s', target: 200 },
    { duration: '1m', target: 500 },
    { duration: '2m', target: 1000 },
    { duration: '1m', target: 500 },
    { duration: '30s', target: 200 },
  ],
};

export default function () {
  // get a random business' reviews from the server
  const businessId = Math.floor(Math.random() * Math.floor(1000000));
  const BASE_URL = `http://localhost:5555/api/business/${businessId}/reviews`;

  const response = http.get(BASE_URL);

  check(response, { 'status is 200': r => r.status === 200}) || reviewErrorRate.add(1);

  reviewTrend.add(response.timings.duration);

  sleep(1);
}
