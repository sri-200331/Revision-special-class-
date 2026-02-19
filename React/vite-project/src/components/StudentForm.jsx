import { useState } from "react"

function StudentForm(){
    const[name,setName]=useState('')
    const[age,setAge]=useState('')
    const[grade,setGrade]=useState('')
    function handleSubmit(e){
        e.preventDefault()
        console.log('name:',name)
        console.log('age:',age)
        console.log('grade:',grade)
        alert('form submitted successfull')
    }
    return(
        <>
        <form action="">
            <label htmlFor="">Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <label htmlFor="">Age</label>
            <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} />
            <label htmlFor="">Grade</label>
            <input type="text" value={grade} onChange={(e)=>setGrade(e.target.value)} />
            <button type="submit" onClick={handleSubmit}>submit</button>
        </form>
        </>
    )
}
export default StudentForm