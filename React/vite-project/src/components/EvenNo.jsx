function EvenNo(){
    const Number=[1,2,3,4,5]
    const even=Number.filter(num=>num%2===0)

    return(
        <>
        <h1>Even Number</h1>
        {even.map((num,index)=>(
        
           <p key={index}>{num}</p>
        ))}
        </>
    )
}
export default EvenNo