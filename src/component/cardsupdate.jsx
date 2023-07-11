import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { Show } from '../helpers/toast'

function CardsUpdate ({name, image, genre, id}) {
    const navigate = useNavigate()

    const deleteData = async(movie_id) => {
        try {
            await axios.delete(`http://localhost:8000/movie/${movie_id}`);
            Show('Movie Deleted', 'success')
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <>
        <div className="w-56 h-auto bg-white border border-gray-300 items-center mx-auto py-6 rounded-lg flex flex-col">
        <img
            className="mx-auto w-40 h-64"
            src={image}
            alt={name}
        />
        <div className="p-5">
            <p className="font-bold text-base tracking-wide leading-5">{name}</p>
            <p className="text-gray-400 tracking-wider font-medium text-sm leading-8">
            {genre}
            </p>
        </div>
        <div className="flex flex-col gap-y-2">
            <button
            className="w-40 h-8 mx-auto rounded-md items-center text-primary hover:bg-primary hover:text-white flex justify-center bg-white border border-primary"
            onClick={()=>navigate(`update/${id}`)}
            href="#"
            >
            Update
            </button>
            <button
            className="w-40 h-8 mx-auto rounded-md items-center text-rose-400 hover:bg-rose-400 hover:text-white flex justify-center bg-white border border-rose-400"
            href="#"
            onClick={()=>deleteData(id)}
            >
            Delete
            </button>
        </div>
        </div>
    </>
    )
}

export default CardsUpdate