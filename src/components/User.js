import React, {useEffect, useState} from 'react';
import defaultProfileImage from '../images/user.png';
import profileImage from "../images/user.png";
import BG_main from "../images/back.jpeg"; // Import background image
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
        const url = storedUserData && storedUserData.type === 'student' ? 'http://localhost:3001/student/details' : 'http://localhost:3001/teacher/details';
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

    const [pos, setPos] = useState(userData.position);
    const [Sch, setSch] = useState(userData.school);
    const [dept, setDept] = useState(userData.department);
    const [phone, setPhone] = useState(userData.phone);

    return (
        <div className="user-container" style={{backgroundImage: `url(${BG_main})`, backgroundSize: 'cover'}}>            

                {editMode ? (
                    <center>
                    <section className="main">
                        <div className="profile-card">
                            <div className="image">
                            <img src={ defaultProfileImage} alt="" className="profile-pic" />
                            </div>
                            <div className="data">
                            <h2>{userData.name}</h2>
                            <h3>{userData.email}</h3>
                            <br></br>
                            <h4>Position</h4>
                            <input className="small-input1 rounded-input" type="text" value={pos} onChange={(e) => setPos(e.target.value)} />
                            </div>
                            <div className="row">
                            <div className="info">
                                <h4>School</h4>
                                <input type="number" className='small-input rounded-input' value={Sch} onChange={(e) => setSch(e.target.value)} />
                            </div>
                            <div className="info">
                                <h4>Department</h4>
                                <input type="number" className='small-input rounded-input' value={dept} onChange={(e) => setDept(e.target.value)} />
                            </div>
                            <div className="info">
                                <h4>Phone</h4>
                                <input type="number" className='small-input rounded-input' value={phone} onChange={(e) => setPhone(parseInt(e.target.value))} />
                            </div>
                            </div>
                            <div className="buttons">
                            <a href="#" className="btn" onClick={() => setEditMode(false)}>Submit</a>
                            <a href="#" className="btn">Logout</a>
                            </div>
                        </div>
                        </section>
                    
                    </center>
                ) : (
                    <>
                     <section className="main">
                    <div className="profile-card">
                        <div className="image">
                        <img src={ defaultProfileImage} alt="" className="profile-pic" />
                        </div>
                        <div className="data">
                        <h2>{userData.name}</h2>
                        <h3>{userData.email}</h3>
                        <span>{userData.position}</span>
                        </div>
                        <div className="row">
                        <div className="info">
                            <h3>School</h3>
                            <span>{userData.school}</span>
                        </div>
                        <div className="info">
                            <h3>Department</h3>
                            <span> {userData.department}</span>
                        </div>
                        <div className="info">
                            <h3>Phone</h3>
                            <span> {userData.phone}</span>
                        </div>
                        </div>
                        <div className="buttons">
                        <a href="#" className="btn" onClick={() => setEditMode(true)}>Edit</a>
                        <a href="#" className="btn">Logout</a>
                        </div>
                    </div>
                    </section>
                        
                    </>
                )}
                
            </div>
    
    );
}

export default User;