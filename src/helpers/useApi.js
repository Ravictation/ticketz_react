import { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

function useApi (urls = '') {
    // const token = ''
    const {token} = useSelector((s)=> s.users )
    const [requests, setRequests] = useState ({
        baseURL: 'http://localhost:8000/' || urls,
        headers: {
            'Content-Type' : 'application/json',
            authorization : `Bearer ${token}`
        }
    })

    useEffect(()=> {
        setRequests({
            ...requests,
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`
            }
        })
    }, [])

    return axios.create(requests)
}

export default useApi