import React, {useState, useEffect} from "react";
import Header from '../../component/header'
import Footer from '../../component/footer'
import CardsUpdate from '../../component/cardsupdate'
import axios from "axios";
import { Show } from "../../helpers/toast";
import useApi from "../../helpers/useApi";
import { Container } from "../../helpers/toast";


function ManageMovie () {
  const api = useApi()
  const [form, setForm] = useState([])
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const inputChange = (e) => {
    const data = { ...form }
    data[e.target.name] = e.target.value
    setForm(data)
}
const addmovie = () => {
  const formData = new FormData();
  formData.append('movie_banner', selectedFile);
  formData.append('title', form.title);
  formData.append('director', form.director);
  formData.append('casts', form.casts);
  formData.append('release_date', form.release_date);
  formData.append('duration', form.duration);
  formData.append('synopsis', form.synopsis);
  
  // Tambahkan data lain yang diperlukan ke formData

  api({
    method: 'POST',
    url: '/movie',
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
    .then(({ data }) => {
      Show('Success Add Movie', 'success');
    })
    .catch((err) => {
      const axiosErr = err.response.data;
      if (axiosErr.message !== undefined) {
        Show(axiosErr.message, 'warning');
      } else if (axiosErr.error !== undefined) {
        Show(axiosErr.error, 'error');
      }
    });
};

  // const addmovie = () => 
  // api({
  //   method : 'POST',
  //   url : '/movie',
  //   data : form
  // }) 
  // .then(({data})=>{
  //   Show('Success Add Movie', 'success')
  // })
  // .catch((err)=>{
  //   const axiosErr = err.response.data
  //   if (axiosErr.message !== undefined) {
  //       Show(axiosErr.message, 'warning')
  //   } else if (axiosErr.error !== undefined) {
  //       Show(axiosErr.error, 'error')
  //   }
  // })

  const [manager, setManager] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);


  const getMovies = async () => {
    try {
        const {data}= await axios.get(`http://localhost:8000/movie?limit=5&page=${currentPage}`)
        setManager(data.data)
        setTotalPages(Math.ceil(data.meta.total / 10));
    } catch (error) {
        console.log(error)
    }
}
const goToPrevPage = () => {
  setCurrentPage((prevPage) => prevPage - 1);
};

const goToNextPage = () => {
  setCurrentPage((prevPage) => prevPage + 1);
};

useEffect(()=>{
    getMovies()
}, [currentPage])
    return (
        <>
        <Header />
        <Container />
        <main className=" mx-auto pt-14 bg-background">
    <h1 className="font-bold w-4/5 mx-auto text-2xl mb-6">Form Movie</h1>
    <div className="bg-white px-10 py-14 w-4/5 mx-auto">
      <div className="flex flex-row w-full">
        <div className="w-1/4 flex justify-center items-center flex-col">
          <h1>Input Movie Banner</h1>
        <input name="movie_banner" type="file" class="file-input file-input-bordered w-full max-w-xs" onChange={handleFileChange}  />
        </div>
        <div className="w-3/4 flex flex-row flex-wrap gap-x-14 gap-y-6">
          <div className="flex flex-col gap-y-3 w-1/3">
            <label htmlFor="Movie" className="font-sans">
              Movie Name
            </label>
            <input
              type="text"
              name="title"
              placeholder="Spider-Man:Homecoming"
              className="px-4 py-3 border border-gray-200 rounded-md"
              onChange={inputChange}
            />
          </div>
          <div className="flex flex-col gap-y-3 w-1/3">
            <label htmlFor="Movie" className="font-sans">
              Category
            </label>
            <input
            disabled
              type="text"
              placeholder="Action, Adventure, Sci-fi"
              className="px-4 py-3 border border-gray-200 rounded-md"
              onChange={inputChange}
            />
          </div>
          <div className="flex flex-col gap-y-3 w-1/3">
            <label htmlFor="Movie" className="font-sans">
              Director
            </label>
            <input
              type="text"
              name="director"
              placeholder="Jon Watts"
              className="px-4 py-3 border border-gray-200 rounded-md"
              onChange={inputChange}
            />
          </div>
          <div className="flex flex-col gap-y-3 w-1/3">
            <label htmlFor="Movie" className="font-sans">
              Casts
            </label>
            <input
              type="text"
              name="casts"
              placeholder="Tom Holland, Michael Keaton"
              className="px-4 py-3 border border-gray-200 rounded-md"
              onChange={inputChange}
            />
          </div>
          <div className="flex flex-col gap-y-3 w-1/3">
            <label htmlFor="Movie" className="font-sans">
              Release Date
            </label>
            <input
              type="text"
              name="release_date"
              placeholder="07/05/2020"
              className="px-4 py-3 border border-gray-200 rounded-md"
              onChange={inputChange}
            />
          </div>
          <div className="flex flex-col gap-y-3 w-1/3">
            <label htmlFor="Movie" className="font-sans">
              Duration
            </label>
            <input
              type="text"
              name="duration"
              placeholder="1 Hour 14 Minutes"
              className="px-4 py-3 border border-gray-200 rounded-md"
              onChange={inputChange}
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
          name="synopsis"
          placeholder="Thrilled by his experience with the Avengers, Peter returns home, where he
      lives with his Aunt May, | "
          className="w-full h-24 overflow-y-scroll border border-gray-200 rounded-md mt-3"
          onChange={inputChange}
        />
      </div>
      <div className="flex flex-row place-content-end gap-x-6 mt-10 mb-14">
        <button className="px-14 py-3 border-2 font-sans text-primary font-bold border-primary">
          Reset
        </button>
        <button className="px-14 py-3 border border-primary font-sans font-bold text-white bg-primary" onClick={addmovie} >
          Submit
        </button>
      </div>
    </div>
  </main>
  <main className="bg-background flex items-center flex-col">
    <header className="flex flex-row justify-between w-4/5 mx-auto mt-20">
      <h1 className="font-bold font-sans  text-2xl mb-6">Data Movie</h1>
      <div className="flex flex-row gap-x-10 w-1/2 justify-end">
        <select class="select select-bordered w-1/4 max-w-xs">
          <option disabled selected>All</option>
        </select>
        <input type="text" placeholder="Search Movie Name" class="input input-bordered w-3/4 max-w-xs" />
      </div>
    </header>
    <div className="bg-white w-4/5 mx-auto flex flex-row">
    {manager.map((v)=>{
                return <CardsUpdate name={v.title} image={v.movie_banner} genre={v.genres} id={v.movie_id}/>
            })}
    </div>
    <div className="flex flex-row gap-x-2 mt-5 mb-11">
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

    </div>
  </main>
  <Footer />
        </>
    )
}

export default ManageMovie