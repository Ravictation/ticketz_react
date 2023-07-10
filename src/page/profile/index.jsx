import React from "react";
import Header from '../../component/header'
import Footer from '../../component/footer'
import { logout } from "../../store/reducer/user";
import { useDispatch } from "react-redux";
import { useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";
import { Show } from "../../helpers/toast";
import { useEffect } from "react";
import useApi from "../../helpers/useApi";
import { useState } from "react";
import Logo from '../../img/Ellipse 11.png'


function Profile () {
  const [form, setForm] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const api = useApi()

  const inputChange = (e) => {
    const data = { ...form }
    data[e.target.name] = e.target.value
    setForm(data)
}
    const updatedata = () =>
    api({
      method : 'PATCH',
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

  const {isAuth} = useSelector ((s) => s.users)
  useEffect(() => {
    if (!isAuth) {
      navigate ('/')
      Show('You need to Log In to access this page', 'error')
    }
  }, [isAuth])
    return (
        <>
        <Header />
        <main className="bg-secondary flex flex-col md:flex-row px-18 py-14 justify-center items-center md:items-start">
    <div className="w-3/4  md:w-1/4 h-128 bg-white rounded-lg border-transparent border md:mr-4 pb-10">
      <h3 className="font-medium text-gray-700 mx-10 my-10">INFO</h3>
      <div className="profile flex flex-col items-center justify-center">
        <img
          src={Logo}
          alt="profil"
          className="w-40 h-40 object-contain"
        />
        <h3 className="font-medium mt-8 mb-1">Jonas El Rodriguez</h3>
        <p className="">Moviegoers</p>
        <div className="border-b-2 border-horizontal w-full mt-10 mb-5" />
        <a
          href=""
          className="inline-block px-20 md:px-10 lg:px-20 py-2 border border-black rounded-lg bg-primary text-white"
          onClick={() => dispatch(logout())}
        >
          Logout
        </a>
      </div>
    </div>
    <div className="w-3/4 md:w-2/3 bg-secondary rounded-lg border-transparent border flex flex-col gap-y-12">
      <div className="box-border w-full bg-white rounded-lg py-5 hidden lg:flex flex-row gap-x-14">
        <a
          href="profile.html"
          className="text-black ml-10 py-5 border-b-2 border-primary"
        >
          Account Settings
        </a>
        <a
          href="order_history.html"
          className="text-gray-300  py-5 hover:border-b-2 hover:border-primary hover:text-black delay-150"
        >
          Order History
        </a>
      </div>
      <h1 className="font-sans font-bold text-xl mt-8 md:hidden">
        Account Settings
      </h1>
      <div className="box-border w-full bg-white rounded-lg">
        <h3 className="mt-10 ml-8 mb-4 font-normal">Details Information</h3>
        <div className="border-b-2 border-horizontal w-5/6 ml-8" />
        <div className="form-card flex flex-col md:flex-row flex-wrap ml-8 mt-12 mr-8 pb-16">
          <div className="form w-full md:w-1/2">
            <p className="mb-3">Username</p>
            <input
            
              type="text"
              className="border border-gray rounded-lg w-3/4 text-black px-3 py-3 mb-6 "
              placeholder="Jonas"
            />
          </div>
          <div className="form w-full md:w-1/2">
            <p className="mb-3">Full Name</p>
            <input
              type="text"
              className="border border-gray rounded-lg w-3/4 text-black px-3 py-3 mb-6"
              placeholder="El Rodriguez"
              onChange={inputChange}
            />
          </div>
          <div className="form w-full md:w-1/2">
            <p className="mb-3">E-mail</p>
            <input
             onChange={inputChange}
              type="text"
              className="border border-gray rounded-lg w-3/4 text-black px-3 py-3 mb-6"
              placeholder="Jonasrodrigu123@gmail.com"
            />
          </div>
          <div className="form w-full md:w-1/2">
            <p className="mb-3">Phone Number</p>
            <input
             onChange={inputChange}
              type="text"
              className="border border-gray rounded-lg w-3/4 text-black px-3 py-3 mb-6"
              placeholder="+62 81445687121"
            />
          </div>
        </div>
      </div>
      <a
        className="w-1/2 box-border bg-primary rounded-full text-center text-white py-4"
        onClick={updatedata}
      >
        Update Changes
      </a>
      <div className="box-border w-full bg-white pb-16 rounded-lg">
        <h3 className="mt-10 ml-8 mb-10">Account and Privacy</h3>
        <div className="flex flex-col md:flex-row gap-y-6 gap-x-8">
          <div className="w-full  md:w-1/2 ml-8">
            <h3>New Password</h3>
            <input
             onChange={inputChange}
              className="border border-gray rounded-lg w-3/4 px-3 py-3"
              type="password"
              placeholder="Write Your Password"
            />
          </div>
          <div className="w-full md:w-1/2 ml-8 ">
            <h3>Confirm Password</h3>
            <input
             onChange={inputChange}
              className="border border-gray rounded-lg w-3/4 px-3 py-3"
              type="password"
              placeholder="Confirm Your Password"
            />
          </div>
        </div>
      </div>
      <a
        className="w-1/2 box-border bg-primary rounded-full text-center text-white py-4"
        onClick={updatedata}
      >
        Update Changes
      </a>
    </div>
  </main>
  <Footer />
  </>
    )
}

export default Profile