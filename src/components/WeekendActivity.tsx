import React from 'react';

type args = {
  title: string;
  date: string;
  time: string;
  type: string;
}

function WeekendActivity({
  title, date, time, type,
}: args): JSX.Element {
  const activityClassname = type === 'qualifying'
    ? 'weekend__qualifying'
    : 'weekend__practice';

  return (
    <li className={activityClassname}>
      <p className="weekend__practice-title">{title}</p>
      <p className="weekend__date">{date}</p>
      <p className="weekend__time">{time}</p>
    </li>
  );
}

export default WeekendActivity;
