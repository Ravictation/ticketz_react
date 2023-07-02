import React from 'react'
import logo from '../img/Vector.png'
import search from '../img/search.png'
import profile from '../img/Ellipse 11.png'


function Header () {
    return (
        <header className="bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-5">
          <div className=" md:flex md:gap-x-12 items-center justify-between">
            <a href="home.html">
              <img
                className="md:h-12 h-10 md:w-auto"
                src={logo}
                alt="logo"
              />
            </a>
            <div className="hidden lg:flex lg:gap-x-12">
              <a
                href="home.html"
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Home
              </a>
              <a
                href="viewall.html"
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                List Movie
              </a>
            </div>
          </div>
          <div className="hidden lg:flex lg:items-center lg:gap-x-12 lg:justify-end  ">
            <a
              data-modal-target="defaultModal"
              data-modal-toggle="defaultModal"
              className="cursor-pointer"
            >
              <img src={search} alt="" />
            </a>
            <details className="dropdown">
             
            <summary className=" inline-block cursor-pointer"><img src={profile} alt="" /></summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li><a>Profile</a></li>
                <li><a>Log out</a></li>
            </ul>
            </details>
          </div>
          <div className="flex justify-end lg:hidden">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            <div
              id="dropdown"
              className="flex w-full z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="w-full items-center py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <input
                    type="text"
                    className="w-4/5 ml-20 mb-10 items-center"
                    placeholder="Search..."
                  />
                </li>
                <li>
                  <a
                    href="home.html"
                    className="block w-full text-center py-3 border border-gray text-black font-sans font-bold"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="viewall.html"
                    className="block w-full text-center py-3 border border-gray text-black font-sans font-bold"
                  >
                    List Movie
                  </a>
                </li>
                <li>
                  <a
                    href="profile.html"
                    className="block w-full text-center py-3 border border-gray text-black font-sans font-bold"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block w-full text-center py-3 border border-gray text-black font-sans font-bold"
                  >
                    Log out
                  </a>
                </li>
                <li>
                  <p className="text-center font-sans py-3 border border-gray">
                    © 2020 Tickitz. All Rights Reserved
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
}

export default Header