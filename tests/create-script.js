/* eslint-disable camelcase */
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
  // create a random reviews
  const businessId = Math.floor(Math.random() * Math.floor(1000000));
  const userId = Math.floor(Math.random() * Math.floor(7000000));
  const BASE_URL = `http://localhost:5555/api/business/${businessId}/users/${userId}/review`;
  const review = {
    stars: Math.floor(Math.random() * 5),
    date: '2020-10-24',
    content: "'Generate random reviews for this stress test'",
    useful: Math.floor(Math.random() * 10),
    funny: Math.floor(Math.random() * 10),
    cool: Math.floor(Math.random() * 10)
  };

  const params = { headers: { 'Content-Type': 'application/json'}};

  const response = http.post(BASE_URL, JSON.stringify(review), params);
  check(response, { 'status is 201': r => r.status === 201}) || reviewErrorRate.add(1);

  reviewTrend.add(response.timings.duration);

  sleep(1);
}
