import React, { useEffect, useRef } from 'react';

import './CursorFollower.scss';

const CursorFollower: React.FC = () => {
  const followerRef = React.useRef<HTMLDivElement>(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  const mouseHandler = (event: MouseEvent): void => {
    const { clientX, clientY } = event;
    const mouseX = clientX;
    const mouseY = clientY;

    if (followerRef.current) {
      positionRef.current.mouseX = mouseX;
      positionRef.current.mouseY = mouseY;
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', (event) => mouseHandler(event));

    return () => {
      document.removeEventListener('mousemove', mouseHandler);
    };
  }, []);

  useEffect(() => {
    const followMouse = (): void => {
      positionRef.current.key = requestAnimationFrame(followMouse);

      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;

      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;

        if (
          Math.abs(positionRef.current.distanceX)
          + Math.abs(positionRef.current.distanceY) < 0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }

      if (followerRef.current) {
        followerRef.current.style.left = `${destinationX}px`;
        followerRef.current.style.top = `${destinationY}px`;
      }
    };

    followMouse();
  }, []);

  return (
    <div
      className="follower"
      ref={followerRef}
    />
  );
};

export default CursorFollower;
