import React from 'react';

// You need to import your shared header...
import Header from "../shared/Header";
import { Link } from 'react-router-dom';
import './styles.css'

const Home = () => {
  return (
    <>
            <Header title="Welcome To Home!"/>
            <p>Click on the under button to know a fun fact about me!</p>
            <p>
                <Link to="/about">
                    <button type="button">
                        About
                    </button>
                </Link>
            </p>
        </>
  );
}
 
export default Home;