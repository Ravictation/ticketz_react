import React from 'react'
import logo from '../img/Vector.png'
import sponsor1 from '../img/sponsor1.png'
import sponsor2 from '../img/sponsor2.png'
import sponsor3 from '../img/sponsor3.png'
import facebook from '../img/fb.png'
import instagram from '../img/instagram.png'
import twitter from '../img/twitter.png'
import youtube from '../img/youtube.png'
import { Link } from 'react-router-dom'

function Footer () {
    return (
        <>
        <footer className="bg-white flex flex-col ml-10">
    <div className="flex-col flex md:flex-row justify-around pt-24">
      <div>
        <img src={logo} alt="logo" className="mb-4" />
        <p className="text-grey-400 mb-10">
          Stop waiting in line. Buy tickets <br />
          conveniently, watch movies quietly
        </p>
      </div>
      <div className="flex flex-col">
        <h3 className="font-medium  md:mb-8 mb-3">Explore</h3>
        <div className="flex-row flex mb-10 md:flex-col">
          <Link to="/" className="mb-4">
            Home
          </Link>
          <Link to="/movie">List Movie</Link>
        </div>
      </div>
      <div>
        <h3 className="font-medium mb-8">Our Sponsor</h3>
        <div className="flex flex-row gap-x-10 md:flex-col md:items-start">
          <img
            src={sponsor1}
            alt=""
            className="mb-6 max-h-10 object-contain"
          />
          <img
            src={sponsor2}
            alt=""
            className="mb-6 max-h-10 object-contain"
          />
          <img
            src={sponsor3}
            alt=""
            className="max-h-10 object-contain"
          />
        </div>
      </div>
      <div className="social-media">
        <h3 className="font-medium mb-8">Follow us</h3>
        <div className="flex flex-row gap-x-10 md:flex-col">
          <div className="flex gap-x-4 mb-6">
            <img src={facebook} className="object-contain max-h-5" />
            <p className="hidden md:text-sm md:flex">Tickitz Cinema id</p>
          </div>
          <div className="flex gap-x-4 mb-6">
            <img src={instagram} className="object-contain max-h-5" />
            <p className="hidden md:text-sm md:flex">tickitz.id</p>
          </div>
          <div className="flex gap-x-4 mb-6">
            <img src={twitter} className="object-contain max-h-5" />
            <p className="hidden md:text-sm md:flex">tickitz.id</p>
          </div>
          <div className="flex gap-x-4 ">
            <img src={youtube} className="object-contain max-h-5" />
            <p className="hidden md:text-sm md:flex">Tickitz Cinema id</p>
          </div>
        </div>
      </div>
    </div>
    <p className="text-center pb-12 pt-12">
      © 2020 Tickitz. All Rights Reserved
    </p>
  </footer>
        </>
    )
}

export default Footer