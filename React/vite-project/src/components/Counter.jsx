// custom hook
import useCounter from "../customHook/useCounter";  
function Counter(){
    const {count,increment}=useCounter()
    return(
        <>
        <h1>{count}</h1>
        <button onClick={increment}>increment</button>
        </>
    )
}
export default Counter 