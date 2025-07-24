import React, { useState, useRef } from 'react'

function Login() {
    const numInputRef = useRef(null)

    function handleClick() {
        if (numInputRef.current) {
            const inputValue = numInputRef.current.value;
            const numValue = numInputRef.current.value;
            console.log(numValue)
        }

    }
    return (
        <>
            <p>enter your number here</p>
            <input type="number" ref={numInputRef} />
            {/* <p>{numInputRef}</p> */}
            <button type='submit' onClick={handleClick}>Submit</button>
        </>
    )
}

export default Login