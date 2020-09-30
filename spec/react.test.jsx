import React from 'react';
import { mount, shallow } from 'enzyme';
import Review from '../client/src/components/Review.jsx';
import axios from 'axios';

// function Fixture() {
//   return (
//     <div>
//       <input id="checked" defaultChecked />
//       <input id="not" defaultChecked={false} />
//       <input id="tertiary" defaultChecked checked={false} />
//     </div>
//   );

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
  });
});



// describe('<Review />', () => {
//   it('component exists', () => {
//     const wrapper = mount(<Review review={data.data}/>);
//     // expect(wrapper.find('.sc-gtssRu jperWC')).toExist();
//     // expect(wrapper.find('#not')).not.toBeChecked();
//   });
// });