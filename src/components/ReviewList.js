import React, { Component } from 'react';
import Review from './Review'

class ReviewList extends Component {
  render() {
    const reviews = this.props.reviews.map(review => {
      return <Review text={review.text} name={review.name} />
    })
    return (
      <div>
        { reviews }
      </div>
    );
  }
}

export default ReviewList;