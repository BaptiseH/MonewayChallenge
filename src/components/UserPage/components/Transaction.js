import React from 'react';
import axios from 'axios';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ReplyIcon from '@material-ui/icons/Reply';
import VerticalAlignBottomIcon from '@material-ui/icons/VerticalAlignBottom';
import Icon from '@material-ui/core/SvgIcon';



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        margin: '20px',
        maxWidth: 500,
      },
      imagegreen: {
        width: 64,
        height: 64,
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        color: theme.palette.success.main,
      },
      imagered: {
        width: 64,
        height: 64,
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        color: theme.palette.error.main,
      },
    grid: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },

  }));

function InOut(props) {
    let res = props;
    let classes = useStyles();
    if (res.in === 1)
        return(
            <Icon component={VerticalAlignBottomIcon} fontSize="large" className={classes.imagegreen} />
        )
    else
        return(
            <Icon component={ReplyIcon} fontSize="large" className={classes.imagered} />
        )
  }

  function TransactionInfo(props) {
    let transaction = props.transaction;
    const classes = useStyles();
    return (      
                <Paper key={transaction.id} className={classes.paper}>
                <Grid container spacing={2}>
                <Grid item>
                <InOut in={transaction.in_or_out} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {transaction.account}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Description: {transaction.description}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{transaction.amount}€</Typography>
            </Grid>
          </Grid>
        </Grid>
                </Paper>
   )
  }

export default class Transaction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.children.props.id,
            transaction:{
                id:0,
                in_or_out:0,
                account:'',
                description:'',
                amount:0
            }
      }
    }

    transactionService (id) {
        return axios.get('/moneway/transaction/' + id)
    }

    componentDidMount() {
        this.transactionService(this.state.id)
        .then(res => {        
          const transaction = res.data;
          this.setState({ transaction })
          })
    }

    render() {
        return (
            <TransactionInfo transaction={this.state.transaction} />
        )
    }
}