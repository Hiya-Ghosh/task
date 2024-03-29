import React, {useEffect, useState} from "react";
import "./styles.css";
import profileImage from "../images/user.png";
import tick from "../images/approve.png";
import fwd from "../images/fwd.png";
import remark from "../images/remark.svg";
import meet from "../images/meet.svg";
import mag from "../images/mag-glass.png";
import defaultProfileImage from "../images/user.png";

const Main = (props) => {


  // const cardsData = [
  //   {
  //     id: 1,
  //     heading: 'To host Gate session',
  //     date: 'February 4, 2024',
  //     permission: 'Approved',
  //     assign: 'Prof. Amit Garg',
  //     details:
  //       'Gate session has to organised under the department of SCSE for the students and there will be a guest speaeker who recently quslified for GATE 2023 with good score and have sound knowlwdge about the Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  //   },
  //   {
  //     id: 2,
  //     heading: 'Onerios 23',
  //     date: 'February 5, 2024',
  //     permission: 'Approved',
  //     assign: 'Prof. Amit Garg',
  //     details:
  //     'Gate session has to organised under the department of SCSE for the students and there will be a guest speaeker who recently quslified for GATE 2023 with good score and have sound knowlwdge about the Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  //   },
  //   {
  //     id: 3,
  //     heading: 'Cyber security seminar',
  //     date: 'February 4, 2024',
  //     permission: 'Approved',
  //     assign: 'Prof. Amit Garg',
  //     details:  'Gate session has to organised under the department of SCSE for the students and there will be a guest speaeker who recently quslified for GATE 2023 with good score and have sound knowlwdge about the Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  //   },
  //   {
  //     id: 4,
  //     heading: "Tech fest Techideate",
  //     date: "February 5, 2024",
  //     permission: "Pending",
  //     assign: "Prof. Amit Garg",
  //     details:
  //     'Gate session has to organised under the department of SCSE for the students and there will be a guest speaeker who recently quslified for GATE 2023 with good score and have sound knowlwdge about the Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  //   },
  //   {
  //     id: 5,
  //     heading: 'Cultural fest Reevz',
  //     date: 'February 5, 2024',
  //     permission: 'Pending',
  //     assign: 'Prof. Amit Garg',
  //     details:
  //     'Gate session has to organised under the department of SCSE for the students and there will be a guest speaeker who recently quslified for GATE 2023 with good score and have sound knowlwdge about the Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  //   },
  //   {
  //     id: 6,
  //     heading: 'Sports fest Abivrata',
  //     date: 'February 5, 2024',
  //     permission: 'Pending',
  //     assign: 'Prof. Amit Garg',
  //     details:
  //     'Gate session has to organised under the department of SCSE for the students and there will be a guest speaeker who recently quslified for GATE 2023 with good score and have sound knowlwdge about the Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  //   },
  // ];

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

 
  const [sortOption, setSortOption] = useState("none");

  const sortedCards = [...cardsData].sort((a, b) => {
    if (sortOption === "asc") {
      return new Date(a.date) - new Date(b.date);
    } else if (sortOption === "desc") {
      return new Date(b.date) - new Date(a.date);
    } else {
      return 0;
    }
  });

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleTickClick = (id) => {
    setSelectedIds((prevSelectedIds) =>
      prevSelectedIds.includes(id)
        ? prevSelectedIds.filter((selectedId) => selectedId !== id)
        : [...prevSelectedIds, id]
    );
  };

  
  return (
    <div className="full-display">
      <nav className="navbar1">
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
            <a className="header" href="/Status">
              Status
            </a>
          </li>
        </ul>

          <li className="sort-dropdown ">
            <select value={sortOption} onChange={handleSortChange}>
              <option value="none">Sort by Date</option>
              <option value="asc">Oldest to Newest</option>
              <option value="desc">Newest to Oldest</option>
            </select>
          </li>


        <div className="search-box1">
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
        {sortedCards.map((card) => (
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
                  <div className="container_text">Approved</div>
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

export default Main;

