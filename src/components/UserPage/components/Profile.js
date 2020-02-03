import React from 'react';
import axios from 'axios';
import Adress from './Adress'
import { useParams } from 'react-router';
import './Profile.css'
import {
    Link,
} from "react-router-dom";
import { Button } from '@material-ui/core';


class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            user: '',
            adress: ''
        };
    }

    componentDidMount() {
        axios.get('/moneway/user/' + this.state.id)
            .then(res => {
                const user = res.data;
                const adress = user.adress;
                this.setState({ user })
                this.setState({ adress })
            })
    }

    render() {
        return (
            <div >
                <img className="profile-pic" alt="complex" src={require('../../../static/logo192.png')} />
                <h2>{this.state.user.firstname} {this.state.user.lastname}</h2>
                <h4>{this.state.user.email}</h4>
                <h3>{this.state.user.solde}€</h3>
                <Adress id={this.state.id} />
            </div>
        )
    }
}

function Profile() {
    let { id } = useParams();
    return (
        <div className="container">
            <UserInfo id={id} />
            <Link className="link" to={id + '/edit'}>
                <Button variant="contained" color="primary">
                    EDIT PROFILE
            </Button>
            </Link>
        </div>
    )
}

export default Profile;