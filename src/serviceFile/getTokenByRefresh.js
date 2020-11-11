import React from 'react';

function GetTokenByRefresh(statusRedirect = false) {
    fetch('http://127.0.0.1:8000/token/refresh', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                refresh: localStorage.getItem('refreshToken')
            })
        }
    )
        .then((response) => response.json())
        .then((responseData) => {
            if (responseData.code === undefined) {
                console.log(responseData.code + " responseData.code")
                window.location.href = `http://localhost:3000/`
            }
        })
}

export default GetTokenByRefresh