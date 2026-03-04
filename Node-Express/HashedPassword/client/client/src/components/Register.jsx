import { useState } from "react"
import axios from 'axios'


function Register(){
    const[form,setForm]=useState({name:"",email:"",password:""})

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
            const res=await axios.post('http://localhost:5000/api/register',form)
            alert(res.data.msg)
        }catch(err){
                alert(err)
        }
}
    return(
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input name="name" onChange={handleChange} placeholder="name"/>
                <input name="email" onChange={handleChange} placeholder="email"/>
                <input name="password" type="password" onChange={handleChange} placeholder="password"/>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
export default Register