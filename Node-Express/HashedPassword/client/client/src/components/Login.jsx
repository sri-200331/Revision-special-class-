import { useState } from "react"
import axios from 'axios'

function Login(){
    const [form,setForm]=useState('')

   const handleChange = (e) => {
      setForm({
            ...form,
            [e.target.name]: e.target.value
       });
    };

    const handleSubmit=async(e)=>{
        e.preventDefault()
        console.log(form)
        try{
            const res=await axios.post('http://localhost:5000/api/login',form)
            alert(res.data.msg)
        }catch(err){
            alert(err)
        }
    }
    return(
        <>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
                <input name="email" value={form.email} onChange={handleChange} placeholder="email"/>
                <input name="password" value={form.password} type="password" onChange={handleChange} placeholder="password"/>
                <button type="submit">Login</button>
        </form>
        </>
    )
}
export default Login