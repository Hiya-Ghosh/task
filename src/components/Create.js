import React, { useState } from 'react';
import './styles.css';
import ImageUploadForm from './ImageUploadForm';
import BG_main from "../images/BG_main.png"; // Import background image


import profileImage from "../images/user.png";
import tick from "../images/approve.png";
import fwd from "../images/fwd.png";
import remark from "../images/remark.svg";
import meet from "../images/meet.svg";
import mag from "../images/mag-glass.png";

const Create = (props) => {
  const [cards, setCards] = useState([]);

  const handleAddCard = () => {
    const newCard = (
      <div className="card1" key={cards.length}>
        <div className="arrow-down-container">
          <div className="arrow-down"></div>
        </div>
        <span>Send to faculty 1*</span>
        <div className="form-group">
          <input
            type="text"
            name="proposedBy1"
            value={''} // Assuming formData is managed somewhere else or provide a default value
            // onChange={handleChange} // Assuming handleChange is defined somewhere else
            placeholder="Enter value"
          />
        </div>
      </div>
    );

    setCards([...cards, newCard]);
  };

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [facultyNames] = useState([
    'Dr. Rajesh Kumar',
    'Prof. Sunita Sharma',
    'Dr. Rakesh Singh',
    'Prof. Priya Patel',
    'Dr. Mohan Gupta',
    'Prof. Geeta Verma',
    'Dr. Manoj Tiwari',
    'Prof. Neha Singh',
    'Dr. Anil Kumar',
    'Prof. Rashmi Gupta'
  ]);

  const handleChange1 = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    }
  };

  const [formData, setFormData] = useState({
    date: '',
    school: '',
    department: '',
    subject: '',
    description: '',
    details: '',
    objective: '',
    proposedBy1: '',
    proposedBy2: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
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

      <div className="user-container" style={{backgroundImage: `url(${BG_main})`, backgroundSize: 'cover', backgroundPosition: 'top', backgroundRepeat: 'no-repeat', marginTop:'-25px'}}>
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
            name="date"
            value={formData.date}
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
    name="objective"
    value={formData.objective}
    onChange={handleChange}
    style={{ display: 'inline-block', width: 'calc(100% - 110px)', verticalAlign: 'top' }}
  />
</div>


          <div className="form-group">
            <label>Proposed By 1:</label>
            <input
              type="text"
              name="proposedBy1"
              value={formData.proposedBy1}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Proposed By 2:</label>
            <input
              type="text"
              name="proposedBy2"
              value={formData.proposedBy2}
              onChange={handleChange}
            />
          </div>

          <div style={{  marginTop: '5px', marginBottom: '15px' }}>
            <span><b>Select Authorities for approval</b></span>
            <form>
              <label>
                <input
                  type="checkbox"
                  value="Director"
                  checked={selectedOptions.includes('Director')}
                  onChange={handleChange1}
                />
                Director
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  value="HOD"
                  checked={selectedOptions.includes('HOD')}
                  onChange={handleChange1}
                />
                HOD
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  value="Others"
                  checked={selectedOptions.includes('Others')}
                  onChange={handleChange1}
                />
                Others
              </label>
            </form>

            {/* For others - dropdown */}
            <div className="form-group">
              <select name="proposedBy1" value={formData.proposedBy1} onChange={handleChange}>
                <option value="">Select Faculty</option>
                {facultyNames.map((name, index) => (
                  <option key={index} value={name}>{name}</option>
                ))}
              </select>
            </div>

            <div  style={{  marginTop: '5px', marginBottom: '15px' }}>
              <span><b>Add Flowchart for Approval</b></span>
            </div>

            <div>

              <span>Send to faculty 1*</span>
              <div className="form-group">
                <input
                  type="text"
                  name="proposedBy1"
                  value={formData.proposedBy1}
                  onChange={handleChange}
                />
              </div>

              <div className="arrow-down-container">
                <div className="arrow-down"></div>
              </div>

              <span>Send to faculty 1*</span>
              <div className="form-group">
                <input
                  type="text"
                  name="proposedBy1"
                  value={formData.proposedBy1}
                  onChange={handleChange}
                />
              </div>

            </div>

          </div>

         
          <div className="app">
            {cards}
            <div className="button-container" style={{  marginTop: '5px', marginBottom: '15px' }}><button  onClick={handleAddCard}>Add Approvers</button></div>
          </div>
          <ImageUploadForm />
          <div className="button-container"><button type="submit">Submit</button></div>
      
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
