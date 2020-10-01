import React from 'react';
import ReactDOM from 'react-dom';
import ReviewList from './components/ReviewList.jsx';
import ReviewBar from './components/ReviewBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    this.searchReviews = this.searchReviews.bind(this);
  }

  searchReviews(value) {
    console.log(value);
  }


  render() {
    return (
      <div>
        <ReviewBar searchReviews={this.searchReviews} />
        <ReviewList />
      </div>

    );
  }
}



ReactDOM.render(<App />, document.getElementById('app'));