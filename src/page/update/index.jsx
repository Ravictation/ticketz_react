import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from '../../component/header'
import Footer from '../../component/footer'
import Updateform from '../../component/updateform'
import { useParams } from 'react-router-dom'



function Update() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const params = useParams()

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [update, setUpdate] = useState([])

    const getMovies = async () => {
        try {
            const {data} = await axios.get('http://localhost:8000/movie/'+params.id)
            setUpdate(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        getMovies()
    }, [])
    
  return (
    <>
        <Header />
        {update.map((v)=>{
            return <Updateform id={v.movie_id} name={v.title} date={v.release_date} genre={v.genre_name} casts={v.casts} director={v.director} synopsis={v.synopsis} image={v.movie_banner} duration={v.duration} />
        })}
        <Footer />
    </>
  )
}

export default Update