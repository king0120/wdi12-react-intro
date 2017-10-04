import React, { Component } from "react";
import ReviewList from './ReviewList';

class Movie extends Component {
  render() {
    return (
      <div className="movie">
        <h1>{ this.props.title }</h1>

        <div>Rating: { this.props.rating }</div>
        <p>
          Description: { this.props.description }
        </p>
        
        <ReviewList reviews={this.props.reviews} />
      </div>
    );
  }
}

export default Movie;
