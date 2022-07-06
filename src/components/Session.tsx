import React from 'react';
import '../styles/components/Session.scss';

type args = {
  title: string;
  date: string;
  time: string;
  type: string;
}

function Session({ title, date, time, type }: args): JSX.Element {
  return (
    <li className={`session session_${type}`}>
      <p className="session__title">{title}</p>
      <p className="session__date">{date}</p>
      <p className="session__time">{time}</p>
    </li>
  );
}

export default Session;
