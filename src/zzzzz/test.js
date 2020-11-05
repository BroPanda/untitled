import React from 'react'
import {useState, useEffect} from 'react'

const MyFetch = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [response, setResponse] = useState('')
    const [isToken, setIsToken] = useState(false)

    function getToken() {
        fetch('http://127.0.0.1:8000/token', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                username: 'koki',
                password: '0085',
                Authorization: 'TheReturnedToken',
            })
        })
            .then(results => results.json())
            .then(response => setResponse(response)
            )
    }

    function getData() {
        fetch('http://127.0.0.1:8000/constr_proj/', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }

        })
            .then(results => results.json())
            .then(response => setResponse(response)
            )
        console.log(response);
    }

    useEffect(() => {
        response && localStorage.setItem('token', response.access)
        setIsToken(true)
    }, [response])

    console.log(response);
    useEffect(() => {

    }, [isToken])
    return (
        <form noValidate>
            <div>
                <label>email</label>
                <input type="email" name="email"/>
                {/*error message here*/}
            </div>

            <div>
                <label>password</label>
                <input type="password" name="password"/>
                {/*error message here*/}
            </div>

            <button type="submit">submit</button>


            {/*<button onClick={getToken}>get Token</button>*/}
            {/*<br/>*/}
            {/*<button onClick={getData}>get Data</button>*/}
            {/*<div>{response.access}</div>*/}
        </form>
    )
}

export default MyFetch