import React, { useState } from 'react';
import './styles.css';
import ImageUploadForm from './ImageUploadForm';

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
    <div className="my-component">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Select Date:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>School:</label>
            <input
              type="text"
              name="school"
              value={formData.school}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Department:</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Subject:</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Details:</label>
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Objective:</label>
            <textarea
              name="objective"
              value={formData.objective}
              onChange={handleChange}
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

          <div>
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

            <div>
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
            <button onClick={handleAddCard}>Add Approvers</button>
          </div>
          <ImageUploadForm />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
