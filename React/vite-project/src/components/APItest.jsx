import { useEffect, useState } from "react"

// using fetch
function APItest(){
    const [users,setUsers]=useState([])
    const[loading,setLoading]=useState(true)
    const[error,setError]=useState("")
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            if(!response.ok){
                throw new Error('fetch failed')
            }
            return response.json()
        })
        .then((data)=>{
            setUsers(data)
            setLoading(false)
        })
        .catch((err)=>{
            setError(err.message)
            setLoading(false)
        })

    },[])
       if(loading)return <h2>loading..</h2>
       if(error)return <h2>{error}</h2>
    return(
        <>
        <ul>
            {users.map((user)=>(
                <li key={user.id}> <strong> {user.name}</strong>-{user.email}</li>
            ))}
        </ul>
        </>
    )
}
export default APItest





