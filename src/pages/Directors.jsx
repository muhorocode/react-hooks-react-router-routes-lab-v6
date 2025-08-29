import { useEffect,useState } from "react";

function Directors() {
  const [directors, setDirectors]=useState([])

  useEffect(()=>{
  fetch('http://localhost:4000/directors')
    .then((res)=>res.json())
    .then((data)=>setDirectors(data))
    .catch((err)=>console.error('Error fetching directors:',err ))
  },[])
  return (
    <>
    <h1>Directors Page</h1>
    {directors.map((director)=>(
      <article key={director.id}>
        <h2>{director.name}
          <ul>
            {director.movies.map((movie, index)=>(
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </h2>
      </article>
    ))}
    </>
  );
};

export default Directors;
