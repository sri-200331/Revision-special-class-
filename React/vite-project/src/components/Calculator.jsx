// when you click 5 go to 1 , click 1 then  go to 2 , click2 then go to  3.... upto click 9 then go to 5
import { useState } from "react"

function Calculator(){
    const[value,setValue]=useState([])
  const sequence = [5, 1, 2, 3, 4, 6, 7, 8, 9];

  const handleClick = (num) => {
    const index = sequence.indexOf(num);
    const nextIndex = (index + 1) % sequence.length;
    setValue(sequence[nextIndex]);
  };


    return(
        <>
        {[1,2,3,4,5,6,7,8,9].map((num)=>(
            <button key={num} onClick={()=>handleClick(num)}>
                {num}
            </button>
        ))}
        <p>{value}</p>
        </>
    )
}
export default Calculator