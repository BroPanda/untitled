import React, {useEffect, useState} from 'react'

const ConstrProjPage = () => {
    const url = 'constr_proj/'
    const [response, setResponse] = useState({})

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/' + url, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(results => results.json())
            .then(data => setResponse(data)
            )
        console.log(response);
    }, [response])

    return (
        <div>
            <p>
                This is construction project page
            </p>
        </div>

    )
}

export default ConstrProjPage