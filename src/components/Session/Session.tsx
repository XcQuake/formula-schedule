import React from 'react';
import './Session.scss';

type props = {
  title: string;
  date: string;
  time: string;
  type: string;
}

function Session({ title, date, time, type }: props): JSX.Element {
  return (
    <li className={`session session_${type}`}>
      <p className="session__title">{title}</p>
      <p className="session__date">{date}</p>
      <p className="session__time">{time}</p>
    </li>
  );
}

export default Session;
