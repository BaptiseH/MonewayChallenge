import ApiService from '../services/api_service';
import update from 'react-addons-update';


function reducer(state, action) {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case "UPDATE_ADRESS": {
            ApiService.updateAdress(action.adress.id, data => {
                return update(newState, {
                    adress: {
                        [data.id]: data
                    }
                })
            },
                error => { return error })
            break
        }
        case "UPDATE_USER": {
            ApiService.updateUser(action.user.id, data => {
                return update(state, {
                    users: {
                        [data.id]: data
                    }
                })
            },
                error => { return error })
            break
        }
        default:
            return state;
    }
    return newState;
}
export default reducer;