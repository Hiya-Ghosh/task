import React, { useState } from 'react';
import './styles.css';
import profileImage from "../images/user.png";
import tick from "../images/approve.png"
import fwd from "../images/fwd.png"
import remark from "../images/remark.svg"
import meet from "../images/meet.svg"


const Main = (props) => {

  const [selectedIds, setSelectedIds] = useState([]);

    const handleTickClick = (id) => {
        // Toggle the selection
        if (selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter(selectedId => selectedId !== id));
        } else {
            setSelectedIds([...selectedIds, id]);
        }
    };
  
    const cardsData = [
        {
          id: 1,
          heading: 'Card 1',
          date: 'February 4, 2024',
          permission:'Approved',
          assign:'Prof. Amit Garg',
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum justo in mi tristique, auctor cursus velit tempus.',
        },
        {
          id: 2,
          heading: 'Card 2',
          date: 'February 5, 2024',
          permission:'Approved',
          assign:'Prof. Amit Garg',
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum justo in mi tristique, auctor cursus velit tempus.',
        },
        {
            id: 3,
            heading: 'Card 3',
            date: 'February 4, 2024',
            permission:'Approved',
            assign:'Prof. Amit Garg',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum justo in mi tristique, auctor cursus velit tempus.',
          },
          {
            id: 4,
            heading: 'Card 4',
            date: 'February 5, 2024',
            permission:'Pending',
            assign:'Prof. Amit Garg',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum justo in mi tristique, auctor cursus velit tempus.',
          },
          {
            id: 5,
            heading: 'Card 5',
            date: 'February 5, 2024',
            permission:'Pending',
            assign:'Prof. Amit Garg',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum justo in mi tristique, auctor cursus velit tempus.',
          },
          {
            id: 6,
            heading: 'Card 5',
            date: 'February 5, 2024',
            permission:'Pending',
            assign:'Prof. Amit Garg',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum justo in mi tristique, auctor cursus velit tempus.',
          },
      ];

      return (
        <div className='full-display'>
            <nav className="navbar">
                <ul>
                    <li><a className="header" href="/Main">All</a></li>
                    <li><a className="header" href="/Approved">Approved</a></li>
                    <li><a className="header" href="/Pending">Pending</a></li>
                    <li><a className="header" href="/Status">Status</a></li>
                </ul>
                <div className="search-box">
                    <input type="text" placeholder="Search..." />
                    <button><i className="fa fa-search"></i></button>
                </div>
                <div className="profile-image">
                    <a href='/User'><img src={profileImage} alt="Profile" /></a>
                </div>
            </nav>
    
            <div className='add'><div className='move'>
            <a href='/Create'>
            <button style={{ fontSize: '50px', width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>+</button>
        </a>
            </div></div>
    
            <div className="card-list">
                {cardsData.map((card) => (
                    <div className="card" key={card.id}>
                        <h2>{card.heading}</h2>
                        <p className='card-date'><span>{card.date}</span><span className="red">{card.permission}</span></p>
                        <p>{card.details}</p>
                        <p className='assign'>{card.assign}</p>
                        <div className="small-squares">
                            <button
                                className={`tick select_box ${selectedIds.includes(card.id) ? 'clicked' : ''}`}
                                onClick={() => handleTickClick(card.id)}
                            >
                                <div className='tick_container'>
                                <img className='tick_img' src={tick} alt="tick" />
                                <div>Approve</div>
                                </div>
                            </button>
                            <button
                                className={`tick select_box ${selectedIds.includes(card.id) ? 'clicked' : ''}`}
                                onClick={() => handleTickClick(card.id)}
                            >
                                <div className='tick_container'>
                                <img className='tick_img' src={remark} alt="reamrk" />
                                <div>Remark</div>
                                </div>
                            </button>
                            <button
                                className={`tick select_box ${selectedIds.includes(card.id) ? 'clicked' : ''}`}
                                onClick={() => handleTickClick(card.id)}
                            >
                                <div className='tick_container'>
                                <img className='tick_img' src={meet} alt="meet" />
                                <div>Meet</div>
                                </div>
                            </button>
                            <button
                                className={`tick select_box ${selectedIds.includes(card.id) ? 'clicked' : ''}`}
                                onClick={() => handleTickClick(card.id)}
                            >
                                <div className='tick_container'>
                                <img className='tick_img' src={fwd} alt="fwd" />
                                <div>Progess</div>
                                </div>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )};

export default Main;


