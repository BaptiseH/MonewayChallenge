import axios from 'axios';

export default class ApiService {

    static apiUrl = '/moneway/';

    static getUsers(callback, callback_error) {
        const source = axios.CancelToken.source()
        axios.get(this.apiUrl + 'users')
        .then((response) =>
            callback(response),
            callback_error);
        return source;
    }

    static getAllAdress(callback, callback_error) {
        const source = axios.CancelToken.source()
        axios.get(this.apiUrl + 'adress')
        .then((response) =>
            callback(response),
            callback_error);
        return source;
    }

    static getUser(id, callback, callback_error) {
        const source = axios.CancelToken.source()
        axios.get(this.apiUrl + 'user/' + id)
        .then((response) =>
            callback(response),
            callback_error);
        return source;
    }

    static getAdress(id, callback, callback_error) {
        const source = axios.CancelToken.source()
        axios.get(this.apiUrl + 'adress/' + id)
        .then((response) =>
            callback(response),
            callback_error);
        return source;
    }

    static getTransaction(id, callback, callback_error) {
        const source = axios.CancelToken.source()
        axios.get(this.apiUrl + 'transaction/' + id)
        .then((response) =>
            callback(response),
            callback_error);
        return source;
    }

    static patchUser(id, user) {
        axios.patch(this.apiUrl + 'user/' + id, user)
    }
    
    static patchAdress(id, adress) {
        axios.get(this.apiUrl + 'adress/' + id, adress)
    }
}
