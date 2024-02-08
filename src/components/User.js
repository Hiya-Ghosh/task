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
        <div className="user-profile-box"> {/* Apply a class for styling */}
            <form onSubmit={handleFormSubmit}>
                {/* Circular image input */}
                <div style={{ position: 'relative', display: 'inline-block' }}>
                    <img src={profileImage} alt="Profile" className="circular-image" />
                    <input
                        type="file"
                        accept="image/*"
                        style={{
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            width: '100%',
                            height: '100%',
                            opacity: '0',
                            cursor: 'pointer'
                        }}
                        onChange={(e) => setProfileImage(URL.createObjectURL(e.target.files[0]))}
                    />
                </div>
                <br /><br />

                {/* First Name */}
                <label htmlFor="first-name">First Name:</label>
                <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
                <br /><br />

                {/* Last Name */}
                <label htmlFor="last-name">Last Name:</label>
                <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
                <br /><br />

                {/* Position */}
                <label htmlFor="position">Position:</label>
                <input
                    type="text"
                    id="position"
                    name="position"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    required
                />
                <br /><br />

                {/* School */}
                <label htmlFor="school">School:</label>
                <input
                    type="text"
                    id="school"
                    name="school"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    required
                />
                <br /><br />

                {/* Department */}
                <label htmlFor="department">Department:</label>
                <input
                    type="text"
                    id="department"
                    name="department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                />
                <br /><br />

                {/* Phone */}
                <label htmlFor="phone">Phone:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <br /><br />

                {/* Email */}
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <br /><br />

                {/* Confirm button */}
                <button className="confirm-button" type="submit">Confirm</button> {/* Apply a class for styling */}
                <br /><br />

                {/* Logout button */}
                <button className="logout-button" type="button" onClick={() => console.log("Logout")}>Logout</button> {/* Apply a class for styling */}
            </form>
        </div>
    );
}

export default User;
