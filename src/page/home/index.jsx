import React from 'react'
import Header from '../../component/header'
import Footer from '../../component/footer'
import hero from '../../img/Group 14.png'
import card1 from '../../img/movie1.png'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Cards from '../../component/cards'
import useApi from '../../helpers/useApi'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { addData } from '../../store/reducer/user'

function Home () {
  const [movies, setMovies] = useState([]);
  const api = useApi()
  const { isAuth } = useSelector((s) => s.users)
  const dispatch = useDispatch()

  const getMovies = async () => {
    try {
      const { data } = await axios.get('http://localhost:8000/movie?limit=7')
      setMovies(data.data)
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

  useEffect(() => {
    
    if (isAuth) {
      fetchUser()
    }
    getMovies()
  }, [isAuth])

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
      <a href="" className="text-primary font-bold font-sans">
        view all
      </a>
    </header>
    <div className="overflow-x-auto flex flex-row gap-x-6 pb-26 w-full">
      <div className="w-56 h-80 border border-white flex flex-col items-center justify-center group  hover:scale-110 transform transition-all duration-300">
        <img src={card1} alt="" />
        <h1 className="hidden group-hover:block">Spider-Man:Homecoming</h1>
        <p className="hidden group-hover:block">Action, Adventure, Sci-fi</p>
        <a
          href=""
          className="hidden text-sm  inline-block rounded-md border border-primary px-10 py-2 text-center text-primary group-hover:block "
        >
          {" "}
          Details
        </a>
      </div>
      <div className="w-56 h-80 border border-white flex flex-col items-center justify-center group  hover:scale-110 transform transition-all duration-300">
        <img src={card1} alt="" />
        <h1 className="hidden group-hover:block">Spider-Man:Homecoming</h1>
        <p className="hidden group-hover:block">Action, Adventure, Sci-fi</p>
        <a
          href=""
          className="hidden text-sm  inline-block rounded-md border border-primary px-10 py-2 text-center text-primary group-hover:block "
        >
          {" "}
          Details
        </a>
      </div>
      <div className="w-56 h-80 border border-white flex flex-col items-center justify-center group  hover:scale-110 transform transition-all duration-300">
        <img src={card1} alt="" />
        <h1 className="hidden group-hover:block">Spider-Man:Homecoming</h1>
        <p className="hidden group-hover:block">Action, Adventure, Sci-fi</p>
        <a
          href=""
          className="hidden text-sm  inline-block rounded-md border border-primary px-10 py-2 text-center text-primary group-hover:block "
        >
          {" "}
          Details
        </a>
      </div>
      <div className="w-56 h-80 border border-white flex flex-col items-center justify-center group  hover:scale-110 transform transition-all duration-300">
        <img src={card1} alt="" />
        <h1 className="hidden group-hover:block">Spider-Man:Homecoming</h1>
        <p className="hidden group-hover:block">Action, Adventure, Sci-fi</p>
        <a
          href=""
          className="hidden text-sm  inline-block rounded-md border border-primary px-10 py-2 text-center text-primary group-hover:block "
        >
          {" "}
          Details
        </a>
      </div>
      <div className="w-56 h-80 border border-white flex flex-col items-center justify-center group  hover:scale-110 transform transition-all duration-300">
        <img src={card1} alt="" />
        <h1 className="hidden group-hover:block">Spider-Man:Homecoming</h1>
        <p className="hidden group-hover:block">Action, Adventure, Sci-fi</p>
        <a
          href=""
          className="hidden text-sm  inline-block rounded-md border border-primary px-10 py-2 text-center text-primary group-hover:block "
        >
          {" "}
          Details
        </a>
      </div>
      <div className="w-56 h-80 border border-white flex flex-col items-center justify-center group  hover:scale-110 transform transition-all duration-300">
        <img src={card1} alt="" />
        <h1 className="hidden group-hover:block">Spider-Man:Homecoming</h1>
        <p className="hidden group-hover:block">Action, Adventure, Sci-fi</p>
        <a
          href=""
          className="hidden text-sm  inline-block rounded-md border border-primary px-10 py-2 text-center text-primary group-hover:block "
        >
          {" "}
          Details
        </a>
      </div>
      <div className="w-56 h-80 border border-white flex flex-col items-center justify-center group  hover:scale-110 transform transition-all duration-300">
        <img src={card1} alt="" />
        <h1 className="hidden group-hover:block">Spider-Man:Homecoming</h1>
        <p className="hidden group-hover:block">Action, Adventure, Sci-fi</p>
        <a
          href=""
          className="hidden text-sm  inline-block rounded-md border border-primary px-10 py-2 text-center text-primary group-hover:block "
        >
          {" "}
          Details
        </a>
      </div>
    </div>
  </main>
  {/* UPCOMING MOVIES SECTION  */}
  <main className="w-full bg-white">
    <header className="flex flex-row justify-between mx-32 pt-16 pb-10">
      <h1 className="text-2xl font-bold font-sans">Upcoming Movies</h1>
      <a href="" className="text-primary font-bold font-sans">
        view all
      </a>
    </header>
    <div className="w-full auto pl-32 gap-x-4 flex flex-row pb-14 overflow-x-auto">
      <button className="px-10 h-10 bg-primary text-white font-sans rounded-lg">
        September
      </button>
      <button className="px-10 h-10 border border-primary bg-white text-primary font-sans hover:bg-primary hover:text-white rounded-lg">
        Oktober
      </button>
      <button className="px-10 h-10 border border-primary bg-white text-primary font-sans hover:bg-primary hover:text-white rounded-lg">
        November
      </button>
      <button className="px-10 h-10 border border-primary bg-white text-primary font-sans hover:bg-primary hover:text-white rounded-lg">
        Desember
      </button>
      <button className="px-10 h-10 border border-primary bg-white text-primary font-sans hover:bg-primary hover:text-white rounded-lg">
        Januari
      </button>
      <button className="px-10 h-10 border border-primary bg-white text-primary font-sans hover:bg-primary hover:text-white rounded-lg">
        Februari
      </button>
      <button className="px-10 h-10 border border-primary bg-white text-primary font-sans hover:bg-primary hover:text-white rounded-lg">
        Maret
      </button>
      <button className="px-10 h-10 border border-primary bg-white text-primary font-sans hover:bg-primary hover:text-white rounded-lg">
        April
      </button>
      <button className="px-10 h-10 border border-primary bg-white text-primary font-sans hover:bg-primary hover:text-white rounded-lg">
        Mei
      </button>
      <button className="px-10 h-10 border border-primary bg-white text-primary font-sans hover:bg-primary hover:text-white rounded-lg">
        Juni
      </button>
      <button className="px-10 h-10 border border-primary bg-white text-primary font-sans hover:bg-primary hover:text-white rounded-lg">
        Juli
      </button>
      <button className="px-10 h-10 border border-primary bg-white text-primary font-sans hover:bg-primary hover:text-white rounded-lg">
        Agustus
      </button>
    </div>
    <div className="flex flex-row gap-x-6 w-full mb-32 pl-32 overflow-x-auto ">
    {movies.map((v) => {
      return <Cards id={v.movie_id} image={v.movie_banner} name={v.title} genre={v.genres}/>
    })}
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