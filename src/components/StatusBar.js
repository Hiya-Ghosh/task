import React from 'react';
import './styles.css';

const StatusBar = (props) => {
  const milestones = [
    { status: true }, // Complete
    { status: false }, // Incomplete
    { status: false }, // Incomplete
    { status: true }, // Complete
    { status: false }, // Incomplete
    { status: true }, // Complete
    { status: true }, // Complete
    // Add more milestones as needed
  ];

  return (
    <div>


<div className="container5">
  <div className="status-bar">
    <div className="progress-bar">
      <div className="line"></div>
      <div className="milestones">
        {milestones.map((milestone, index) => (
          <div
            className={`milestone ${milestone.status ? 'complete' : 'incomplete'}`}
            key={index}
            style={{ left: `${(index / (milestones.length - 1)) * 100}%` }}
          ></div>
        ))}
      </div>
    </div>
  </div>
</div>

<div className="container5">
  <div className="status-bar">
    <div className="progress-bar">
      <div className="line"></div>
      <div className="milestones">
        {milestones.map((milestone, index) => (
          <div
            className={`milestone ${milestone.status ? 'complete' : 'incomplete'}`}
            key={index}
            style={{ left: `${(index / (milestones.length - 1)) * 100}%` }}
          ></div>
        ))}
      </div>
    </div>
  </div>
</div>

<div className="container4">
  <div className="status-bar">
    <div className="progress-bar">
      <div className="line"></div>
      <div className="milestones">
        {milestones.map((milestone, index) => (
          <div
            className={`milestone ${milestone.status ? 'complete' : 'incomplete'}`}
            key={index}
            style={{ left: `${(index / (milestones.length - 1)) * 100}%` }}
          ></div>
        ))}
      </div>
    </div>
  </div>
</div>

<div className="container5">
  <div className="status-bar">
    <div className="progress-bar">
      <div className="line"></div>
      <div className="milestones">
        {milestones.map((milestone, index) => (
          <div
            className={`milestone ${milestone.status ? 'complete' : 'incomplete'}`}
            key={index}
            style={{ left: `${(index / (milestones.length - 1)) * 100}%` }}
          ></div>
        ))}
      </div>
    </div>
  </div>
</div>

<div className="container5">
  <div className="status-bar">
    <div className="progress-bar">
      <div className="line"></div>
      <div className="milestones">
        {milestones.map((milestone, index) => (
          <div
            className={`milestone ${milestone.status ? 'complete' : 'incomplete'}`}
            key={index}
            style={{ left: `${(index / (milestones.length - 1)) * 100}%` }}
          ></div>
        ))}
      </div>
    </div>
  </div>
</div>

<div className="container5">
  <div className="status-bar">
    <div className="progress-bar">
      <div className="line"></div>
      <div className="milestones">
        {milestones.map((milestone, index) => (
          <div
            className={`milestone ${milestone.status ? 'complete' : 'incomplete'}`}
            key={index}
            style={{ left: `${(index / (milestones.length - 1)) * 100}%` }}
          ></div>
        ))}
      </div>
    </div>
  </div>
</div>

<div className="container5">
  <div className="status-bar">
    <div className="progress-bar">
      <div className="line"></div>
      <div className="milestones">
        {milestones.map((milestone, index) => (
          <div
            className={`milestone ${milestone.status ? 'complete' : 'incomplete'}`}
            key={index}
            style={{ left: `${(index / (milestones.length - 1)) * 100}%` }}
          ></div>
        ))}
      </div>
    </div>
  </div>
</div>




     

    </div>
   
  );
} 


export default StatusBar;


