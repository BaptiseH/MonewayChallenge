import React from 'react';
import {
    Link,
  } from "react-router-dom";
  import { Button } from '@material-ui/core';
  import './Home.css';

const Home = () => (
    <div className="Home">
        <h1>Welcome to the Moneway's challenge !</h1>
        <Link className="link" to={'/users/'}>
            <Button variant="contained" color="primary">
                <span>Let's go !</span>
            </Button>
        </Link>
    </div>
  );
  
  export default Home;