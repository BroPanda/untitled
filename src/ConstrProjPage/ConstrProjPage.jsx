import {useEffect, useState} from "react"

const ConstrProjPage = () => {

    const [response, setResponse] = useState('')
    const [responseGet, setResponseGet] = useState(false)

    function getData() {
        console.log('in fetch!!!');
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
    }

    return (
        <div>
            <p>
                This is construction project page
            </p>
            <button onClick={getData}>get Data</button>
            <div>{response.access}</div>
        </div>

    )
}

export default ConstrProjPage