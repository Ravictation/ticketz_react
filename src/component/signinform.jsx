import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function SignInForm () {

    const [post, setPost] = useState({
        username:'',
        password:''
    })
    const handleInput = (event) => {
        setPost({...post, [event.target.name]: event.target.value})
    }

    function handleSubmit(event){
        event.preventDefault()
        axios.post('http://localhost:8000/users', post)
        .then(response=>console.log(response))
        .catch(err=>console.log(err))
    }
    return (
        <form onSubmit={handleSubmit} className="relative flex flex-col gap-y-8 w-full h-full px-16 justify-center">
      <div className="flex flex-col  justify-center mb-8 w-3/4">
        <label htmlFor="Username">Username</label>
        <input
          type="text"
          className="border border-gray rounded-lg w-full text-black px-3 py-3 mb-6 "
          placeholder="Write your Username"
          onChange={handleInput}
        />
        <label htmlFor="Password"> Password</label>
        <input
          type="password"
          className="border border-gray rounded-lg w-full text-black px-3 py-3 mb-6 "
          placeholder="Write your password"
          onChange={handleInput}
        />
      <button
        type="submit"
        className="bg-primary h-16 rounded-lg text-white font-bold"
      >
        Sign Up
      </button>
      </div>
    </form>
    )
}

export default SignInForm