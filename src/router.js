import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './page/home'
import Movie from './page/view_all'
import MovieD from './page/movie_details'
import Signin from './page/sign_in'
import SignUp from './page/sign_up'
// import Admin from './page/admin'
import Profile from './page/profile'
import ManageMovie from './page/movie_management'
import Update from "./page/update";

function Router () {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/detail/:id' element={<MovieD />} />
            <Route path='/movie' element={<Movie />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/admin' element={<ManageMovie />} />
            <Route path='/profile' element={<Profile />} />
            <Route path="/admin/update/:id" element={<Update/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router