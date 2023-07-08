import React, {useState, useEffect} from "react";
import Header from '../../component/header'
import Moviebox from '../../component/moviebox'
import Footer from '../../component/footer'
import { Link, useParams} from 'react-router-dom'
import axios from "axios";
import logo from '../../img/sponsor1.png'

function Moviedetail () {
  const params = useParams()

  const [details, setDetails] = useState([])

  const getMovies = async () => {
    try {
        const {data} = await axios.get('http://localhost:8000/movie/' + params.id)
        setDetails(data.data)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

useEffect(()=>{
  getMovies()
}, [])
    return (
        <>
        <Header />
       {details.map((v)=> {
        return <Moviebox 
        title={v.title} 
        image={v.movie_banner} 
        genre_name={v.genre_name} 
        duration={v.duration} 
        release_date={v.release_date}
        director={v.director} 
        casts={v.casts} 
        synopsis={v.synopsis} />
       })}
  {/* SHOWTIMES AND TICKETS SECTIONS */}
  <main className="w-full bg-background flex flex-col justify-center items-center">
    <header className="pt-20">
      <h1 className="text-2xl font-bold font-sans mb-10">
        SHOWTIME AND TICKETS
      </h1>
      <div className="flex flex-col gap-y-5 lg:flex-row gap-x-10 mb-20">
        <select name="" id="" className="bg-gray-100 px-10 py-2">
          <option value="27/10/20">27/10/20</option>
        </select>
        <select name="" id="" className="bg-gray-100 px-10 py-2">
          <option value="PURWOKERTO">PURWOKERTO</option>
        </select>
      </div>
    </header>
    <div className="flex flex-row flex-wrap ml-40 gap-x-40 gap-y-8 mb-12">
      <div className="flex flex-col h-88 w-95 bg-white justify-center">
        <div className="flex-row flex w-full justify-center gap-x-5 mt-6">
          <img src={logo} alt="" className=" object-contain" />
          <div className="w-1/2">
            <h3>ebv.id</h3>
            <p>whatever street no.12. south purwokerto</p>
          </div>
        </div>
        <hr className="w-full my-5" />
        <div className="flex flex-row flex-wrap w-full ml-5 gap-y-4">
          <p className="w-1/4 font-sans text-sm">08:30am</p>
          <p className="w-1/4 font-sans text-sm">10:30am</p>
          <p className="w-1/4 font-sans text-sm">12:00pm</p>
          <p className="w-1/4 font-sans text-sm">02:00pm</p>
          <p className="w-1/4 font-sans text-sm">04:30pm</p>
          <p className="w-1/4 font-sans text-sm">07:00pm</p>
          <p className="w-1/4 font-sans text-sm">08:30pm</p>
        </div>
        <div className="flex flex-row justify-between mt-6 mx-8">
          <p className="font-sans">Price</p>
          <p className="font-sans font-bold">$10.00/seat</p>
        </div>
        <button className="bg-primary font-sans text-white w-3/4 mt-8 py-3 mx-auto">
          Book Now
        </button>
      </div>
      <div className="flex flex-col h-88 w-95 bg-white justify-center">
        <div className="flex-row flex w-full justify-center gap-x-5 mt-6">
          <img src={logo} alt="" className=" object-contain" />
          <div className="w-1/2">
            <h3>ebv.id</h3>
            <p>whatever street no.12. south purwokerto</p>
          </div>
        </div>
        <hr className="w-full my-5" />
        <div className="flex flex-row flex-wrap w-full ml-5 gap-y-4">
          <p className="w-1/4 font-sans text-sm">08:30am</p>
          <p className="w-1/4 font-sans text-sm">10:30am</p>
          <p className="w-1/4 font-sans text-sm">12:00pm</p>
          <p className="w-1/4 font-sans text-sm">02:00pm</p>
          <p className="w-1/4 font-sans text-sm">04:30pm</p>
          <p className="w-1/4 font-sans text-sm">07:00pm</p>
          <p className="w-1/4 font-sans text-sm">08:30pm</p>
        </div>
        <div className="flex flex-row justify-between mt-6 mx-8">
          <p className="font-sans">Price</p>
          <p className="font-sans font-bold">$10.00/seat</p>
        </div>
        <button className="bg-primary font-sans text-white w-3/4 mt-8 py-3 mx-auto">
          Book Now
        </button>
      </div>
      <div className="hidden lg:flex flex-col h-88 w-95 bg-white justify-center">
        <div className="flex-row flex w-full justify-center gap-x-5 mt-6">
          <img src={logo} alt="" className=" object-contain" />
          <div className="w-1/2">
            <h3>ebv.id</h3>
            <p>whatever street no.12. south purwokerto</p>
          </div>
        </div>
        <hr className="w-full my-5" />
        <div className="flex flex-row flex-wrap w-full ml-5 gap-y-4">
          <p className="w-1/4 font-sans text-sm">08:30am</p>
          <p className="w-1/4 font-sans text-sm">10:30am</p>
          <p className="w-1/4 font-sans text-sm">12:00pm</p>
          <p className="w-1/4 font-sans text-sm">02:00pm</p>
          <p className="w-1/4 font-sans text-sm">04:30pm</p>
          <p className="w-1/4 font-sans text-sm">07:00pm</p>
          <p className="w-1/4 font-sans text-sm">08:30pm</p>
        </div>
        <div className="flex flex-row justify-between mt-6 mx-8">
          <p className="font-sans">Price</p>
          <p className="font-sans font-bold">$10.00/seat</p>
        </div>
        <button className="bg-primary font-sans text-white w-3/4 mt-8 py-3 mx-auto">
          Book Now
        </button>
      </div>
      <div className="hidden lg:flex flex-col h-88 w-95 bg-white justify-center">
        <div className="flex-row flex w-full justify-center gap-x-5 mt-6">
          <img src={logo} alt="" className=" object-contain" />
          <div className="w-1/2">
            <h3>ebv.id</h3>
            <p>whatever street no.12. south purwokerto</p>
          </div>
        </div>
        <hr className="w-full my-5" />
        <div className="flex flex-row flex-wrap w-full ml-5 gap-y-4">
          <p className="w-1/4 font-sans text-sm">08:30am</p>
          <p className="w-1/4 font-sans text-sm">10:30am</p>
          <p className="w-1/4 font-sans text-sm">12:00pm</p>
          <p className="w-1/4 font-sans text-sm">02:00pm</p>
          <p className="w-1/4 font-sans text-sm">04:30pm</p>
          <p className="w-1/4 font-sans text-sm">07:00pm</p>
          <p className="w-1/4 font-sans text-sm">08:30pm</p>
        </div>
        <div className="flex flex-row justify-between mt-6 mx-8">
          <p className="font-sans">Price</p>
          <p className="font-sans font-bold">$10.00/seat</p>
        </div>
        <button className="bg-primary font-sans text-white w-3/4 mt-8 py-3 mx-auto">
          Book Now
        </button>
      </div>
      <div className="hidden xl:flex flex-col h-88 w-95 bg-white justify-center">
        <div className="flex-row flex w-full justify-center gap-x-5 mt-6">
          <img src={logo} alt="" className=" object-contain" />
          <div className="w-1/2">
            <h3>ebv.id</h3>
            <p>whatever street no.12. south purwokerto</p>
          </div>
        </div>
        <hr className="w-full my-5" />
        <div className="flex flex-row flex-wrap w-full ml-5 gap-y-4">
          <p className="w-1/4 font-sans text-sm">08:30am</p>
          <p className="w-1/4 font-sans text-sm">10:30am</p>
          <p className="w-1/4 font-sans text-sm">12:00pm</p>
          <p className="w-1/4 font-sans text-sm">02:00pm</p>
          <p className="w-1/4 font-sans text-sm">04:30pm</p>
          <p className="w-1/4 font-sans text-sm">07:00pm</p>
          <p className="w-1/4 font-sans text-sm">08:30pm</p>
        </div>
        <div className="flex flex-row justify-between mt-6 mx-8">
          <p className="font-sans">Price</p>
          <p className="font-sans font-bold">$10.00/seat</p>
        </div>
        <button className="bg-primary font-sans text-white w-3/4 mt-8 py-3 mx-auto">
          Book Now
        </button>
      </div>
      <div className=" flex-col h-88 w-95 bg-white justify-center hidden xl:flex">
        <div className="flex-row flex w-full justify-center gap-x-5 mt-6">
          <img src={logo} alt="" className=" object-contain" />
          <div className="w-1/2">
            <h3>ebv.id</h3>
            <p>whatever street no.12. south purwokerto</p>
          </div>
        </div>
        <hr className="w-full my-5" />
        <div className="flex flex-row flex-wrap w-full ml-5 gap-y-4">
          <p className="w-1/4 font-sans text-sm">08:30am</p>
          <p className="w-1/4 font-sans text-sm">10:30am</p>
          <p className="w-1/4 font-sans text-sm">12:00pm</p>
          <p className="w-1/4 font-sans text-sm">02:00pm</p>
          <p className="w-1/4 font-sans text-sm">04:30pm</p>
          <p className="w-1/4 font-sans text-sm">07:00pm</p>
          <p className="w-1/4 font-sans text-sm">08:30pm</p>
        </div>
        <div className="flex flex-row justify-between mt-6 mx-8">
          <p className="font-sans">Price</p>
          <p className="font-sans font-bold">$10.00/seat</p>
        </div>
        <button className="bg-primary font-sans text-white w-3/4 mt-8 py-3 mx-auto">
          Book Now
        </button>
      </div>
    </div>
    <a href="" className="font-bold font-sans text-primary mb-16">
      view more
    </a>
  </main>

  <Footer />
        </>
    )
}

export default Moviedetail