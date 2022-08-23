import React, { useEffect, useRef, useState } from 'react';

import './CursorFollower.scss';

const CursorFollower: React.FC = () => {
  const carRef = React.useRef<HTMLDivElement>(null);

  const [mouse, setMouse] = useState({
    X: 0,
    Y: 0,
  });

  const [destination, setDestination] = useState({
    X: 0,
    Y: 0,
  });

  const [distance, setDistance] = useState({
    X: 0,
    Y: 0,
  });

  const mouseHandler = (event: MouseEvent): void => {
    const { clientX, clientY } = event;
    const mouseX = clientX;
    const mouseY = clientY;

    if (carRef.current) {
      setMouse({
        X: mouseX - carRef.current.clientWidth / 2,
        Y: mouseY - carRef.current.clientHeight / 2,
      });
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', (event) => mouseHandler(event));

    return () => {
      document.removeEventListener('mousemove', mouseHandler);
    };
  }, []);

  useEffect(() => {
    if (!destination.X || !destination.Y) {
      setDestination({
        X: mouse.X,
        Y: mouse.Y,
      });
    } else {
      setDistance({
        X: (mouse.X - destination.X) * 0.1,
        Y: (mouse.Y - destination.Y) * 0.1,
      });
      if (
        Math.abs(distance.X) + Math.abs(distance.Y) < 0.1
      ) {
        setDestination({
          X: mouse.X,
          Y: mouse.Y,
        });
      } else {
        setDestination({
          X: distance.X + destination.X,
          Y: distance.Y + destination.Y,
        });
      }
    }
    carRef.current!.style.left = `${destination.X}px`;
    carRef.current!.style.top = `${destination.Y}px`;
  }, [mouse]);

  return (
    <div
      className="tire"
      ref={carRef}
    />
  );
};

export default CursorFollower;
