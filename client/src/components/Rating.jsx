import React from 'react';
import styled from 'styled-components';


const StyledStars = styled.div`
width: 108px;
height: 20px;
background-position: 0 ${props => props.rating === 5 ? -500 : (-320 - (props.rating * 40))}px;
background-image: url('https://yelpratingsstars.s3-us-west-1.amazonaws.com/stars_v2.yji-52d3d7a328db670d4402843cbddeed89.png');
background-size: 176px 680px;
display: inline-block;
overflow: hidden;
`;

let Rating = (props) => {

  return (
    <span>
      <StyledStars rating={props.rating}></StyledStars>
    </span>
  );

};

export default Rating;