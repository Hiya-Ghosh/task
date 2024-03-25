import React, { useState } from 'react';
import './styles.css';
import ImageUploadForm from './ImageUploadForm';
import BG_main from "../images/BG_main.png"; // Import background image


import profileImage from "../images/user.png";
import mag from "../images/mag-glass.png";

const Create = (props) => {
  const [proposedBy, setProposedBy] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [formData, setFormData] = useState({
    studentId: 1,
    eventDate: '',
    school: '',
    department: "CSE",
    subject: '',
    description: 'xyz',
    details: '',
    objectives: '',
    teachers: [1, 2]
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const proposers = [...selectedOptions, proposedBy];
  
    const requestBody = {
      ...formData,
      proposers: proposers,
    };
  
    try {
      const response = await fetch('http://localhost:3001/student/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log('Response:', responseData);
        // Handle successful response here
  
        // Show the popup
        alert('NoteSheet created');
      } else {
        console.error('Error:', response.statusText);
        // Handle error response here
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle network error here
    }
  };
  

  return (
    <div>
      <nav className="navbar" style={{ marginBottom: '0' }}>
        <ul>
          <li>
            <a className="header" href="/Main">
              All
            </a>
          </li>
          <li>
            <a className="header" href="/Approved">
              Approved
            </a>
          </li>
          <li>
            <a className="header" href="/Pending">
              Pending
            </a>
          </li>
          <li>
            <a className="header" href="/Status">
              Status
            </a>
          </li>
        </ul>
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <button>
            <img className="mag_img" src={mag} alt="mag" />
          </button>
        </div>
        <div className="profile-image">
          <a href="/User">
            <img src={profileImage} alt="Profile" />
          </a>
        </div>
      </nav>

      <div className="user-container" style={{backgroundImage: `url(${BG_main})`, backgroundSize: 'cover', backgroundPosition: 'top', backgroundRepeat: 'repeat', marginTop:'-30px'}}>
        <div className="orange_overlay">
          <div className="outer-box" style={{ backgroundColor: 'white',marginTop:'2.5%' }}>
            <div className="my-component" style={{marginTop:'25px'}}>
              <div className="form-container" >
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label style={{ display: 'inline-block', width: '120px', textAlign: 'right', marginRight: '10px' }}>Select Date:</label>
                    <input
                      className='wide-input'
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      style={{ display: 'inline-block', width: 'calc(100% - 130px)' }}
                    />
                  </div>
                  <div className="form-group">
                    <label style={{ display: 'inline-block', width: '100px', textAlign: 'right', marginRight: '10px' }}>School:</label>
                    <input
                      type="text"
                      name="school"
                      value={formData.school}
                      onChange={handleChange}
                      style={{ display: 'inline-block', width: 'calc(100% - 110px)' }}
                    />
                  </div>
                  <div className="form-group">
                    <label style={{ display: 'inline-block', width: '100px', textAlign: 'right', marginRight: '10px' }}>Subject:</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      style={{ display: 'inline-block', width: 'calc(100% - 110px)' }}
                    />
                  </div>
                  <div className="form-group">
                    <label style={{ display: 'inline-block', width: '100px', textAlign: 'right', marginRight: '10px', verticalAlign: 'top' }}>Details:</label>
                    <textarea
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      style={{ display: 'inline-block', width: 'calc(100% - 110px)', verticalAlign: 'top' }}
                    />
                  </div>
                  <div className="form-group">
                    <label style={{ display: 'inline-block', width: '100px', textAlign: 'right', marginRight: '10px', verticalAlign: 'top' }}>Objective:</label>
                    <textarea
                      name="objectives"
                      value={formData.objectives}
                      onChange={handleChange}
                      style={{ display: 'inline-block', width: 'calc(100% - 110px)', verticalAlign: 'top' }}
                    />
                  </div>
                  <div className="form-group">
                    <label>Proposed By:</label>
                    <input
                      type="text"
                      name="proposedBy"
                      value={proposedBy}
                      onChange={(e) => setProposedBy(e.target.value)}
                    />
                  </div>
                  <div style={{  marginTop: '20px', marginBottom: '20px',paddingBottom:'20px',paddingTop:'20px' }}>
                    <span><b>Select Authorities for approval</b></span>
                    <div>
                      <label style={{  marginTop: '20px' }}>
                        <input
                          type="checkbox"
                          value="Director"
                          checked={selectedOptions.includes('Director')}
                          onChange={handleCheckboxChange}
                        />
                        Director
                      </label>
                      <br />
                      <label>
                        <input
                          type="checkbox"
                          value="HOD"
                          checked={selectedOptions.includes('HOD')}
                          onChange={handleCheckboxChange}
                        />
                        HOD
                      </label>
                      <br />
                      <label>
                        <input
                          type="checkbox"
                          value="Others"
                          checked={selectedOptions.includes('Others')}
                          onChange={handleCheckboxChange}
                        />
                        Others
                      </label>
                    </div>
                  </div>
                  <div className="button-container" ><button type="submit">Submit</button></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
