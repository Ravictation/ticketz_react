import React from "react";
import {useNavigate} from 'react-router-dom'

function Cards ({name, image, genre,id}) {
    const navigate = useNavigate()
    return (
        <div class="card w-56 bg-base-100 card-bordered	my-2">
            <figure class="px-5 pt-10 rounded-md">
                <img className="rounded-md h-80" src={image} alt="Shoes" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title text-sm line-clamp-1">{name}</h2>
                <p className="text-gray-400 text-sm line-clamp-1">{genre}</p>
                <button class="btn btn-sm btn-outline btn-primary w-32" onClick={() => navigate(`/detail/${id}`)}>
                    Detail
                </button>
            </div>
        </div>
    )
}


export default Cards