import React, { useState, useRef } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Login() {
    const [data, setData] = useState('')
    const [statusCode, setStatusCode] = useState(null)
    const [message, setMessage] = useState("ss")
    const numInputRef = useRef(null)
    const navigate = useNavigate()

    function handleClick() {

        const numValue = numInputRef.current?.value;

        if (!numValue) {
            console.log('no numver entered')
            return
        }

        axios
            .post('https://men4u.xyz/v2/common/login',
                {
                    mobile: numValue,
                    app_type: "pos"
                },
                {
                    headers: {
                        'Content-Type': 'application/json',

                    },

                })
            .then(response => {
                setMessage('Login Successful !')
                setTimeout(
                    navigate("/home")
                )
                setStatusCode(response.status)



            })
            .catch(error => {
              
                if (error.response) {
                    setMessage(error.response.data?.detail)
                    setStatusCode(error.response.status)
                }
                else{
                    setMessage('network error !!!')
                    setStatusCode(null)
                }
            })

    }
    return (
        <>
            <p>enter your number here</p>
            <input type="number" ref={numInputRef} />
            {/* <p>{numInputRef}</p> */}
            <button type='submit' onClick={handleClick}>Submit</button>
           
           {message && (
            <p>{message} {statusCode && `(Status: ${statusCode})`}</p>
           )}
        </>
    )
}

export default Login