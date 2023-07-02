import React from "react";
import Header from '../../component/header'
import Footer from '../../component/footer'

function Moviedetails () {
    return (
        <>
        <Header />
        <main className="flex-col w-full flex lg:flex-row pt-10 gap-x-14 pb-10 items-center justify-center">
    <div className="w-full mx-auto flex items-center justify-center lg:ml-20 lg:w-1/5">
      <div className="w-83 h-114 border border-gray-500 rounded-lg flex justify-center items-center">
        <img src="img/movie1.png" alt="" className="object-cover" />
      </div>
    </div>
    <div className="w-4/5 flex flex-col mr-10 ">
      <h1 className="font-bold font-sans text-3xl mb-2">
        Spider-Man:Homecoming
      </h1>
      <h3 className="font-sans text-gray-500 mb-8">
        Adventure, Action, Sci-fi
      </h3>
      <div className="flex flex-row w-full flex-wrap gap-y-4">
        <div className="w-1/2">
          <p className="font-sans text-gray-500">Release date</p>
          <p className="font-sans">June 28, 2017</p>
        </div>
        <div className="w-1/2">
          <p className="font-sans text-gray-500">Directed by</p>
          <p className="font-sans">Jon Watss</p>
        </div>
        <div className="w-1/2">
          <p className="font-sans text-gray-500">Duration</p>
          <p className="font-sans">2 Hours 13 Minutes</p>
        </div>
        <div className="w-1/2">
          <p className="font-sans text-gray-500">Casts</p>
          <p className="font-sans">
            Tom Holland, Michael Keatan, Robert Downey Jr
          </p>
        </div>
      </div>
      <hr className="w-full my-5" />
      <h1 className="font-bold font-sans text-2xl mb-2">Synopsis</h1>
      <p>
        Thrilled by his experience with the Avengers, Peter returns home, where
        he lives with his Aunt May, under the watchful eye of his new mentor
        Tony Stark, Peter tries to fall back into his normal daily routine -
        distracted by thoughts of proving himself to be more than just your
        friendly neighborhood Spider-Man - but when the Vulture emerges as a new
        villain, everything that Peter holds most important will be threatened.{" "}
      </p>
    </div>
  </main>
  {/* SHOWTIMES AND TICKETS SECTIONS */}
  <main className="w-full bg-background flex flex-col justify-center items-center">
    <header className="pt-20">
      <h1 className="text-2xl font-bold font-sans mb-10">
        SHOWTIME AND TICKETS
      </h1>
      <div className="flex flex-col gap-y-5 lg:flex-row gap-x-10 mb-20">
        <select name="" id="" className="bg-gray-100 px-10 py-2">
          <option value="27/10/20">27/10/20</option>
        </select>
        <select name="" id="" className="bg-gray-100 px-10 py-2">
          <option value="PURWOKERTO">PURWOKERTO</option>
        </select>
      </div>
    </header>
    <div className="flex flex-row flex-wrap ml-40 gap-x-40 gap-y-8 mb-12">
      <div className="flex flex-col h-88 w-95 bg-white justify-center">
        <div className="flex-row flex w-full justify-center gap-x-5 mt-6">
          <img src="img/sponsor1.png" alt="" className=" object-contain" />
          <div className="w-1/2">
            <h3>ebv.id</h3>
            <p>whatever street no.12. south purwokerto</p>
          </div>
        </div>
        <hr className="w-full my-5" />
        <div className="flex flex-row flex-wrap w-full ml-5 gap-y-4">
          <p className="w-1/4 font-sans text-sm">08:30am</p>
          <p className="w-1/4 font-sans text-sm">10:30am</p>
          <p className="w-1/4 font-sans text-sm">12:00pm</p>
          <p className="w-1/4 font-sans text-sm">02:00pm</p>
          <p className="w-1/4 font-sans text-sm">04:30pm</p>
          <p className="w-1/4 font-sans text-sm">07:00pm</p>
          <p className="w-1/4 font-sans text-sm">08:30pm</p>
        </div>
        <div className="flex flex-row justify-between mt-6 mx-8">
          <p className="font-sans">Price</p>
          <p className="font-sans font-bold">$10.00/seat</p>
        </div>
        <button className="bg-primary font-sans text-white w-3/4 mt-8 py-3 mx-auto">
          Book Now
        </button>
      </div>
      <div className="flex flex-col h-88 w-95 bg-white justify-center">
        <div className="flex-row flex w-full justify-center gap-x-5 mt-6">
          <img src="img/sponsor1.png" alt="" className=" object-contain" />
          <div className="w-1/2">
            <h3>ebv.id</h3>
            <p>whatever street no.12. south purwokerto</p>
          </div>
        </div>
        <hr className="w-full my-5" />
        <div className="flex flex-row flex-wrap w-full ml-5 gap-y-4">
          <p className="w-1/4 font-sans text-sm">08:30am</p>
          <p className="w-1/4 font-sans text-sm">10:30am</p>
          <p className="w-1/4 font-sans text-sm">12:00pm</p>
          <p className="w-1/4 font-sans text-sm">02:00pm</p>
          <p className="w-1/4 font-sans text-sm">04:30pm</p>
          <p className="w-1/4 font-sans text-sm">07:00pm</p>
          <p className="w-1/4 font-sans text-sm">08:30pm</p>
        </div>
        <div className="flex flex-row justify-between mt-6 mx-8">
          <p className="font-sans">Price</p>
          <p className="font-sans font-bold">$10.00/seat</p>
        </div>
        <button className="bg-primary font-sans text-white w-3/4 mt-8 py-3 mx-auto">
          Book Now
        </button>
      </div>
      <div className="hidden lg:flex flex-col h-88 w-95 bg-white justify-center">
        <div className="flex-row flex w-full justify-center gap-x-5 mt-6">
          <img src="img/sponsor1.png" alt="" className=" object-contain" />
          <div className="w-1/2">
            <h3>ebv.id</h3>
            <p>whatever street no.12. south purwokerto</p>
          </div>
        </div>
        <hr className="w-full my-5" />
        <div className="flex flex-row flex-wrap w-full ml-5 gap-y-4">
          <p className="w-1/4 font-sans text-sm">08:30am</p>
          <p className="w-1/4 font-sans text-sm">10:30am</p>
          <p className="w-1/4 font-sans text-sm">12:00pm</p>
          <p className="w-1/4 font-sans text-sm">02:00pm</p>
          <p className="w-1/4 font-sans text-sm">04:30pm</p>
          <p className="w-1/4 font-sans text-sm">07:00pm</p>
          <p className="w-1/4 font-sans text-sm">08:30pm</p>
        </div>
        <div className="flex flex-row justify-between mt-6 mx-8">
          <p className="font-sans">Price</p>
          <p className="font-sans font-bold">$10.00/seat</p>
        </div>
        <button className="bg-primary font-sans text-white w-3/4 mt-8 py-3 mx-auto">
          Book Now
        </button>
      </div>
      <div className="hidden lg:flex flex-col h-88 w-95 bg-white justify-center">
        <div className="flex-row flex w-full justify-center gap-x-5 mt-6">
          <img src="img/sponsor1.png" alt="" className=" object-contain" />
          <div className="w-1/2">
            <h3>ebv.id</h3>
            <p>whatever street no.12. south purwokerto</p>
          </div>
        </div>
        <hr className="w-full my-5" />
        <div className="flex flex-row flex-wrap w-full ml-5 gap-y-4">
          <p className="w-1/4 font-sans text-sm">08:30am</p>
          <p className="w-1/4 font-sans text-sm">10:30am</p>
          <p className="w-1/4 font-sans text-sm">12:00pm</p>
          <p className="w-1/4 font-sans text-sm">02:00pm</p>
          <p className="w-1/4 font-sans text-sm">04:30pm</p>
          <p className="w-1/4 font-sans text-sm">07:00pm</p>
          <p className="w-1/4 font-sans text-sm">08:30pm</p>
        </div>
        <div className="flex flex-row justify-between mt-6 mx-8">
          <p className="font-sans">Price</p>
          <p className="font-sans font-bold">$10.00/seat</p>
        </div>
        <button className="bg-primary font-sans text-white w-3/4 mt-8 py-3 mx-auto">
          Book Now
        </button>
      </div>
      <div className="hidden xl:flex flex-col h-88 w-95 bg-white justify-center">
        <div className="flex-row flex w-full justify-center gap-x-5 mt-6">
          <img src="img/sponsor1.png" alt="" className=" object-contain" />
          <div className="w-1/2">
            <h3>ebv.id</h3>
            <p>whatever street no.12. south purwokerto</p>
          </div>
        </div>
        <hr className="w-full my-5" />
        <div className="flex flex-row flex-wrap w-full ml-5 gap-y-4">
          <p className="w-1/4 font-sans text-sm">08:30am</p>
          <p className="w-1/4 font-sans text-sm">10:30am</p>
          <p className="w-1/4 font-sans text-sm">12:00pm</p>
          <p className="w-1/4 font-sans text-sm">02:00pm</p>
          <p className="w-1/4 font-sans text-sm">04:30pm</p>
          <p className="w-1/4 font-sans text-sm">07:00pm</p>
          <p className="w-1/4 font-sans text-sm">08:30pm</p>
        </div>
        <div className="flex flex-row justify-between mt-6 mx-8">
          <p className="font-sans">Price</p>
          <p className="font-sans font-bold">$10.00/seat</p>
        </div>
        <button className="bg-primary font-sans text-white w-3/4 mt-8 py-3 mx-auto">
          Book Now
        </button>
      </div>
      <div className=" flex-col h-88 w-95 bg-white justify-center hidden xl:flex">
        <div className="flex-row flex w-full justify-center gap-x-5 mt-6">
          <img src="img/sponsor1.png" alt="" className=" object-contain" />
          <div className="w-1/2">
            <h3>ebv.id</h3>
            <p>whatever street no.12. south purwokerto</p>
          </div>
        </div>
        <hr className="w-full my-5" />
        <div className="flex flex-row flex-wrap w-full ml-5 gap-y-4">
          <p className="w-1/4 font-sans text-sm">08:30am</p>
          <p className="w-1/4 font-sans text-sm">10:30am</p>
          <p className="w-1/4 font-sans text-sm">12:00pm</p>
          <p className="w-1/4 font-sans text-sm">02:00pm</p>
          <p className="w-1/4 font-sans text-sm">04:30pm</p>
          <p className="w-1/4 font-sans text-sm">07:00pm</p>
          <p className="w-1/4 font-sans text-sm">08:30pm</p>
        </div>
        <div className="flex flex-row justify-between mt-6 mx-8">
          <p className="font-sans">Price</p>
          <p className="font-sans font-bold">$10.00/seat</p>
        </div>
        <button className="bg-primary font-sans text-white w-3/4 mt-8 py-3 mx-auto">
          Book Now
        </button>
      </div>
    </div>
    <a href="" className="font-bold font-sans text-primary mb-16">
      view more
    </a>
  </main>

  <Footer />
        </>
    )
}

export default Moviedetails