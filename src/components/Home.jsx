import React,{useState,useEffect} from "react"

 const Home = () =>{
    const [count,setcount] = useState(() => {
        return Number(localStorage.getItem('count')) || 0;
    })
    const handleClick = () => {
        setcount(count + 1);
    }
    useEffect(() => {
        localStorage.setItem('count',count)
    },[count])
    
    return (
        <>
        {/* functional update */}
            <button onClick={ () => setcount(precount => precount + 1) }>
                function count 
            </button>

        {/* handler function */}
            <button onClick={handleClick}>
                handleClick
            </button>
            <button onClick={() => setcount(0)}>
                Reset
            </button>
            <p>{count}</p>
            <h2>This is the home page </h2>
        </>
    )
 }

 export default Home