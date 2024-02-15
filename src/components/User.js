import React, { useState } from 'react';
import defaultProfileImage from '../images/user.png';
import './styles.css'; // Import CSS file for styling

const User = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [position, setPosition] = useState('');
    const [school, setSchool] = useState('');
    const [department, setDepartment] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [profileImage, setProfileImage] = useState(defaultProfileImage);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Here you can handle the form submission logic
        console.log({
            firstName,
            lastName,
            position,
            school,
            department,
            phone,
            email,
            profileImage
        });
    };

    return (
        <div className="parent-container"> {/* Apply a class for styling */}
    <div className="user-profile-box">
    <div><h2>USER PROFILE</h2></div>
        {/* Display fetched names */}
        <label>First Name: Hiya {firstName}</label>
        <br /><br />
        <label>Last Name: Ghosh {lastName}</label>
        <br /><br />
        <label>Position: Technical Secretary (ANOVA) {position}</label>
        <br /><br />
        <label>School: SCIT {school}</label>
        <br /><br />
        <label>Department: CSE {department}</label>
        <br /><br />
        <label>Phone: 8762296029 {phone}</label>
        <br /><br />
        <label>Email: hiyaghosh5603@gmail.com {email}</label>
        <br /><br />

        {/* Confirm button */}
        <button className="confirm-button" type="submit">Confirm</button>
        <br /><br />

        {/* Logout button */}
        <button className="logout-button" type="button" onClick={() => console.log("Logout")}>Logout</button>
    </div>
</div>

           
    );
    
              
}

export default User;
