import React from "react";
import axios from 'axios'
import Header from '../../component/header'
import Table from '../../component/table'
import Addmovie from '../../component/movieform'

function Admin () {
    return (
        <>
        <Header />
        <Addmovie />
        <Table />
        </>
    )
}

export default Admin