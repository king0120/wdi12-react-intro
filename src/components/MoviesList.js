import React, { Component } from "react";
import Movie from "./Movie";

class MoviesList extends Component {
  render() {
    const movies = [
      {
        title: "Blade Runner 2049",
        rating: "R",
        description: "This is supposed to be good",
        reviews: [
          {
            text: "This was great!",
            name: "George"
          },
          {
            text: "Harrison Ford > Ryan Gosling",
            name: "Harrison"
          }
        ]
      },
      {
        title: "A Movie",
        rating: "PG-13",
        description: "this is a movie",
        reviews: [
          {
            text: "So Great!",
            name: "Tim"
          }
        ]
      },
      {
        title: "Another Movie",
        rating: "R",
        description: "this is another movie",
        reviews: []
      },
      {
        title: "A Third Movie",
        rating: "PG",
        description: "this is yet another movie",
        reviews: [
          {
            text: "The Third Movie is always the best!",
            name: "Anakin"
          },
          {
            text: " I hated it",
            name: "Qui-gon"
          }
        ]
      }
    ];

    const movieComponents = movies.map(movie => {
      return (
        <Movie
          title={movie.title}
          rating={movie.rating}
          description={movie.description}
          reviews = {movie.reviews}
        />
      );
    });

    return <div>{movieComponents}</div>;
  }
}

export default MoviesList;
