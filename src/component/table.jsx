import React, {useState, useEffect} from "react";
import axios from 'axios'


function Table () {
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        try {
          const { data } = await axios.get('http://localhost:8000/movie?limit=10&orderBy=title')
          setMovies(data)
        } catch (error) {
          
        }
      }

      useEffect(() => {
        
        getMovies()
      }, [])

    return (
        <table>
  <thead>
    <tr>
      <th>Movie ID</th>
      <th>Title</th>
      <th>Movie Banner</th>
      <th>Duration</th>
      <th>Director</th>
      <th>Casts</th>
      <th>Release Date</th>
      <th>Created At</th>
      <th>Updated At</th>
      <th>Synopsis</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {movies.map((movie) => (
      <tr key={movie.movie_id}>
        <td>{movie.movie_id}</td>
        <td>{movie.title}</td>
        <td><img className="h-20 w-20 object-contain" src={movie.movie_banner} alt="" />
            </td>
        <td>{movie.duration}</td>
        <td>{movie.director}</td>
        <td>{movie.casts}</td>
        <td>{movie.release_date}</td>
        <td>{movie.created_at}</td>
        <td>{movie.updated_at}</td>
        <td>{movie.synopsis}</td>
        <td>
          <button className="block bg-primary text-white px-5 py-2 rounded-lg">Update</button>
          <button className="block bg-primary text-white px-5 py-2 rounded-lg" >Delete</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
    )
}

export default Table