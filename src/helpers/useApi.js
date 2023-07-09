import { useState, useEffect } from 'react'
import axios from 'axios'

function useApi (urls = '') {
    const token = ''

    const [requests, setRequests] = useState ({
        baseURL: 'http://localhost:8000/' || urls,
        headers: {
            'Content-Type' : 'application/json',
            Authorization : `Bearer ${token}`
        }
    })

    useEffect(()=> {
        setRequests({
            ...requests,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
    }, [])

    return axios.create(requests)
}

export default useApi