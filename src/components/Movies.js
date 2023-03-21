import React from "react";
import { movies } from "../data";

const moviesToReturn = 
movies.map((movie)=>(
<div key={movie.title}>
  {movie.title}
  {movie.time}
  <ul>
    {movie.genres.map((genre)=>(
        <li key={genre}> 
          {genre}
        </li>
      )
    )}
  </ul>
</div>
  )
);

function Movies() {
  return (
  <div>
    <h1>Movies Page</h1>
    {moviesToReturn}
  </div>
  )}

export default Movies;
