import React, {useEffect, useState} from 'react';
import defaultProfileImage from '../images/user.png';
import profileImage from "../images/user.png";
import BG_main from "../images/BG_main.png"; // Import background image
import './styles.css'; // Import CSS file for styling

const User = (props) => {
    const [editMode, setEditMode] = useState(false); // State variable to track edit mode
    const [userData, setUserData] = useState({
        name: '',
        position: '',
        school: '',
        department: '',
        phone: '',
        email: '',
        profileImage: defaultProfileImage
    });

    useEffect(() => {
        const storedUserData = JSON.parse(sessionStorage.getItem('userData'));
        const url = storedUserData && storedUserData.type === 'student' ? 'http://localhost:3000/student/details' : 'http://localhost:3000/teacher/details';
        console.log(url);
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: storedUserData && storedUserData.type === 'student' ? JSON.stringify({ studentId: storedUserData.userId }) : JSON.stringify({ teacherId: storedUserData.userId })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                const userType = storedUserData && storedUserData.type === 'student' ? 'student' : 'teacher';
                const userDetails = data[userType];
                setUserData({
                    name: userDetails.name,
                    position: userDetails.position,
                    school: userDetails.school,
                    department: userDetails.department,
                    phone: userDetails.phone,
                    email: userDetails.email,
                    profileImage: defaultProfileImage
                })
                console.log(userData)
            })
            .catch(error => console.error('Error:', error));
    }, []);


    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Here you can handle the form submission logic and send data to the backend
        console.log("Submitting data to backend:", userData);
        // Reset edit mode after submission
        setEditMode(false);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    return (
        <div className="user-container" style={{backgroundImage: `url(${BG_main})`, backgroundSize: 'cover'}}>            
        <div className="parent-container">
            <div className="user-profile-box">
                <div><h2>USER PROFILE</h2></div>
                {editMode ? (
                    <center>
                    <form onSubmit={handleFormSubmit}>
                        {/* Input fields for editing data */}
                        <img className="user_img" src={profileImage} alt="profileImage" />
                        <label className="input-label">Name: <input type="text" name="firstName" value={userData.name} onChange={handleInputChange} className="edit-input" /></label>
                        <br /><br />
                        <label className="input-label">Position: <input type="text" name="position" value={userData.position} onChange={handleInputChange} className="edit-input" /></label>
                        <br /><br />
                        <label className="input-label">School: <input type="text" name="school" value={userData.school} onChange={handleInputChange} className="edit-input" /></label>
                        <br /><br />
                        <label className="input-label">Department: <input type="text" name="department" value={userData.department} onChange={handleInputChange} className="edit-input" /></label>
                        <br /><br />
                        <label className="input-label">Phone: <input type="text" name="phone" value={userData.phone} onChange={handleInputChange} className="edit-input" /></label>
                        <br /><br />
                        <label className="input-label">Email: <input type="text" name="email" value={userData.email} onChange={handleInputChange} className="edit-input" /></label>
                        <br /><br />
                        {/* Submit button with inline styling */}
                        <button class="submit-button" type="submit"  style={{marginLeft: '1px',marginTop: '-20px',borderRadius: '5px'}}>Submit</button>
                    </form>
                    </center>
                ) : (
                    <>
                        {/* Display fetched names */}
                        <img className="user_img" src={profileImage} alt="profileImage" />
                        <label className="input-label">Name: {userData.name}</label>
                        <br /><br />
                        <label className="input-label">Position: {userData.position}</label>
                        <br /><br />
                        <label className="input-label">School: {userData.school}</label>
                        <br /><br />
                        <label className="input-label">Department: {userData.department}</label>
                        <br /><br />
                        <label className="input-label">Phone: {userData.phone}</label>
                        <br /><br />
                        <label className="input-label">Email: {userData.email}</label>
                        <br /><br />
                        {/* Edit button with inline styling */}
                        <button className="edit-button" style={{borderRadius: '5px'}} onClick={() => setEditMode(true)}>Edit</button>
                    </>
                )}
                {/* Logout button */}
                <button className="logout-button" style={{borderRadius: '5px'}} type="button" onClick={() => console.log("Logout")}>Logout</button>
            </div>
        </div>
        </div>
    );
}

export default User;



// <div className="user-container" style={{backgroundImage: `url(${BG_main})`, backgroundSize: 'cover'}}>
//             <div className="orange_overlay">
//             <div className="parent-container">
//                 <div className="user-profile-box">
//                     <div><h2>USER PROFILE</h2></div>
//                     {editMode ? (
//                         <form onSubmit={handleFormSubmit}>
//                             <img className="user_img" src={profileImage} alt="profileImage" />
//                             <label>Name: {userData.name}</label>
//                             <br /><br />
//                             <label className="input-label">Position: <input type="text" name="position" value={userData.position} onChange={handleInputChange} /></label>
//                             <br /><br />
//                             <label className="input-label">School: <input type="text" name="school" value={userData.school} onChange={handleInputChange} /></label>
//                             <br /><br />
//                             <label className="input-label">Department: <input type="text" name="department" value={userData.department} onChange={handleInputChange} /></label>
//                             <br /><br />
//                             <label className="input-label">Phone: <input type="text" name="phone" value={userData.phone} onChange={handleInputChange} /></label>
//                             <br /><br />
//                             <label className="input-label">Email: <input type="text" name="email" value={userData.email} onChange={handleInputChange} /></label>
//                             <br /><br />
//                             <button class="submit-button" type="submit"  style={{marginLeft: '43%',marginTop: '-20px',borderRadius: '18px'}}>Submit</button>
//                         </form>
//                     ) : (
//                         <> 
//                             <img className="user_img" src={profileImage} alt="profileImage" />
//                             <label>Name: {userData.name}</label>
//                             <br /><br />
//                             <label>Position: {userData.position}</label>
//                             <br /><br />
//                             <label>School: {userData.school}</label>
//                             <br /><br />
//                             <label>Department: {userData.department}</label>
//                             <br /><br />
//                             <label>Phone: {userData.phone}</label>
//                             <br /><br />
//                             <label>Email: {userData.email}</label>
//                             <br /><br />
                            
//                             <button className="edit-button" style={{borderRadius: '18px'}} onClick={() => setEditMode(true)}>Edit</button>
//                         </>
//                     )}
//                     <button className="logout-button" style={{borderRadius: '18px'}} type="button" onClick={() => console.log("Logout")}>Logout</button>
//                 </div>
//             </div>
//             </div>
//         </div>