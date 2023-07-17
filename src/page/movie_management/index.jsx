import React, {useState, useEffect} from "react";
import Header from '../../component/header'
import Footer from '../../component/footer'
import CardsUpdate from '../../component/cardsupdate'
import axios from "axios";
import { Show } from "../../helpers/toast";
import useApi from "../../helpers/useApi";
import { Container } from "../../helpers/toast";
import Select from 'react-select';
function ManageMovie () {

  const api = useApi()
  const [form, setForm] = useState([])
  const [selectedFile, setSelectedFile] = useState(null);
  const [genres, setGenres] = useState([]);
  // const [selectedGenre, setSelectedGenre] = useState('');
  const genreChange = (values) => setSelectGenre(values)

  const [selectGenre, setSelectGenre] = useState([])
  const arr = selectGenre.map(v=> v.genre_id)
  // const handleGenreChange = (selected) => {
  //   setSelectedGenre(selected.value);
  // };
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
  // formData.append("genre_id", selectedGenre);
  for (var i = 0; i < arr.length; i++) {
            formData.append('genre_id[]', arr[i]);
          }


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

  const [manager, setManager] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filter, setFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

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
        const {data}= await axios.get(`http://localhost:8000/movie?limit=5&page=${currentPage}&genre=${filter}&search=${searchQuery}`)
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
  useEffect(() => {
    getGenres()
  }, []) 
  useEffect(()=>{
      getMovies()
  }, [currentPage, filter, searchQuery])
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
        <img src={selectedFile} />
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
              Genre
            </label>
        
            <div className="flex flex-col font-mulish">
                        <Select 
                            type="text"

                            name='genre_id'
                            onChange={genreChange}
                            options = {genres.map(e => ({ label: e.genre_name, value: e.genre_id, genre_id: e.genre_id }))}
                            isMulti
                        />
                    </div>

            
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
    </header>
    <div className="bg-white w-4/5 mx-auto flex flex-row">
    {manager ? (
      manager.map((v)=>{
                return <CardsUpdate name={v.title} image={v.movie_banner} genre={v.genres} id={v.movie_id}/>
            })): (<h1 className="text-center text-2xl text-bold">Data not found</h1>)}
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