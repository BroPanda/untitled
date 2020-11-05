function getToken(value) {
    console.log('use getToken');
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
            console.warn(responseData);
            localStorage.setItem("token", responseData.access)
            localStorage.setItem("refreshToken", responseData.refresh)
        })


    // .then(results => results.json())
    // .then(response => setResponse(response))
}

export default getToken