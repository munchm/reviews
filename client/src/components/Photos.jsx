import React from 'react';
import styled from 'styled-components';

//348 x 348
//168 x 168

const LargePhoto = styled.img`
  margin: 0px 10px 10px 0px;
  border-radius: 4px;
  height: 348px;
  width: 348px;
`;

const SmallPhoto = styled.img`
  margin: 0px 10px 10px 0px;
  border-radius: 4px;
  height: 168px;
  width: 168px;
`;

const Photos = (props) => {
  if (props.photos.length === 0) {
    return null;
  } else if (props.photos.length === 1) {
    return (
      <div>
        <LargePhoto src={props.photos[0]}></LargePhoto>
      </div>
    );
  } else if (props.photos.length === 2) {
    return (
      <div>
        <SmallPhoto src={props.photos[0]}></SmallPhoto>
        <SmallPhoto src={props.photos[1]}></SmallPhoto>

      </div>
    );
  } else if (props.photos.length === 3) {
    return (
      <div>
        <LargePhoto src={props.photos[0]}></LargePhoto>
        <SmallPhoto src={props.photos[1]}></SmallPhoto>
        <SmallPhoto src={props.photos[2]}></SmallPhoto>
      </div>
    );
  }
};

export default Photos;

//if 1
//  large photo
//if 2
//  small photo
//  small photo
//if 3
//  large photo
//  small photo
//  small photo