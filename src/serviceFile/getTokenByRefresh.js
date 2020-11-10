import React from 'react';

function GetTokenByRefresh(statusRedirect = false) {
    console.log(`in GetTokenByRefresh`)
    try {
        fetch('http://127.0.0.1:8000/token/refresh', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('refreshToken')}`
            },
        })
            .then((response) => response.json())
            .then((responseData) => {
                localStorage.setItem("token", responseData.access)
                localStorage.setItem("refreshToken", responseData.refresh)

                console.log(`responseData ${responseData}`);

                // console.log("in GetTokenByRefresh &&&&&&&&&&&&&&")
                // if (statusRedirect) {
                //     // <Redirect to="/constr_project" />
                //     window.location.href = `http://localhost:3000/${statusRedirect}`
                // }
                // if (responseData.code === "token_not_valid") {
                //     console.log(responseData.code + "responseData.code")
                //     window.location.href = `http://localhost:3000/`
                // }

            })
    } catch (e) {
        console.log(e);
    }

}

export default GetTokenByRefresh