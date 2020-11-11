import React from 'react';

function GetToken(value, statusRedirect = false) {

    fetch('http://127.0.0.1:8000/token', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            username: value.email,
            password: value.password,
            Authorization: 'TheReturnedToken',
        })
    })
        .then((response) => response.json())
        .then((responseData) => {
            localStorage.setItem("token", responseData.access)
            localStorage.setItem("refreshToken", responseData.refresh)
            console.log(responseData);
            if(responseData.detail){
                console.log(`responseData.detail ${responseData.detail}`);
                localStorage.setItem("detail", responseData.detail)

            }
            if (statusRedirect && responseData.access) {
                localStorage.setItem("detail", '')
                // <Redirect to="/constr_project" />
                window.location.href =`http://localhost:3000/${statusRedirect}`
            }
        })
}

export default GetToken