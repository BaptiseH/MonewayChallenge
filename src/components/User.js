import React from 'react';
import axios from 'axios';
import Transaction from './Transaction'
import { useParams } from 'react-router';
import Profile from './Profile';
import '../design/User.css'
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import '../static/logo192.png'
import ListItemText from '@material-ui/core/ListItemText';


  const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        margin: '5px 0',
      },
    }))

class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: props.classes,
            id: props.id,
            user:'',
            transactions:[]};
      }

    componentDidMount() {
        axios.get('/moneway/user/' + this.state.id)
        .then(res => {
          const user = res.data;
          const transactions = user.transactions_id.slice(0, -1).split(',').map(function(item) {
            return parseInt(item, 10);
            });
          this.setState({ user, transactions })
          })
      }

    render() {
        const classes = this.state.classes;
        return (
            <div className="User">
                <div className="header">
                <Profile id={this.state.user.id} />
                </div>
                <List className={classes.root}>
                {this.state.transactions.map(id =>
                <div key={id}>
                <Transaction alignItems="flex-start">
                    <ListItemText id={id}></ListItemText>
                </Transaction>
                </div>
                )}
                </List>
            </div>
        )
    }
}

function User() {
    let {id} = useParams();
    let classes = useStyles();
    return (
        <UserInfo classes={classes} id={id}/>
    )
}

export default User;