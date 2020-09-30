import React from 'react';
import ReactDOM from 'react-dom';
import ReviewList from './components/ReviewList.jsx';
import ReviewBar from './components/ReviewBar.jsx';

class App extends React.Component {



  render() {
    return (
      <div>
        <ReviewBar />
        <ReviewList />
      </div>

    );
  }
}



ReactDOM.render(<App />, document.getElementById('app'));