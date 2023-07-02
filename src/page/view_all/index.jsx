import React from "react";
import Header from '../../component/header'
import Footer from '../../component/footer'
import Cards from '../../component/cards'
import card1 from '../../img/movie1.png'

function viewall () {
    return (
        <>
    <Header/>

    <main className="bg-background flex flex-col items-center justify-center ">
    <header className="pb-8 pt-12 w-full ">
      <div className="flex flex-col md:flex-row justify-between ">
        <h2 className="text-2xl ml-20">List Movie</h2>
        <div className="flex gap-x-12 mr-20 justify-between">
          <select id="cars" className="bg-grey rounded-lg pr-12 pl-4 py-3">
            <option value="Sort">Sort</option>
          </select>
          <input
            type="text"
            className="bg-grey rounded-lg px-4 py-3"
            placeholder="Search Movie Name ..."
          />
        </div>
      </div>
    </header>
    <div className="months flex flex-row gap-x-4 overflow-x-auto pb-8 w-full pl-20">
      <div className="months-button  box-border px-10 h-10 w-32 text-sm text-center rounded border border-primary bg-primary text-white hover:bg-primary hover:text-white cursor-pointer active:bg-primary flex items-center font-sans font-bold justify-center">
        September
      </div>
      <div className="months-button  box-border px-10  h-10 w-32 text-sm text-center rounded border border-primary text-primary hover:bg-primary hover:text-white cursor-pointer active:bg-primary flex items-center font-sans font-bold justify-center">
        Oktober
      </div>
      <div className="months-button  box-border px-10  h-10 w-32 text-sm text-center rounded border border-primary text-primary hover:bg-primary hover:text-white cursor-pointer active:bg-primary flex items-center font-sans font-bold justify-center">
        November
      </div>
      <div className="months-button  box-border px-10  h-10 w-32 text-sm text-center rounded border border-primary text-primary hover:bg-primary hover:text-white cursor-pointer active:bg-primary flex items-center font-sans font-bold justify-center">
        Desember
      </div>
      <div className="months-button  box-border px-10  h-10 w-32 text-sm text-center rounded border border-primary text-primary hover:bg-primary hover:text-white cursor-pointer active:bg-primary flex items-center font-sans font-bold justify-center">
        Januari
      </div>
      <div className="months-button  box-border px-10  h-10 w-32 text-sm text-center rounded border border-primary text-primary hover:bg-primary hover:text-white cursor-pointer active:bg-primary flex items-center font-sans font-bold justify-center">
        Februari
      </div>
      <div className="months-button  box-border px-10  h-10 w-32 text-sm text-center rounded border border-primary text-primary hover:bg-primary hover:text-white cursor-pointer active:bg-primary flex items-center font-sans font-bold justify-center">
        Maret
      </div>
      <div className="months-button  box-border px-10  h-10 w-32 text-sm text-center rounded border border-primary text-primary hover:bg-primary hover:text-white cursor-pointer active:bg-primary flex items-center font-sans font-bold justify-center">
        April
      </div>
      <div className="months-button  box-border px-10  h-10 w-32 text-sm text-center rounded border border-primary text-primary hover:bg-primary hover:text-white cursor-pointer active:bg-primary flex items-center font-sans font-bold justify-center">
        Mei
      </div>
      <div className="months-button  box-border px-10  h-10 w-32 text-sm text-center rounded border border-primary text-primary hover:bg-primary hover:text-white cursor-pointer active:bg-primary flex items-center font-sans font-bold justify-center">
        Juni
      </div>
      <div className="months-button  box-border px-10  h-10 w-32 text-sm text-center rounded border border-primary text-primary hover:bg-primary hover:text-white cursor-pointer active:bg-primary flex items-center font-sans font-bold justify-center">
        Juli
      </div>
      <div className="months-button  box-border px-10  h-10 w-32 text-sm text-center rounded border border-primary text-primary hover:bg-primary hover:text-white cursor-pointer active:bg-primary flex items-center font-sans font-bold justify-center">
        Agustus
      </div>
    </div>
    <div className="movie-container flex flex-row  bg-white flex-wrap gap-y-12 pt-11 gap-x-16 w-6/7 pb-10 w-4/5 pl-10 ">
    <Cards image={card1} name="spiderman" genre="action,comedy"/>
    <Cards image={card1} name="spiderman" genre="action,comedy"/>
    <Cards image={card1} name="spiderman" genre="action,comedy"/>
    <Cards image={card1} name="spiderman" genre="action,comedy"/>
    <Cards image={card1} name="spiderman" genre="action,comedy"/>
    <Cards image={card1} name="spiderman" genre="action,comedy"/>
    <Cards image={card1} name="spiderman" genre="action,comedy"/>
    </div>

    <div className="button page flex flex-row gap-x-2 mb-12 mt-8 ">
      <a href="" className="px-3 py-3 bg-primary rounded-lg text-white ">
        1
      </a>
      <a
        href=""
        className="px-3 py-3 bg-white rounded-lg text-primary hover:bg-primary hover:text-white"
      >
        2
      </a>
      <a
        href=""
        className="px-3 py-3 bg-white rounded-lg text-primary hover:bg-primary hover:text-white"
      >
        3
      </a>
      <a
        href=""
        className="px-3 py-3 bg-white rounded-lg text-primary hover:bg-primary hover:text-white"
      >
        4
      </a>
    </div>
   
  </main>

  <Footer />
    </>
    )
}

export default viewall