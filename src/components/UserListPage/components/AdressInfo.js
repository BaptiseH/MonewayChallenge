import React from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';

export default class AdressInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            adress: {
                number: 0,
                street: '',
                postcode: '',
                city:'',
            }};
      }

        adressService(id) {
            return axios.get('/moneway/adress/' + id)
        }

    componentDidMount() {
        this.adressService(this.state.id)
        .then(res => {
          this.setState({ adress: res.data })
          })
      }

    render() {
        return (
            <div>
                <Typography variant="body2" color="textSecondary">
                  {this.state.adress.number} {this.state.adress.street}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {this.state.adress.postcode} {this.state.adress.city}
                </Typography>
            </div>
        )
    }
}