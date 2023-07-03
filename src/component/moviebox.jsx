import React from 'react'


function Moviebox (image, title,genre_name,duration, release_date, director, casts, synopsis) {

    return(
        
<main className="flex-col w-full flex lg:flex-row pt-10 gap-x-14 pb-10 items-center justify-center">
    <div className="w-full mx-auto flex items-center justify-center lg:ml-20 lg:w-1/5">
      <div className="w-83 h-114 border border-gray-500 rounded-lg flex justify-center items-center">
        <img src={image} alt="" className="object-cover" />
      </div>
    </div>
    <div className="w-4/5 flex flex-col mr-10 ">
      <h1 className="font-bold font-sans text-3xl mb-2">
        {title}
      </h1>
      <h3 className="font-sans text-gray-500 mb-8">
        {genre_name}
      </h3>
      <div className="flex flex-row w-full flex-wrap gap-y-4">
        <div className="w-1/2">
          <p className="font-sans text-gray-500">Release date</p>
          <p className="font-sans">{release_date}</p>
        </div>
        <div className="w-1/2">
          <p className="font-sans text-gray-500">Directed by</p>
          <p className="font-sans">{director}</p>
        </div>
        <div className="w-1/2">
          <p className="font-sans text-gray-500">Duration</p>
          <p className="font-sans">{duration}</p>
        </div>
        <div className="w-1/2">
          <p className="font-sans text-gray-500">Casts</p>
          <p className="font-sans">
           {casts}
          </p>
        </div>
      </div>
      <hr className="w-full my-5" />
      <h1 className="font-bold font-sans text-2xl mb-2">Synopsis</h1>
      <p>
        {synopsis}
      </p>
    </div>
  </main>
    )
}

export default Moviebox