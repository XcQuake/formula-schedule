import '../styles/components/Schedule.scss';
import React, { useState, useContext, useCallback } from 'react';
import Weekend from './Weekend';

function Schedule(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(999);

  const onClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  // const renderedWeekend: React.ReactNode = currentSeason?.races.map(
  //   (race, index) => {
  //     const isActive = index === activeIndex;
  //     return (
  //       <Weekend
  //         key={race.date}
  //         race={race}
  //         isActive={isActive}
  //         onClick={onClick}
  //         index={index}
  //       />
  //     );
  //   },
  // );

  return (
    <section className="schedule">
      {/* <ul className="schedule__list">{renderedWeekend}</ul> */}
    </section>
  );
}

export default React.memo(Schedule);
