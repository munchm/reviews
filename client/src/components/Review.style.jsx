import styled from 'styled-components';


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

const StyledAttributes = styled.span`
   text-align: top;
   line-height: 18px;
   margin-right: 15px;
   vertical-align: super;
   font-size: 12px;
   color: #757280;

`;