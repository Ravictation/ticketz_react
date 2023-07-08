import React from "react";
import { useNavigate } from "react-router-dom";

function CardsAdmin ( {name, image, genre,id}) {
    return (
        <div class="card w-56 bg-base-100 card-bordered	my-2">
        <figure class="px-5 pt-10 rounded-md">
            <img className="rounded-md h-80" src={image} alt="Shoes" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title text-sm line-clamp-1">{name}</h2>
            <p className="text-gray-400 text-sm line-clamp-1">{genre}</p>
            <button className="btn btn-sm btn-outline btn-primary w-32" onClick={() => navigate(`/detail/${id}`)}>
                Update
            </button>
            <button className="btn btn-sm btn-outline btn-red w-32">Delete</button>
        </div>
    </div>
    )
}

export default CardsAdmin