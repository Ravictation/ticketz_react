import React, {useState, useEffect} from "react";
import Header from '../../component/header'
import Footer from '../../component/footer'
import CardsUpdate from '../../component/cardsupdate'
import axios from "axios";


function ManageMovie () {

  const [manager, setManager] = useState([])

  const getMovies = async () => {
    try {
        const {data}= await axios.get('http://localhost:8000/movie?limit=5')
        setManager(data.data)
    } catch (error) {
        console.log(error)
    }
}
// eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(()=>{
    getMovies()
}, [])
    return (
        <>
        <Header />
        <main className=" mx-auto pt-14 bg-background">
    <h1 className="font-bold w-4/5 mx-auto text-2xl mb-6">Form Movie</h1>
    <div className="bg-white px-10 py-14 w-4/5 mx-auto">
      <div className="flex flex-row w-full">
        <div className="w-1/4 flex justify-center items-center">
          <img src="img/movie1.png" alt="" />
        </div>
        <div className="w-3/4 flex flex-row flex-wrap gap-x-14 gap-y-6">
          <div className="flex flex-col gap-y-3 w-1/3">
            <label htmlFor="Movie" className="font-sans">
              Movie Name
            </label>
            <input
              type="text"
              placeholder="Spider-Man:Homecoming"
              className="px-4 py-3 border border-gray-200 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-y-3 w-1/3">
            <label htmlFor="Movie" className="font-sans">
              Category
            </label>
            <input
              type="text"
              placeholder="Action, Adventure, Sci-fi"
              className="px-4 py-3 border border-gray-200 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-y-3 w-1/3">
            <label htmlFor="Movie" className="font-sans">
              Director
            </label>
            <input
              type="text"
              placeholder="Jon Watts"
              className="px-4 py-3 border border-gray-200 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-y-3 w-1/3">
            <label htmlFor="Movie" className="font-sans">
              Casts
            </label>
            <input
              type="text"
              placeholder="Tom Holland, Michael Keaton"
              className="px-4 py-3 border border-gray-200 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-y-3 w-1/3">
            <label htmlFor="Movie" className="font-sans">
              Release Date
            </label>
            <input
              type="text"
              placeholder="07/05/2020"
              className="px-4 py-3 border border-gray-200 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-y-3 w-1/3">
            <label htmlFor="Movie" className="font-sans">
              Duration
            </label>
            <input
              type="text"
              placeholder="1 Hour 14 Minutes"
              className="px-4 py-3 border border-gray-200 rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <label htmlFor="Synopsis" className="font-sans">
          Synopsis
        </label>
        <input
          type="text"
          placeholder="Thrilled by his experience with the Avengers, Peter returns home, where he
      lives with his Aunt May, | "
          className="w-full h-24 overflow-y-scroll border border-gray-200 rounded-md mt-3"
        />
      </div>
      <div className="flex flex-row place-content-end gap-x-6 mt-10 mb-14">
        <button className="px-14 py-3 border-2 font-sans text-primary font-bold border-primary">
          Reset
        </button>
        <button className="px-14 py-3 border border-primary font-sans font-bold text-white bg-primary">
          Submit
        </button>
      </div>
    </div>
  </main>
  <main className="bg-background flex items-center flex-col">
    <header className="flex flex-row justify-between w-4/5 mx-auto">
      <h1 className="font-bold font-sans  text-2xl mb-6">Data Movie</h1>
      <div>
        <select name="" id="">
          <option value="Sort">SORT</option>
        </select>
        <input type="text" placeholder="Search Movie Name..." />
      </div>
    </header>
    <div className="bg-white w-4/5 mx-auto flex flex-row">
    {manager.map((v)=>{
                return <CardsUpdate name={v.title} image={v.movie_banner} genre={v.genre_name} id={v.movie_id}/>
            })}
    </div>
    <div className="flex flex-row gap-x-2 mt-5 mb-11">
      <button className="px-4 py-2 border border-gray-200 rounded-lg bg-white font-sans">
        1
      </button>
      <button className="px-4 py-2 border border-gray-200 rounded-lg bg-white font-sans">
        2
      </button>
      <button className="px-4 py-2 border border-gray-200 rounded-lg bg-white font-sans">
        3
      </button>
      <button className="px-4 py-2 border border-gray-200 rounded-lg bg-white font-sans">
        4
      </button>
      <button className="px-4 py-2 border border-gray-200 rounded-lg bg-white font-sans">
        5
      </button>
    </div>
  </main>
  <Footer />
        </>
    )
}

export default ManageMovie