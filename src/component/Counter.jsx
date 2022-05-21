import React, { useState } from 'react'
import styles from'./counter.module.css'
const Counter = ({int}) => {
    const [count, setCount]=useState(int)
  return (
    <div>
        <h1>Counter App</h1>
        <h2 className={(count%2===0)?styles.green : styles.red }>{count}</h2>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
        <button onClick={()=>setCount(count*2)}>*</button>
    </div>
  );
}

export default Counter