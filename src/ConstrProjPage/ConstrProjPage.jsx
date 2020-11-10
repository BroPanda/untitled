import React, {useEffect, useState} from 'react'
import checkAuth from '../serviceFile/checkAuth'

const ConstrProjPage = () => {
    const url = 'constr_proj/'
    const [response, setResponse] = useState([])

    useEffect(() => {
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
    }, [setResponse])

    checkAuth(response)

    console.log(`response.code ${response.code}`);
    console.log(`response.id ${response}`);
    return (
        <div>
            <p>costructions</p>
            <div>
                {

                    response[0] &&
                    response.map(res => (
                        <div key={res.id}>
                            {res.id}. {res.name} ціна: {res.price}
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default ConstrProjPage