import React from 'react';
import { useParams } from 'react-router';
import './User.css'
import { makeStyles } from '@material-ui/core/styles';
import '../../static/logo192.png'
import UserInfo from './components/UserInfo.js'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        margin: '5px 0',
      },
    }))

function User() {
    let {id} = useParams();
    let classes = useStyles();
    return (
        <UserInfo classes={classes} id={id}/>
    )
}

export default User;