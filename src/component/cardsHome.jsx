import React from "react";
import {useNavigate} from 'react-router-dom'

function CardsHome ({name, image, genre,id}) {
    const navigate = useNavigate()
    return (
        <div className="w-56 h-80 border border-white flex flex-col items-center justify-center group  hover:scale-105 transform transition-all duration-300">
        <img src={image} alt="" />
        <h1 className="hidden group-hover:block">{name}</h1>
        <p className="hidden group-hover:block">{genre}</p>
        <button
         className="hidden text-sm  inline-block rounded-md border border-primary px-10 py-2 text-center text-primary group-hover:block hover:bg-primary hover:text-white" onClick={() => navigate(`/detail/${id}`)}>
                    Detail
                </button>
      </div>
    )
}


export default CardsHome