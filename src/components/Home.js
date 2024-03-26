import React from 'react'
import styled from "styled-components";
import BG_main from "../images/BG_main.png";
import logo from "../images/MUJ-Logo.png";
import './styles.css';
import { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";



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
        <div className='Login'>
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
            <div><img className="logo" src={logo} alt="Logo" /> </div>
                <h1>LOGIN</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Username' required 
                    value={username}
                    onChange={handleUsernameChange}/>
                    <FaUser className='icon'/>
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Password' required 
                    value={password}
                    onChange={handlePasswordChange}
                    />
                    <FaLock className='icon' />

                </div>

                <div className='remember-forgot'>
                <a href='#' style={{ color: "rgba(255,0,0,.8)" }}>Forgot Password?</a>
                </div>

               
                
                <button type='submit'>Login</button>
            </form>
        </div>
        </div>

      

    );
} 



export default Home;



