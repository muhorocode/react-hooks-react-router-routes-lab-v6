import {Link} from 'react-router-dom'
import {useEffect,useState} from 'react'  

function Home() {

  const [movies, setMovies]=useState([])

  useEffect(()=>{
    fetch('http://localhost:4000/movies')
    .then((res)=>res.json())
    .then((data)=>setMovies(data))
    .catch((err)=>console.error('Error fetching movies:',err))
  },[])

  return (
    <>
      <h1>Home Page</h1>
      {movies .map((movie)=>(
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <Link to={`/movies/${movie.id}`}>View Info</Link>
        </div>
      ))}
    </>
  );
};

export default Home;  
