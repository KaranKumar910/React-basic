import React , {useState,useEffect} from "react";

const Home = () =>{
    const [count, setCount] = useState(() => {
        const saved = localStorage.getItem('count')
        return saved ? parseInt(saved) : 0
    });

    useEffect(() => {
        localStorage.setItem('count',count)
    }, [count])
     
    const counthandler = () => {
            setCount(count + 1);
    }

    const reset = () => {
        setCount(0)
    }
    return(
        <>
            {/* functional Click */}
            <button onClick={() => setCount((pre) => pre + 1)}>
                functional Click
            </button>
            {/* Count handler function */}
            <button onClick={counthandler}>
                handler functional Click
            </button>
            <button onClick={reset}>
                Reset
            </button>
            <p>{count}</p>
            <h2>Hii Karan, This is the home. So here i can create the you exact counter code</h2>
        </>
    )
}
export default Home