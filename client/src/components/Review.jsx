import React from 'react';



let Review = (props) => {


  return (
    <div>
      <div>{props.review.userName}</div>
      <img src={props.review.userAvatar}></img>
    </div>

  );
};

export default Review;