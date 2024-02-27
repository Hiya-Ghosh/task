import React, { useState } from "react";
import "./styles.css";
import profileImage from "../images/user.png";
import tick from "../images/approve.png";
import fwd from "../images/fwd.png";
import remark from "../images/remark.svg";
import meet from "../images/meet.svg";
import mag from "../images/mag-glass.png";

const Approved = (props) => {
  const [selectedIds, setSelectedIds] = useState([]);

  const handleTickClick = (id) => {
    // Toggle the selection
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const cardsData = [
    {
      id: 1,
      heading: "Card 1",
      date: "February 4, 2024",
      permission: "Approved",
      assign: "Prof. Amit Garg",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum justo in mi tristique, auctor cursus velit tempus.",
    },
    {
      id: 2,
      heading: "Card 2",
      date: "February 5, 2024",
      permission: "Approved",
      assign: "Prof. Amit Garg",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum justo in mi tristique, auctor cursus velit tempus.",
    },
    {
      id: 3,
      heading: "Card 3",
      date: "February 4, 2024",
      permission: "Approved",
      assign: "Prof. Amit Garg",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum justo in mi tristique, auctor cursus velit tempus.",
    },
    {
      id: 4,
      heading: "Card 4",
      date: "February 5, 2024",
      permission: "Pending",
      assign: "Prof. Amit Garg",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum justo in mi tristique, auctor cursus velit tempus.",
    },
    {
      id: 5,
      heading: "Card 5",
      date: "February 5, 2024",
      permission: "Pending",
      assign: "Prof. Amit Garg",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum justo in mi tristique, auctor cursus velit tempus.",
    },
    {
      id: 6,
      heading: "Card 6",
      date: "February 5, 2024",
      permission: "Pending",
      assign: "Prof. Amit Garg",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum justo in mi tristique, auctor cursus velit tempus.",
    },
  ];

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
            <a className="header" href="/Status"></a>
            <a className="header" href="/StatusBar">
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
