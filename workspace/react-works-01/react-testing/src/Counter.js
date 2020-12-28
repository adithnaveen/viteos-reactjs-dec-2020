import React, {useState} from 'react'


const Counter =() => {
  const [count, setCount] = useState(0); 
    return (
        <div>
            <h3>This is Counter App</h3>
            <h2 id="counter-value">{count}</h2>

            <button id="incr-btn" onClick={()=> {setCount(count + 1)}}>Increment</button>
            <button id="decr-btn" onClick={()=> {setCount(count - 1)}}>Decrement</button>
        </div>
    )
}

export default Counter; 