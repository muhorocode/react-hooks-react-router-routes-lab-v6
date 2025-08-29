import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'


function Movie() {
  
  const{id}=useParams()
  const[movie,setMovie]=useState([])

  useEffect(()=>{
    fetch('http://localhost:4000/movies/${id}')
    .then((res)=>res.json())
    .then((data)=>setMovie(data))
    .catch((err)=>console.error('Error fetching movies:',err))
  },[])

  if(!movie)
    return(
      <h2>Loading...</h2>
    )
  return (
    <>
   <h1>{movie.title}</h1>
   <p>Time:{movie.item}minutes</p>
   <ul>
    {movie.genres.map((genre,index)=>(
      <li key={index}>{genre}</li>
    ))}
   </ul>
    </>
  );
};

export default Movie;
