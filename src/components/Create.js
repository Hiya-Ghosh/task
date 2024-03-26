import React, { useState } from 'react';
import './styles.css';
import TextField from '@material-ui/core/TextField'; 
import Autocomplete from '@material-ui/lab/Autocomplete'; 


import ImageUploadForm from './ImageUploadForm';
import BG_main from "../images/BG_main.png"; 

import profileImage from "../images/user.png";
import tick from "../images/approve.png";
import fwd from "../images/fwd.png";
import remark from "../images/remark.svg";
import meet from "../images/meet.svg";
import mag from "../images/mag-glass.png";

const Create = (props) => {
  const [cards, setCards] = useState([]);

  const handleClick = () => {
    // Display popup
    alert("NoteSheet has been created");
    // You can use other methods like window.alert(), window.confirm(), or custom modal libraries for a nicer popup
  };

  const handleAddCard = () => {
    const newCard = (
      <div className="card1" key={cards.length}>
        <div className="arrow-down-container">
          <div className="arrow-down"></div>
        </div>
        <span>Send to faculty 3*</span>
        <div className="form-group">
          <input
            type="text"
            name="proposedBy1"
            value={''} // Assuming formData is managed somewhere else or provide a default value
            // onChange={handleChange} // Assuming handleChange is defined somewhere else
          />
        </div>
      </div>
    );

    setCards([...cards, newCard]);
  };

  const [selectedOptions, setSelectedOptions] = useState([]);
  
  const [facultyDictionary, setFacultyDictionary] = useState({
    0: 'Dr. Rajesh Kumar',
    1: 'Prof. Sunita Sharma',
    2: 'Dr. Rakesh Singh',
    3: 'Prof. Priya Patel',
    4: 'Dr. Mohan Gupta',
    5: 'Prof. Geeta Verma',
    6: 'Dr. Manoj Tiwari',
    7: 'Prof. Neha Singh',
    8: 'Dr. Anil Kumar',
    9: 'Prof. Rashmi Gupta'
  });
  
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

  const [Department] = useState([
    'Computer Applications',
    'Architecture and Design',
    'Arts and Humanities',
    'Engineering',
    'Hotel Management',
  ]);

  const [School] = useState([
    'Computer Science & Engineering',
    'Information Technology',
    'Computer & Communication Engineering',
    'Automobile, Mechanical & Mechatronics Engineering',
    'Civil & Chemical Engineering',
    'Electrical, Electronics & Communication Engineering',
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

  const [selectedOpt, setSelectedOpt] = useState([]);
  
  const [file, setFile] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file); // Assuming 'setFile2' is a state setter function to store the file
  };


  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2 className='h2-create'>CREATE NOTE SHEET</h2>
        <br></br>
        <form onSubmit={handleSubmit}>

            <div className="form-group">
            <label style={{ display: 'inline-block', width: '110px', marginLeft: '10px' }}>Event Date:</label>
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
            <label style={{ display: 'inline-block', width: '110px', marginLeft: '10px' }}>School:</label>
            
              <select name="school" value={formData.school} onChange={handleChange} style={{ display: 'inline-block', width: 'calc(100% - 130px)' }}>
                <option value="">Select School</option>
                {School.map((name, index) => (
                  <option key={index} value={name}>{name}</option>
                ))}
              </select>
          </div>

          <div className="form-group">
            <label style={{ display: 'inline-block', width: '110px', marginLeft: '10px' }}>Department:</label>
            
              <select name="department" value={formData.department} onChange={handleChange} style={{ display: 'inline-block', width: 'calc(100% - 130px)' }}>
                <option value="">Select Department</option>
                {Department.map((name, index) => (
                  <option key={index} value={name}>{name}</option>
                ))}
              </select>
          </div>


          <div className="form-group">
            <label style={{ display: 'inline-block', width: '110px', marginLeft: '10px' }}>Details:</label>
            <input
              className='wide-input'
              type="text"
            name="details"
            value={formData.details}
            onChange={handleChange}
              style={{ display: 'inline-block', width: 'calc(100% - 130px)' }}
            />
          </div>

          <div className="form-group">
            <label style={{ display: 'inline-block', width: '110px', marginLeft: '10px' }}>Subject:</label>
            <input
              className='wide-input'
              type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
              style={{ display: 'inline-block', width: 'calc(100% - 130px)' }}
            />
          </div>
   
          <div className="form-group">
            <label style={{ display: 'inline-block', width: '110px', marginLeft: '10px' }}>Objective:</label>
            <input
              className='wide-input'
              type="text"
            name="objective"
            value={formData.objective}
            onChange={handleChange}
              style={{ display: 'inline-block', width: 'calc(100% - 130px)' }}
            />
          </div>

          <div className="form-group">
            <label style={{ display: 'inline-block', width: '110px', marginLeft: '10px' }}>Proposed By 1:</label>
            
              <select name="proposedBy1" value={formData.proposedBy1} onChange={handleChange} style={{ display: 'inline-block', width: 'calc(100% - 130px)' }}>
                <option value=""></option>
                {facultyNames.map((name, index) => (
                  <option key={index} value={name}>{name}</option>
                ))}
              </select>
          </div>

          <div className="form-group">
            <label style={{ display: 'inline-block', width: '110px', marginLeft: '10px' }}>Proposed By 2:</label>
            
              <select name="proposedBy2" value={formData.proposedBy2} onChange={handleChange} style={{ display: 'inline-block', width: 'calc(100% - 130px)' }}>
                <option value=""></option>
                {facultyNames.map((name, index) => (
                  <option key={index} value={name}>{name}</option>
                ))}
              </select>
          </div>

          <div className="form-group">
            <label style={{ display: 'inline-block', width: '200px', marginLeft: '10px' }}>Add Authorities for Approval</label>
            <Autocomplete 
                multiple  
                options={facultyNames} 
                value={selectedOpt}  
                onChange={(event, newValue) => {
                    setSelectedOpt(newValue); 
                }}
                renderInput={(params) => 
                    <TextField {...params} label="Select Authoritites" variant="outlined" />} 
            />
          </div>

          <div className="form-group">
          <label style={{ display: 'inline-block', width: '110px', marginLeft: '10px' }}>Upload File:</label>
          <input 
            type="file" 
            name="fileInput" 
            onChange={handleFileChange} 
            style={{ display: 'inline-block', width: 'calc(100% - 130px)' }} 
          />
        </div>

        
        <div className="button-container1" ><button type="submit" onClick={handleClick} >Submit</button></div>

        </form>
      </div>
      

      {/* <div className="user-container" style={{backgroundImage: `url(${BG_main})`, backgroundSize: 'cover', backgroundPosition: 'top', backgroundRepeat: 'repeat', marginTop:'-30px'}}>
    <div className="orange_overlay">
    <div className="outer-box" style={{ backgroundColor: 'white',marginTop:'2.5%' }}>
    <div className="my-component" style={{marginTop:'25px'}}>
      <div className="form-container" >
        <form onSubmit={handleSubmit}>



            
          

          <div style={{  marginTop: '20px', marginBottom: '20px',paddingBottom:'20px',paddingTop:'20px' }}>
            <span><b>Select Authorities for approval</b></span>
            <form>
              <label style={{  marginTop: '20px' }}>
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
              <select name="proposedBy1" value={formData.proposedBy1} onChange={handleChange}>
                <option value=""></option>
                {facultyNames.map((name, index) => (
                  <option key={index} value={name}>{name}</option>
                ))}
              </select>
              </div>

              <div className="arrow-down-container">
                <div className="arrow-down"></div>
              </div>

              <span>Send to faculty 2*</span>
              <div className="form-group">
              <select name="proposedBy1" value={formData.proposedBy1} onChange={handleChange}>
                <option value=""></option>
                {facultyNames.map((name, index) => (
                  <option key={index} value={name}>{name}</option>
                ))}
              </select>
              </div>

            </div>

          </div>

         
          <div className="app">
            {cards}
            <div className="button-container" style={{  marginTop: '5px', marginBottom: '15px' }}><button  onClick={handleAddCard}>Add Approvers</button></div>
          </div>
         
          <div className="button-container" ><button type="submit" onClick={handleClick} >Submit</button></div>
      
        </form>
      </div>
      
    </div>
    </div>
    </div>
    </div> */}



        {/* <div style={{ marginLeft: '40%', marginTop: '60px' }}> 
            <Autocomplete 
                multiple  
                options={options} 
                value={selectedOpt}  
                onChange={(event, newValue) => {
                    setSelectedOpt(newValue); 
                }}
                style={{ width: 300 }} 
                renderInput={(params) => 
                    <TextField {...params} label="Combo box" variant="outlined" />} 
            /> 
        </div>  */}
    
    </div>
  );
}

export default Create;