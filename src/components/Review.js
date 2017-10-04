import React, { Component } from 'react'

class Review extends Component {
  render(){
    return (
      <div className="review">
        <h1>{this.props.text}</h1>
        <p>By: {this.props.name}</p>
      </div> 
    )
  }
}

export default Review