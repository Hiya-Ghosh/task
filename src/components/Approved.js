import React, {useEffect, useState} from "react";
import "./styles.css";
import profileImage from "../images/user.png";
import tick from "../images/approve.png";
import fwd from "../images/fwd.png";
import remark from "../images/remark.svg";
import meet from "../images/meet.svg";
import mag from "../images/mag-glass.png";

const Approved = (props) => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const storedUserData = JSON.parse(sessionStorage.getItem('userData'));
    const url = 'http://localhost:3001/student/notesheets';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ studentId: storedUserData.userId })
    })
        .then(response => response.json())
        .then(response => {
          const newCardsData = response?.notesheets.map(note => ({
            id: note?.nid,
            heading: note?.subject,
            date: note?.eventDate,
            permission: note?.status,
            assign: note.teachers?.map(teacher => teacher.name).join(', '),
            details: note?.details,
          }));
          console.log(cardsData);
          setCardsData(newCardsData)
        })
        .catch(error => console.error('Error:', error));
  }, []);

  const handleTickClick = (id) => {
    // Toggle the selection
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <a className="header" href="/Main">
              All
            </a>
          </li>
          <li>
            <a className="header" href="/Pending">
              Pending
            </a>
          </li>
          <li>
            <a className="header" href="/Approved">
              Approved
            </a>
          </li>
          
          <li>
          <a className="header" href="/Status">Status</a>
          
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

      <div className="add">
        <div className="move">
          <a href="/Create">
            <button
              style={{
                fontSize: "50px",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: "#ff8800e5",
                color: "white",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              +
            </button>
          </a>
        </div>
      </div>

      <div className="card-list">
        {cardsData
          .filter((card) => card.permission === "Approved")
          .map((card) => (
            <div className="card" key={card.id}>
              <h2>{card.heading}</h2>
              <p className="card-date">
                <span>{card.date}</span>
                <span
                className="note_status"
                style={{
                  backgroundColor:
                    card.permission === "Approved" ? "green" : "red",
                  color: "white",
                  padding: "3px",
                  borderRadius: "25px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                  {card.permission}
                </span>
              </p>
              <p>{card.details}</p>
              <p className="assign">{card.assign}</p>
              <div className="small-squares">
                <button
                  className={`tick select_box ${
                    selectedIds.includes(card.id) ? "clicked" : ""
                  }`}
                  onClick={() => handleTickClick(card.id)}
                >
                  <div className="tick_container">
                    <img className="tick_img" src={tick} alt="tick" />
                    <div className="container_text">Approve</div>
                  </div>
                </button>
                <button
                  className={`tick select_box ${
                    selectedIds.includes(card.id) ? "clicked" : ""
                  }`}
                  onClick={() => handleTickClick(card.id)}
                >
                  <div className="tick_container">
                    <img className="tick_img" src={remark} alt="reamrk" />
                    <div className="container_text">Remark</div>
                  </div>
                </button>
                <button
                  className={`tick select_box ${
                    selectedIds.includes(card.id) ? "clicked" : ""
                  }`}
                  onClick={() => handleTickClick(card.id)}
                >
                  <div className="tick_container">
                    <img className="tick_img" src={meet} alt="meet" />
                    <div className="container_text">Meet</div>
                  </div>
                </button>
                <button
                  className={`tick select_box ${
                    selectedIds.includes(card.id) ? "clicked" : ""
                  }`}
                  onClick={() => handleTickClick(card.id)}
                >
                  <div className="tick_container">
                    <img className="tick_img" src={fwd} alt="fwd" />
                    <div className="container_text">Progress</div>
                  </div>
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Approved;
