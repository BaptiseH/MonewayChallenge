import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import AdressInfo from './components/AdressInfo'
import '../../static/logo192.png'
import {
  Link,
} from "react-router-dom";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: '20px',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  grid: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function ListItemLink(props) {
  let user = props.children.props.user;
  const classes = useStyles();
  return (
    <Link className="link" to={'/user/' + user.id}>
      <Paper key={user.id} className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={require('../../static/logo192.png')} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {user.firstname} {user.lastname}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {user.email}
                </Typography>
                <AdressInfo id={user.adress} />
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{user.solde}€</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Link>
  )
}

class Users extends React.Component {
  state = {
    persons: []
  }
  checked = false;

  componentDidMount() {
    axios.get('/moneway/users/')
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        this.checked = true
      })
  }

  render() {
    return (
      <List className={useStyles.root}>
        {this.state.persons.map(person =>
          <div className="userList" key={person.id}>
            <ListItemLink alignItems="flex-start">
              <ListItemText user={person}></ListItemText>
            </ListItemLink>
          </div>
        )}
      </List>
    )
  }
}

export default Users;