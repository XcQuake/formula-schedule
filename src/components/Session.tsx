import React from 'react';
import '../styles/components/Session.scss';

type args = {
  title: string;
  date: string;
  time: string;
  type: string;
}

function Session({ title, date, time, type }: args): JSX.Element {
  const classname = (): string => {
    switch (type) {
      case 'qualifying': return 'session__qualifying';
      case 'practice': return 'session__practice';
      case 'sprint': return 'session__sprint';
      default: return 'session__practice';
    }
  };

  return (
    <li className={classname()}>
      <p className="session__practice-title">{title}</p>
      <p className="session__date">{date}</p>
      <p className="session__time">{time}</p>
    </li>
  );
}

export default Session;
