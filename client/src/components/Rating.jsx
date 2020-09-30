import React from 'react';
import Stars from '../assets/stars.png';
import styled from 'styled-components';


const StyledStars = styled.div`
width: 108px;
height: 20px;
background-position: 0 ${props => props.rating === 5 ? -500 : (-320 - (props.rating * 40))}px;
// background-position: 0 -480px;
background-image: url(${Stars});
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