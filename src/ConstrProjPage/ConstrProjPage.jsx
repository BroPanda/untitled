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

    console.log(`!!!!!!!!!!!!!!!! ${JSON.stringify(response)}`)
    checkAuth(response)

    return (
        <div>
            <h1>Перелік проектів</h1>
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