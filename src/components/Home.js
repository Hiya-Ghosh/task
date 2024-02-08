import React from 'react'
import styled from "styled-components";
import BG_main from "../images/BG_main.png";
import logo from "../images/MUJ-Logo.png";
import './styles.css';
import { useState } from 'react';

const Home = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    
    return (

    <div className="imageContainer">
        <img class="backgroundImage" src={BG_main} />  
        <div className="centeredDiv">
            <img class="back" src={logo} />  
                <div className="centeredDiv2">

                <div>
                    <div  className='text'>
                        <span> Enter NMS ID</span>
                    </div>
                    <div className="underline-input">
                        <input
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                        />
                    </div>

                    <div  className='text'>
                        <span> Enter your Password</span>
                    </div>
                    <div className="underline-input">
                        <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        />
                    </div>
                </div>
                <div>
                    <a class="container" id="btn"  href="/Main"><button className='text1'>Login</button></a>
                </div>
            </div>
            {/* <a class="container" id="btn"  href="/Main"><button>Press me</button></a> */}
        </div>  
    </div>  

    )

    
} 

export default Home;



