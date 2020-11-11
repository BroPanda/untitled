import GetTokenByRefresh from "./getTokenByRefresh";

function checkAuth(response){
    if (response.code === "token_not_valid") {
        GetTokenByRefresh()
    }
}

export default checkAuth