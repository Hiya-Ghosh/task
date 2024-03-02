import React from 'react'
import styled from "styled-components";
import BG_main from "../images/BG_main.png";
import logo from "../images/MUJ-Logo.png";
import './styles.css';
import { useState } from 'react';


//auth/login
//auth/signup

const Home = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            email: username,
            password: password
        };

        try {
            const response = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
        
            if (response.ok) {
                const responseData = await response.json();
                sessionStorage.setItem('userData', JSON.stringify(responseData));
                const userDataString = sessionStorage.getItem('userData');
                console.log('Session Storage Data:', userDataString);
                console.log('Login successful');
        
                // Redirect the user to a specific URL
                window.location.href = '/Main';
            } else {
                    console.error('Login failed');
                    alert('Invalid credentials. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
        
    };

    return (
        <div className="imageContainer">
            <img className="backgroundImage" src={BG_main} alt="Background" />
            <div className="centeredDiv">
                <img className="back" src={logo} alt="Logo" />
                <div className="centeredDiv2">
                    <form onSubmit={handleSubmit}>


                    <div className="centered-container">
                    <div>
                        <div className='text'>
                        <span> Enter NMS ID</span>
                        </div>
                        <div className="underline-input">
                        <input
                            type="text"
                            value={username}
                            onChange={handleUsernameChange}
                        />
                        </div>

                        <div className='text' style={{ marginTop: '25px' }}>
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
                    </div>




                        <div className='login-home'>
                            <button type="submit" className='text1'>Login</button>
                        </div>
                    </form>
                </div>
                {/* <a className="container" id="btn" href="/Main"><button>Press me</button></a> */}
            </div>
        </div>
    );
} 

export default Home;



