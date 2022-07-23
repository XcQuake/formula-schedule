import React from 'react';
import './Session.scss';

type props = {
  title: string;
  date: string;
  time: string;
  type: string;
}

const Session: React.FC<props> = ({ title, date, time, type }) => (
  <li className={`session session_${type}`}>
    <p className="session__title">{title}</p>
    <p className="session__date">{date}</p>
    <p className="session__time">{time}</p>
  </li>
);

export default Session;
