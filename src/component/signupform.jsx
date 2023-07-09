// import React from 'react'
// import axios from 'axios'
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import useApi from '../helpers/useApi'
// import { Container } from '../helpers/toast'
// import { Show } from '../helpers/toast'

// function SignUpForm () {

//   const [form, setForm] = useState({})

//   const navigate = useNavigate()
//   const api = useApi()

//   const inputChange = (e) => {
//       const data = { ...form }
//       data[e.target.name] = e.target.value
//       setForm(data)
//   }

//   const register = () =>
//     api({
//       method : 'POST',
//       url : '/users',
//       data : form
//     }) .then((res)=>{
//       Show ('Registrasi Berhasil', 'success')
//       setTimeout(()=> {
//         navigate('/signin')
//       },3050)
//       console.log(res)
//     })
//     .catch((err)=>{
//       console.log(err)
//     })

//     // const [post, setPost] = useState({
//     //     username:'',
//     //     fullname:'',
//     //     phone:'',
//     //     email:'',
//     //     password:''
//     // })
//     // const handleInput = (event) => {
//     //     setPost({...post, [event.target.name]: event.target.value})
//     // }

//     // function handleSubmit(event){
//     //     event.preventDefault()
//     //     axios.post('http://localhost:8000/users', post)
//     //     .then(response=>console.log(response))
//     //     .catch(err=>console.log(err))
//     // }
//     return (
//         <form className="relative flex flex-col gap-y-8 w-full h-full px-16 justify-center">
//       <div className="flex flex-col gap-y-4">
//         <h1 className="font-semibold text-5xl">Sign Up</h1>
//         <h2 className="text-xl text-gray-400">Fill your additional details</h2>
//       </div>
//       <div className="flex flex-col gap-y-3">
//         <div className="flex flex-col font-mulish">
//           <label htmlFor="username" className="text-gray-600 py-2">
//             username
//           </label>
//           <input
//             className="rounded-lg h-16 border border-gray-200 px-5"
//             type="text"
//             name="username"
//             placeholder="Write your username"
//             required=""
//             onChange={inputChange}
//           />
//         </div>
//         <div className="flex flex-col font-mulish">
//           <label htmlFor="full_name" className="text-gray-600 py-2">
//             Full Name
//           </label>
//           <input
//             className="rounded-lg h-16 border border-gray-200 px-5"
//             type="text"
//             name="full_name"
//             placeholder="Write your Full name"
//             required=""
//             onChange={inputChange}
//           />
//         </div>
//         <div className="flex flex-col font-mulish">
//           <label htmlFor="phone" className="text-gray-600 py-2">
//             Phone Number
//           </label>
//           <input
//             className="rounded-lg h-16 border border-gray-200 px-5"
//             type="tel"
//             name="phone"
//             placeholder="Write your phone number"
//             required=""
//             onChange={inputChange}
//           />
//         </div>
//         <div className="flex flex-col font-mulish">
//           <label htmlFor="Email" className="text-gray-600 py-2">
//             Email
//           </label>
//           <input
//             className="rounded-lg h-16 border border-gray-200 px-5"
//             type="text"
//             name="email"
//             placeholder="Write your email"
//             required=""
//             onChange={inputChange}
//           />
//         </div>
//         <div className="flex flex-col font-mulish">
//           <label htmlFor="Password" className="text-gray-600 py-2">
//             Password
//           </label>
//           <input
//             className="rounded-lg h-16 border border-gray-200 px-5"
//             type="password"
//             name="password"
//             placeholder="Password"
//             required=""
//             onChange={inputChange}
//           />
//         </div>
//       </div>
//       <button
//         onClick={register}
//         className="bg-primary h-16 rounded-lg text-white font-bold"
//       >
//         Sign Up
//       </button>
//       <div className="flex flex-col gap-y-2 text-center">
//         <p className="text-gray-400">
//           Already have account ?{" "}
//           <a className="text-primary underline" href="signin.html">
//             Sign In
//           </a>
//         </p>
//       </div>
//     </form>
//     )
// }

// export default SignUpForm