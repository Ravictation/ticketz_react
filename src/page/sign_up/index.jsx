import React, {useState} from "react";
import logo from '../../img/Vector.png'
import banner from '../../img/image 1.png'
import vector from '../../img/tickitz 1.png'
import useApi from '../../helpers/useApi'
import { Container } from '../../helpers/toast'
import { Show } from '../../helpers/toast'
import { Link, useNavigate } from 'react-router-dom'

function Signup () {
  const [form, setForm] = useState({})

  const navigate = useNavigate()
  const api = useApi()

  const inputChange = (e) => {
      const data = { ...form }
      data[e.target.name] = e.target.value
      setForm(data)
  }

  const register = () =>
    api({
      method : 'POST',
      url : '/users',
      data : form
    }) 
    .then(({data})=>{
      Show('Registrasi Berhasil', 'success');
      setTimeout(()=> {
        navigate('/signin')
      }, 3050)
    })
    .catch((err)=>{
      const axiosErr = err.response.data
      if (axiosErr.message !== undefined) {
          Show(axiosErr.message, 'warning')
      } else if (axiosErr.error !== undefined) {
          Show(axiosErr.error, 'error')
      }
    })
 
    return (
        <main className="flex flex-row w-full">
          <Container />
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
      <header>
        <img src={logo} alt="" className="md:hidden" />
      </header>
      <div className="relative flex flex-col gap-y-8 w-full h-full px-16 justify-center">
      <div className="flex flex-col gap-y-4">
        <h1 className="font-semibold text-5xl">Sign Up</h1>
        <h2 className="text-xl text-gray-400">Fill your additional details</h2>
      </div>
      <div className="flex flex-col gap-y-3">
        <div className="flex flex-col font-mulish">
          <label className="text-gray-600 py-2">
            username
          </label>
          <input
            className="rounded-lg h-16 border border-gray-200 px-5"
            type="text"
            name="username"
            placeholder="Write your username"
            required=""
            onChange={inputChange}
          />
        </div>
        <div className="flex flex-col font-mulish">
          <label  className="text-gray-600 py-2">
            Full Name
          </label>
          <input
            className="rounded-lg h-16 border border-gray-200 px-5"
            type="text"
            name="full_name"
            placeholder="Write your Full name"
            required=""
            onChange={inputChange}
          />
        </div>
        <div className="flex flex-col font-mulish">
          <label  className="text-gray-600 py-2">
            Phone Number
          </label>
          <input
            className="rounded-lg h-16 border border-gray-200 px-5"
            type="tel"
            name="phone"
            placeholder="Write your phone number"
            required=""
            onChange={inputChange}
          />
        </div>
        <div className="flex flex-col font-mulish">
          <label  className="text-gray-600 py-2">
            Email
          </label>
          <input
            className="rounded-lg h-16 border border-gray-200 px-5"
            type="text"
            name="email"
            placeholder="Write your email"
            required=""
            onChange={inputChange}
          />
        </div>
        <div className="flex flex-col font-mulish">
          <label  className="text-gray-600 py-2">
            Password
          </label>
          <input
            className="rounded-lg h-16 border border-gray-200 px-5"
            type="password"
            name="password"
            placeholder="Password"
            required=""
            onChange={inputChange}
          />
        </div>
      </div>
      <button
        onClick={register}
        className="bg-primary h-16 rounded-lg text-white font-bold"
      >
        Sign Up
      </button>
      <div className="flex flex-col gap-y-2 text-center">
        <p className="text-gray-400">
          Already have account ?{" "}
          <Link className="text-primary underline" to='/signin'>
            Sign In
          </Link>
        </p>
        <p className="font-sans text-center mb-5 text-gray-600 mr-10">
          Forgot your password?
          <a href="/" className="text-primary">
            Reset now
          </a>
        </p>
      </div>
    </div>
      <footer>
       
      </footer>
    </div>
  </main>
    )
}

export default Signup