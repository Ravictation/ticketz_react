import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import {Container, Show} from '../helpers/toast'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import useApi from '../helpers/useApi'
import Select from 'react-select';
import { useEffect } from 'react'

function UpdateForm({name, date, casts, director, synopsis, image, duration, id}) {


    // const [body, setUpdates] = useState({
    //     "movie_id": `${id}`,
    //     "title": `${name}`, 
    //     // "movie_banner": `${image}`,
    //     "release_date": `${date}`,  
    //     "casts": `${casts}`, 
    //     "director": `${director}`, 
    //     "synopsis": `${synopsis}`,
    //     "duration": `${duration}`
    // })
    // const handleInput = (event) => {
    //     setUpdates({...body, [event.target.name]: event.target.value})
    // }
    // function handleSubmit(event){
    //     event.preventDefault()
    //     axios.patch('http://localhost:8000/movie', {body})
    //     .then(response=>
    //         console.log(response),
    //         Show('Movie Updated', 'success')
    //         )
    //     .catch(err=>console.log(err))
    // }
    const api = useApi()
    const [form, setForm] = useState([])
    const [selectedFile, setSelectedFile] = useState(null);
    const [genres, setGenres] = useState([]);
    const genreChange = (values) => setSelectGenre(values)

    const [selectGenre, setSelectGenre] = useState([])
    const arr = selectGenre.map(v=> v.genre_id)
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
      };
    const inputChange = (e) => {
        const data = { ...form }
        data[e.target.name] = e.target.value
        setForm(data)
    }
    const updateMovie = () => {
        const formData = new FormData();
        formData.append('movie_id', form.movie_id)
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
          method: 'PATCH',
          url: '/movie',
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
          .then(({ data }) => {
            Show('Success Update Movie', 'success');
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
      const getGenres = async () => {
        try {
         const {data} = await axios.get('http://localhost:8000/genre')
         setGenres(data.data)
        } catch (error) {
          console.log(error)
          
        }
      }
      useEffect(() => {
        getGenres()
      }, []) 
  return (
    <>
        <section className="relative max-w-7xl mx-auto w-full h-full py-10 flex flex-col font-inter">
            <form className="relative flex flex-col gap-y-8 w-full h-full px-16 justify-center">
                <div className="">
                <div className="justify-center flex xl:flex-row flex-col gap-x-5">
                    <div className='flex flex-col'>
                    <img
                    className="w-60 h-auto xl:mx-10 mx-auto"
                    src={image}
                    />
                    <input type="file" name="movie_banner" onChange={handleFileChange} class="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                    <div className="flex flex-col gap-y-3">
                    <div className="flex flex-col font-mulish">
                        <label  className="text-gray-600 py-2">
                        Movie Name
                        </label>
                        <input
                        className="rounded-lg h-16 border border-gray-200 px-5"
                        type="text"
                        name="title"
                        onChange={inputChange}
                        defaultValue={name}
                        />
                    </div>
                    <div className="flex flex-col font-mulish">
                        <label className="text-gray-600 py-2">
                        Movie Id
                        </label>
                        <input
                        className="rounded-lg h-16 border border-gray-200 px-5"
                        type="text"
                        name="movie_id"
                        onChange={inputChange}
                        defaultValue={id}
                        />
                    </div>
                    <div className="flex flex-col font-mulish">
                        <label className="text-gray-600 py-2">
                        Director
                        </label>
                        <input
                        className="rounded-lg h-16 border border-gray-200 px-5"
                        type="text"
                        required
                        name="director"
                        onChange={inputChange}
                        defaultValue={director}
                        />
                    </div>
                    <div className="flex flex-col font-mulish">
                        <label htmlFor="date" className="text-gray-600 py-2">
                        Release Date
                        </label>
                        <input
                        className="rounded-lg h-16 border border-gray-200 px-5"
                        type="text"
                        name="release_date"
                        required
                        onChange={inputChange}
                        defaultValue={date}
                        />
                    </div>
                    </div>
                    <div className="flex flex-col gap-y-3">
                    <div className="flex flex-col font-mulish">
                        <label htmlFor="genre" className="text-gray-600 py-2">
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
                        {/* <Dropdown  options={options}  value={defaultOption} placeholder="Select an option" /> */}
                    </div>
                    <div className="flex flex-col font-mulish">
                        <label htmlFor="casts" className="text-gray-600 py-2">
                        Casts
                        </label>
                        <input
                        className="rounded-lg h-16 border border-gray-200 px-5"
                        type="text"
                        name="casts"
                        required
                        onChange={inputChange}
                        defaultValue={casts}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="min" className="text-gray-600 py-2">
                            Duration Minute
                        </label>
                        <input
                            className="rounded-lg h-16 border border-gray-200 px-5"
                            type="text"
                            name="duration"
                            required
                            onChange={inputChange}
                            defaultValue={duration}
                        />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full pt-10 flex-start">
                    <label htmlFor="sy" className="text-gray-600 py-2">
                    Synopsis
                    </label>
                    <textarea
                    className="rounded-lg w-auto h-32 border border-gray-200 px-5"
                    aria-required
                    onChange={inputChange}
                    name="synopsis"
                    defaultValue={synopsis}
                    />
                </div>
                </div>
                <button
                type="submit"
                className="bg-primary h-16 rounded-lg text-white font-bold"
                onClick={updateMovie}
                >
                UPDATE
                </button>
            </form>
        </section>
    </>
  )
}

export default UpdateForm