import React from "react";
import { directors } from "../data";

const allDirectors = 
directors.map((director)=>(
<div key={director.name}>
  {director.name}
  <ul>
    {director.movies.map((movie)=> 
    <li key={movie}>{movie}</li>)}
  </ul>
</div>
)
)

function Directors() {
  return (
  <div>
    <h1>Directors Page</h1>
{allDirectors} 
  </div>
)}

export default Directors;

