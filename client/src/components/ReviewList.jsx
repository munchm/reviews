import React from 'react';
import axios from 'axios';
import Review from './Review.jsx';


class ReviewList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    };
  }

  componentDidMount() {

    axios.get('/api/reviews/50')
      .then((reviews) => {
        this.setState({ reviews: reviews.data });
      }
      );
  }


  render() {
    return (
      <div>{this.state.reviews.map((review, key) => (
        <Review key={key} review={review} />
      ))}
      </div>


    );
  }
}

export default ReviewList;