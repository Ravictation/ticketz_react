import React, {useEffect, useState} from "react";
import Header from '../../component/header';
import Footer from '../../component/footer';
import Cards from '../../component/cards';
import axios from 'axios';
import { useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";
import { Show } from "../../helpers/toast";


function Viewall () {
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [month, setMonth] = useState([
    { 'id': 1, 'name': 'January' },
    { 'id': 2, 'name': 'February' },
    { 'id': 3, 'name': 'March' },
    { 'id': 4, 'name': 'April' },
    { 'id': 5, 'name': 'May' },
    { 'id': 6, 'name': 'June' },
    { 'id': 7, 'name': 'July' },
    { 'id': 8, 'name': 'Augustus' },
    { 'id': 9, 'name': 'September' },
    { 'id': 10, 'name': 'October' },
    { 'id': 11, 'name': 'November' },
    { 'id': 12, 'name': 'December' },
]);
const [monthQuery, setMonthQuery] = useState('')
  // const [query, searchQuery] = useState([])
  const navigate = useNavigate()

  const {isAuth} = useSelector ((s) => s.users)
  useEffect(() => {
    if (!isAuth) {
      navigate ('/')
      Show('You need to Log In to access this page', 'error')
    }
  }, [isAuth])
  
  const getGenres = async () => {
    try {
     const {data} = await axios.get('http://localhost:8000/genre')
     setGenres(data.data)
    } catch (error) {
      console.log(error)
      
    }
  }

  const getMovies = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8000/movie?limit=10&page=${currentPage}&genre=${filter}&search=${searchQuery}&releaseMonth=${monthQuery}`)
      setMovies(data.data)
      setTotalPages(Math.ceil(data.meta.total / 10))
    } catch (error) {
      
    }
  }
  const goToPrevPage = () => {
    setCurrentPage((prevPage)=> prevPage-1)
  }

  const goToNextPage = () => {
    setCurrentPage((prevPage)=> prevPage+1)
  }
  useEffect(() => {
    getGenres()
  }, [])

  useEffect(() => {
    getMovies()
  },[monthQuery, filter, currentPage,searchQuery])

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const changeFilter = (v) => {
    if (v.target.value !== 'All') {
      setFilter(v.target.value)
    } else {
      setFilter ('')
    }
  } 
    return (
        <>
    <Header/>

    <main className="bg-background flex flex-col items-center justify-center ">
    <header className="pb-8 pt-12 w-full ">
      <div className="flex flex-col md:flex-row justify-between ">
        <h2 className="text-2xl ml-20">List Movie</h2>
        <div className="flex gap-x-12 mr-20 justify-between">
          <select onChange={changeFilter} className="bg-grey rounded-lg pr-12 pl-4 py-3">
            <option selected >
              All
            </option>
            {genres.map((v)=> {
                return <option>{v.genre_name}</option>
              })}
          </select>
          <input
          value={searchQuery}
          onChange={handleSearchChange}
            type="text"
            className="bg-grey rounded-lg px-4 py-3"
            placeholder="Search Movie Name ..."
          />
        </div>
      </div>
    </header>
    <div className="months flex flex-row gap-x-4 overflow-x-auto pb-8 w-full pl-20">
    {
                            month ? (
                                month.map((v) => {
                                    return (
                                        <div key={v.id} className="mr-8">
                                            <button onClick={() => (setMonth == v.id ? setMonthQuery('') : setMonthQuery(v.id))} 
                                            className={(monthQuery == v.id ? 'bg-primary text-white' : 'text-primary') + 
                                            "hover:bg-primary h-8 w-32 rounded border border-primary p-2 text-sm font-semibold active:bg-primary hover:text-white"}>{v.name}</button>
                                        </div>
                                    )
                                })
                            ) : (
                                <h1>Data not found</h1>
                            )
                        }
    </div>
    <div className="movie-container flex flex-row  bg-white flex-wrap gap-y-12 pt-11 gap-x-16 w-6/7 pb-10 w-4/5 pl-10 ">
    {movies ? (
      movies.map((v) => {
      return <Cards id={v.movie_id} image={v.movie_banner} name={v.title} genre={v.genres}/>
    })):
    (<h1>Data Not Found</h1>)}
    </div>

    <div className="button page flex flex-row gap-x-2 mb-12 mt-8">
  {currentPage > 1 && (
    <a
      href="#"
      onClick={goToPrevPage}
      className="px-3 py-3 bg-white rounded-lg text-primary hover:bg-primary hover:text-white"
    >
      Prev
    </a>
  )}
  {currentPage < totalPages && (
    <a
      href="#"
      onClick={goToNextPage}
      className="px-3 py-3 bg-white rounded-lg text-primary hover:bg-primary hover:text-white"
    >
      Next
    </a>
  )}
</div>
   
  </main>

  <Footer />
    </>
    )
}

export default Viewall