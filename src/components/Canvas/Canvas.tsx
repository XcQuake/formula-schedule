import React, { useEffect, useRef, useState } from 'react';

import './Canvas.scss';

const Canvas: React.FC = () => {
  const carRef = React.useRef<HTMLDivElement>(null);
  const positionRef = useState({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
    windowHeight: 0,
    windowWidth: 0,
  });

  const mouseHandler = (event: MouseEvent): void => {
    const { clientX, clientY } = event;
    const mouseX = clientX;
    const mouseY = clientY;
    console.log(mouseX);
    if (carRef) {
      positionRef.current.mouseX = mouseX - carRef!.current!.clientWidth / 2;
      positionRef.current.mouseY = mouseY - carRef!.current!.clientHeight / 2;
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', (event) => mouseHandler(event));

    return () => {
      document.removeEventListener('mousemove', mouseHandler);
    };
  }, []);
  console.log(positionRef.current.mouseX);
  useEffect(() => {
    // positionRef.current.key = requestAnimationFrame(followMouse);
    const {
      destinationX,
      destinationY,
      distanceX,
      distanceY,
      mouseX,
      mouseY,
      windowHeight,
      windowWidth,
    } = positionRef.current;

    if (!destinationX || !destinationY) {
      positionRef.current.destinationX = mouseX;
      positionRef.current.destinationY = mouseY;
    } else {
      positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
      positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
      if (
        Math.abs(distanceX)
        + Math.abs(distanceY)
        < 0.1
      ) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.destinationX += distanceX;
        positionRef.current.destinationY += distanceY;
      }
    }

    carRef.current!.style.top = `${destinationY}px`;
    carRef.current!.style.left = `${destinationX}px`;
  }, [positionRef.current.mouseX, positionRef.current.mouseY]);

  return (
    <div
      className="tire"
      ref={carRef}
    />
  );
};

export default Canvas;
