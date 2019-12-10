import React, { useState } from 'react'
const App = (props) => {
    const [count, setCount] = useState(1);
    return (
        <div>
            <h1>hi {props.title}</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>点击+1</button>
        </div>
    )
}


export default <App title="哈哈哈" />