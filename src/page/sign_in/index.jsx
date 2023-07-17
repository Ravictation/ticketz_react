import React, {useState, useEffect} from "react";
import logo from '../../img/Vector.png'
import banner from '../../img/image 1.png'
import vector from '../../img/tickitz 1.png'
import { Link, useNavigate } from 'react-router-dom'
import useApi from "../../helpers/useApi";
import { Show } from "../../helpers/toast";
import {login} from '../../store/reducer/user'
import {useDispatch, useSelector} from 'react-redux'

function Signin () {
  const [form, setForm] = useState ({})
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const api = useApi()

  const {isAuth} = useSelector ((s) => s.users)
  useEffect(() => {
    if (isAuth) {
      navigate ('/')
    }
  }, [isAuth])

  const inputChange = (e) => {
    const data = {...form}
    data[e.target.name] = e.target.value
    setForm(data)
  }

  const goLogin = () => {
    api({
        method: 'POST',
        url: '/auth',
        data: form
    })
        .then(({ data }) => {
          Show('Login success', 'success')
          setTimeout(()=> {
            navigate('/')
          }, 3050);
          const token = data.token
          
          dispatch(login(token))
        })
        .catch((err) => {
            const axiosErr = err.response.data
            if (axiosErr.message !== undefined) {
                Show(axiosErr.message, 'warning')
            } else if (axiosErr.error !== undefined) {
                Show(axiosErr.error, 'error')
            }
        })
}

    return (
        <main className="flex flex-row w-full">
    <div className="hidden banner md:w-1/2 lg:w-2/3 md:flex flex-col">
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
    <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col pl-20 pt-44">
      <header>
        <img src={logo} alt="" className="md:hidden" />
        <h1 className="font-extrabold text-5xl font-sans pb-3">Sign In</h1>
        <p className="font-sans text-gray-400 pb-12 text-base">
          Sign in with your data that you entered during your registration
        </p>
      </header>
      
      <div  className="relative flex flex-col gap-y-8 w-full h-full px-16 justify-center">
      <div className="flex flex-col  justify-center mb-8 w-3/4">
        <label htmlFor="Username">Username</label>
        <input
          type="text"
          name="username"
          className="border border-gray rounded-lg w-full text-black px-3 py-3 mb-6 "
          placeholder="Write your Username"
          onChange={inputChange}
        />
        <label htmlFor="Password"> Password</label>
        <input
          type="password"
          name="password"
          className="border border-gray rounded-lg w-full text-black px-3 py-3 mb-6 "
          placeholder="Write your password"
          onChange={inputChange}
        />
      <button
        onClick={goLogin}
        className="bg-primary h-16 rounded-lg text-white font-bold"
      >
        Sign In
      </button>
      </div>
      <footer>
        <p className="font-sans text-center mb-5 text-gray-600 mr-10">
          Forgot your password?
          <Link to="/" className="text-primary">
            Reset now
          </Link>
        </p>
        <p className="font-sans text-center text-gray-600 mr-10">
          Dont have an account?{" "}
          <Link to="/signup" className="text-primary">
            Sign up
          </Link>
        </p>
      </footer>
    </div>
      
    </div>
  </main>
    )
}

export default Signin