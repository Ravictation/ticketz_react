import React from "react"

function Addmovie () {
    return (
        <form >
  <input className="px-5 py-2 border-2 rounded-lg border-gray"
    type="text"
    placeholder="Movie ID"
 
  />
  <input className="px-5 py-2 border-2 rounded-lg border-gray"
    type="text"
    placeholder="Title"
  
  />
   <label htmlFor="movieBanner">Movie Banner</label>
  <input
    type="file"
    placeholder="Movie Banner"

  />
  <input className="px-5 py-2 border-2 rounded-lg border-gray"
    type="text"
    placeholder="Duration"
  />
  <input className="px-5 py-2 border-2 rounded-lg border-gray"
    type="text"
    placeholder="Director"
  />
  <input className="px-5 py-2 border-2 rounded-lg border-gray"
    type="text"
    placeholder="Casts"
  />
  <input className="px-5 py-2 border-2 rounded-lg border-gray"
    type="text"
    placeholder="Release Date"
  />
  <input className="px-5 py-2 border-2 rounded-lg border-gray"
    type="text"
    placeholder="Synopsis"
  />
  <button className="px-5 py-2 bg-primary rounded-lg text-white" type="submit">Add Movie</button>
</form>
    )
}

export default Addmovie