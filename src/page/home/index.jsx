import React from 'react'
import Header from '../../component/header'
import Footer from '../../component/footer'
import hero from '../../img/Group 14.png'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Cards from '../../component/cards'
import useApi from '../../helpers/useApi'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { addData } from '../../store/reducer/user'
import CardsHome from '../../component/cardsHome'
import { Link} from 'react-router-dom'

function Home () {
  const [movies, setMovies] = useState([]);
  const [nowShowing, setNowShowing] = useState([])
  const api = useApi()
  const { isAuth } = useSelector((s) => s.users)
  const dispatch = useDispatch()
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

  const getMovies = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8000/movie?limit=7&releaseMonth=${monthQuery}`)
      setMovies(data.data)
    } catch (error) {
      
    }
  }

  const getNowShowing = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8000/movie?limit=7`)
      setNowShowing(data.data)
    } catch (error) {
      
    }
  }
  
  const fetchUser = async () => {
    try {
        const { data } = await api.get('/users')
        dispatch(addData(data.data))
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

  useEffect(()=> {
    getNowShowing()
  })
  useEffect(() => {
    if (isAuth) {
      fetchUser()
    }
    getMovies()
  }, [monthQuery, isAuth])

    return (
        <>
        
        <Header />
        <main className="w-full flex flex-col md:flex-row justify-center items-center">
    <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
      <h3 className="text-gray-400 text-2xl mb-3">
        Nearest Cinema, Newest Movie,
      </h3>
      <h1 className="text-primary font-extrabold text-5xl font-sans">
        Find out now!
      </h1>
    </div>
    <div className="w-full items-center flex justify-center w-1/2">
      <img src={hero} alt="" />
    </div>
  </main>
  {/* Now Showing Section */}
  <main className="w-full bg-background pl-32">
    <header className="flex flex-row justify-between mr-32 pt-16 pb-16">
      <h1 className="font-sans text-primary font-extrabold relative">
        Now Showing
        <hr className="absolute w-3/4 border border-primary bottom-0 top-8 left-3" />
      </h1>
      <Link to="/movie" className="text-primary font-bold font-sans">
        view all
      </Link>
    </header>
    <div className="overflow-x-auto flex flex-row gap-x-6 pb-26 w-full">
    {nowShowing.map((v) => {
      return <CardsHome id={v.movie_id} image={v.movie_banner} name={v.title} genre={v.genres}/>
    })}
    </div>
  </main>
  {/* UPCOMING MOVIES SECTION  */}
  <main className="w-full bg-white">
    <header className="flex flex-row justify-between mx-32 pt-16 pb-10">
      <h1 className="text-2xl font-bold font-sans">Upcoming Movies</h1>
      <Link to="/movie" className="text-primary font-bold font-sans">
        view all
      </Link>
    </header>
    <div className="w-full auto pl-32 gap-x-4 flex flex-row pb-14 overflow-x-auto">
    {
                            month ? (
                                month.map((v) => {
                                    return (
                                        <div key={v.id} className="mr-8">
                                            <button onClick={() => (setMonth == v.id ? setMonthQuery('') : setMonthQuery(v.id))} className={(monthQuery == v.id ? 'bg-primary text-white' : 'text-primary') + " hover:bg-primary h-8 w-32 rounded border border-primary p-2 text-sm font-semibold leading-none active:bg-primary hover:text-white"}>{v.name}</button>
                                        </div>
                                    )
                                })
                            ) : (
                                <h1>Data not found</h1>
                            )
                        }
    </div>
    <div className="flex flex-row gap-x-6 w-full mb-32 pl-32 overflow-x-auto ">
    {movies ? (
      movies.map((v) => {
      return <Cards id={v.movie_id} image={v.movie_banner} name={v.title} genre={v.genres}/>
    })):
    (<h1>Data Not Found</h1>)}
    </div>
  </main>
  {/* Email Section */}
  <main className="w-4/5 bg-white flex flex-col justify-center items-center mx-auto border border-white drop-shadow-lg pb-12 mb-24">
    <div className="mb-12">
      <h3 className="font-sans text-center text-2xl mb-2">
        Be the vanguard of the
      </h3>
      <h1 className="font-sans text-primary text-center text-5xl">
        Moviegoers
      </h1>
    </div>
    <div className="flex flex-row gap-x-10 mb-10">
      <input
        type="text"
        className="px-4 py-3 w-76 border border-gray"
        placeholder="Type your email"
      />
      <a href="" className="text-sm text-white bg-primary px-4 py-4">
        Join now
      </a>
    </div>
    <p className="text-center text-sm font-sans text-gray-400">
      By joining you as a tickitz member,
    </p>
    <p className="text-center text-sm font-sans text-gray-400">
      we will always send you the latest update via email
    </p>
  </main>
        <Footer />

        </>
    )
}

export default Home