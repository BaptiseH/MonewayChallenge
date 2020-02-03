function updateAdress(dispatch, adress) {
    dispatch({
        type: "UPDATE_ADRESS",
        adress: adress
    });
}

function updateUser(dispatch, user) {
    dispatch({
        type: "UPDATE_USER",
        user: user
    });
}

function getUsers(dispatch) {
    dispatch({
        type: "GET_USERS"
    })
}

function getAdress(dispatch) {
    dispatch({
        type: "GET_ADRESS"
    })
}

function getTransactions(dispatch) {
    dispatch({
        type: "GET_TRANSACTIONS"
    })
}

export default {
    getUsers: getUsers,
    getAdress: getAdress,
    getTransactions: getTransactions,
    updateAdress: updateAdress,
    updateUser: updateUser
};