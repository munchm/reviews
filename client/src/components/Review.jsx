import React from 'react';
import styled from 'styled-components';
import Rating from './Rating';
import Photos from './Photos';
import Atribute from './Attribute';
import icons from '../iconKeys.js';


const StyledReview = styled.div`
  display: flex;
  color: black;
  border-bottom: 1px solid #eeeeef;
  width: 715px;
  padding: 20px;
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
`;

const StyledImg = styled.img`
  height: 60px;
  width: 60px;
  margin-right: 10px;
  border-radius: 4px;
  position: relative;
  float: left;
`;


const UserDiv = styled.div`
  width: 33.333%;
`;

const ReviewDiv = styled.div`
  width: 66.666%;
  color: #2b273c;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

const StyledUserInfo = styled.div`
  display: inline;
  position: relative;
  float: left;
  font-size: 12px;
  line-height: 22px;
  color: #2b273c;

`;

const StyledUser = styled.div`
  color: #00838f;
  &:hover {
    text-decoration:underline;

  };
  font-weight: 700;
  font-size: 14px;
`;

const StyledLocation = styled.div`
  line-height: 18px;
  font-weight: 700;
  text-align: left;
`;

const StyledIcon = styled.div`
  fill: rgba(241,92,0,1);
  height: 18px;
  `;

const StyledSpan = styled.span`
  vertical-align: text-bottom;
`;


const DateSpan = styled.span`
  color: #757280;
`;

const PhotosDiv = styled.div`
   color: #00838f;
   &:hover {
    text-decoration:underline;
   };
   margin-bottom: 20px;
`;


const Review = (props) => {

  let displayDate = () => {
    let date = new Date(props.review.reviewDate);
    return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
  };



  return (
    <StyledReview>
      <UserDiv>
        <StyledImg src={props.review.userAvatar}></StyledImg>
        <StyledUserInfo>
          <StyledUser>{props.review.userName}</StyledUser>
          <StyledLocation>{props.review.userLocation}</StyledLocation>
          <StyledIcon ><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" ><g><path d="M7.904 9.43l-2.098 4.697a.901.901 0 01-1.612 0L2.096 9.43a.902.902 0 01.806-1.305h4.196c.67 0 1.105.705.806 1.305zM5 7.375a2 2 0 110-4 2 2 0 010 4z"></path><path d="M15.904 9.43l-2.098 4.697a.89.89 0 01-.806.498.89.89 0 01-.806-.498L10.096 9.43a.902.902 0 01.806-1.305h4.195c.67 0 1.106.705.807 1.305zM13 7.375a2 2 0 11.001-4.001A2 2 0 0113 7.375z" opacity=".502"></path></g></svg><StyledSpan ><b>{" " + props.review.userFriends}</b> friends</StyledSpan></StyledIcon>

          <StyledIcon ><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" ><path d="M13 3H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1.505 9.643l-2.526-1.551L6.528 12.7 7 9.934 5 7.977l2.766-.404L8.969 4.7l1.265 2.873L13 7.977l-2 1.957.495 2.709z"></path></svg><StyledSpan><b>{" " + props.review.userReviews}</b> reviews</StyledSpan></StyledIcon>

          <StyledIcon ><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path d="M15 15H3a2 2 0 01-2-2V6a2 2 0 012-2h2a2 2 0 012-2h4a2 2 0 012 2h2a2 2 0 012 2v7a2 2 0 01-2 2zM9 5a4 4 0 100 8 4 4 0 000-8zm0 6.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"></path></svg><StyledSpan><b>{" " + props.review.userPhotos}</b> photos</StyledSpan></StyledIcon>
        </StyledUserInfo>
      </UserDiv>
      <ReviewDiv>
        <div>
          <Rating rating={props.review.reviewRating} />
          <DateSpan>{" " + displayDate()}</DateSpan>
        </div>
        <PhotosDiv>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M11.23 1A3.77 3.77 0 0115 4.77v6.46A3.77 3.77 0 0111.23 15H4.77a3.77 3.77 0 01-3.43-2.31l-.06-.06a3.61 3.61 0 01-.28-1.4V4.77A3.77 3.77 0 014.77 1h6.46zM3 4.77V11l5.73-5.44a1 1 0 011.38 0L13 8.3V4.77A1.77 1.77 0 0011.23 3H4.77A1.77 1.77 0 003 4.77zM11.23 13A1.77 1.77 0 0013 11.23v-.17l-3.58-3.4L4 12.81c.238.122.502.187.77.19h6.46zM5.02 6.83a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4z"></path></svg>
          <StyledSpan>
            {" " + props.review.reviewPhotos + " photos"}
          </StyledSpan>
        </PhotosDiv>
        <div>{props.review.reviewBody}</div>
        <br />
        <Photos photos={props.review.displayPhotos} />
        <div>
          <Atribute text={' Useful '} value={props.review.atrUseful} iconKey={icons.usefulIcon}/>
          <Atribute text={' Funny '}value={props.review.atrFunny}iconKey={icons.funnyIcon}/>
          <Atribute text={' Cool '}value={props.review.atrCool}iconKey={icons.coolIcon}/>
        </div>
      </ReviewDiv>
    </StyledReview>
  );
};

export default Review;

