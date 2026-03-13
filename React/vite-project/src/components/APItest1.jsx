// using axios

import {useEffect, useState } from "react"
import axios from 'axios'

function APItest1(){
    const[users,setUsers]=useState([])
    const[loading,setLoading]=useState(true)
    const[error,setError]=useState("")
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            setUsers(response.data)
            setLoading(false)

        })
        .catch((err)=>{
            setError('axios failed',err)
            setLoading(false)
        })
    },[])
    if(loading) return <h2>loading..</h2>
    if(error) return <h2>{error}</h2>
    return(
        <>
        <ul>
        {users.map((user)=>(
            <li key={user}><strong>{user.name}</strong>-{user.email}</li>
        ))}
        </ul>
        </>
    )
}
export default APItest1