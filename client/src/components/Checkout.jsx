import React from 'react';
import axios from 'axios';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      rooms: [],
    };
  }

  componentDidMount() {
    axios.get('/rooms/1/reservations') // hard coded TODO refactor to be dynamic
      .then(response => (
        response.json()
      ))
      .then((roomData) => {
        this.setState({ rooms: (roomData) });
      });
  }

  render() {
    return (
      <div>You are the best</div>
    );
  }
}

export default Checkout;