import GetTokenByRefresh from "./getTokenByRefresh";

function checkAuth(response){
    if (response.code === undefined) {
        console.log(`response.code ${response.code}`)
        window.location.href = `http://localhost:3000/`
    }

    if (response.code === "token_not_valid") {
        console.log(`response.code ${response.code}`)
        GetTokenByRefresh()
    }
}

export default checkAuth