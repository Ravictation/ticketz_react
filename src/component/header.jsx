import React from 'react'
import logo from '../img/Vector.png'
import search from '../img/search.png'
import avatar from '../img/Ellipse 11.png'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/reducer/user'

function Header () {
  const dispatch = useDispatch()
  const {isAuth, data} = useSelector ((s) => s.users)
  // const isAuth = false
    return (
        <header className="bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-5">
          <div className=" md:flex md:gap-x-12 items-center justify-between">
            <Link to="/">
              <img
                className="md:h-12 h-10 md:w-auto"
                src={logo}
                alt="logo"
              />
            </Link>
            { data[0] && data[0].role == 'admin' ? (
                            <>
                                <Link className="hidden lg:flex text-base font-sans " to="/">Dashboard</Link>
                                <Link className="hidden lg:flex pl-7 text-base font-sans " to="/admin">Manage Movie</Link>
                            </>
                        ) : (
                            <>
                                <Link className="hidden lg:flex  text-base font-sans " to="/">Home</Link>
                                <Link className="hidden lg:flex pl-7  text-base font-sans " to="/movie">List
                                    Movie</Link>
                            </>
                        )}
            {/* <div className="hidden lg:flex lg:gap-x-12">
              <Link
                to="/"
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                to="/movie"
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                List Movie
              </Link>
            </div> */}
          </div>
          {isAuth ? (
            <div className="hidden lg:flex lg:items-center lg:gap-x-12 lg:justify-end  ">
            <a
              data-modal-target="defaultModal"
              data-modal-toggle="defaultModal"
              className="cursor-pointer"
            >
              <img src={search} alt="" />
            </a>
            <details className="dropdown">
             
            <summary className=" inline-block cursor-pointer"><img src={avatar} alt="" /></summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={() => dispatch(logout())}>Log out</Link></li>
            </ul>
            </details>
          </div>) : (
            <div className="hidden lg:flex lg:justify-end">
            <Link to="/signup" className="text-sm inline-block rounded-md border border-transparent bg-primary px-8 py-3 text-center text-white hover:bg-indigo-700">
                Sign Up
            </Link>
        </div>
          )}
          
        </nav>
      </header>
    )
}

export default Header