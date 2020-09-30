import React from 'react';
import { mount, shallow } from 'enzyme';
import Review from '../client/src/components/Review.jsx';
import axios from 'axios';

let reviewData = {
  productId: 10,
  userName: 'Jorge R.',
  userAvatar: 'null',
  userLocation: 'Seattle, WA',
  userFriends: 5,
  userReviews: 6,
  userPhotos: 7,
  userEliteStatus: 10,
  reviewRating: 4,
  reviewBody: 'test lorem ipsum',
  reviewDate: '2020-07-05',
  reviewPhotos: 4,
  atrCool: 2,
  atrUseful: 1,
  atrFunny: 2
};




describe('<Review />', () => {
  it(' exists', () => {
    const wrapper = mount(<Review review={reviewData} />);
    expect(wrapper.find('span')).toExist();
    expect(wrapper.find('Rating')).toExist();
  });
});

