import React from "react";
import logo from '../../img/Vector.png'
import banner from '../../img/image 1.png'
import vector from '../../img/tickitz 1.png'
import SignUpForm from '../../component/signupform'

function Signup () {
    return (
        <main className="flex flex-row w-full">
    <div className="hidden banner w-2/3 md:w-1/2 lg:w-2/3 md:flex flex-col">
      <div className="relative">
        <img
          src={banner}
          alt=""
          className="bg-center object-cover w-full h-screen"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-violet-800 opacity-50" />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <img src={vector} alt="" className="mb-4" />
          <h1 className="font-sans text-white text-center text-2xl">
            Wait, watch, wow!
          </h1>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col pl-20 pt-16">
      {/* <header>
        <img src={logo} alt="" className="md:hidden" />
        <h1 className="font-extrabold text-5xl font-sans pb-3">Sign Up</h1>
        <p className="font-sans text-gray-400 pb-12 text-base">
          Fill your additional details
        </p>
      </header> */}
      <SignUpForm />
      <footer>
        <p className="font-sans text-center mb-5 text-gray-600 mr-10">
          Forgot your password?
          <a href="#" className="text-primary">
            Reset now
          </a>
        </p>
        <p className="font-sans text-center text-gray-600 mr-10">
          Dont have an account?{" "}
          <a href="#" className="text-primary">
            Sign up
          </a>
        </p>
      </footer>
    </div>
  </main>
    )
}

export default Signup