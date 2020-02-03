import React from 'react';
import axios from 'axios';


class Transaction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            adress:''
      }
    }

    componentDidMount() {
        axios.get('/moneway/adress/' + this.state.id)
        .then(res => {
          const adress = res.data;
            this.setState({ adress })
          })
    }

    render() {
        return (
            <div>
                <span>{this.state.adress.number} {this.state.adress.street}</span>
                <br/>
                <span>{this.state.adress.postcode} {this.state.adress.city}</span>
            </div>
        )
    }
}

export default Transaction;