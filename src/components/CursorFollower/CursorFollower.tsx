import React, { useEffect, useRef } from 'react';

import './CursorFollower.scss';

const CursorFollower: React.FC = () => {
  const followerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
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
        positionRef.current.distanceX = (mouseX - destinationX) * 0.08;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.08;

        if (
          Math.abs(positionRef.current.distanceX)
          + Math.abs(positionRef.current.distanceY) < 0.08
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
          followerRef.current!.style.animation = 'tire-stop 2s linear';
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
          followerRef.current!.style.animation = `
            tire-rotation 0.5s linear infinite
          `;
        }
      }

      if (followerRef.current && cursorRef.current) {
        followerRef.current.style.left = `${destinationX}px`;
        followerRef.current.style.top = `${destinationY}px`;
        cursorRef.current.style.left = `${mouseX}px`;
        cursorRef.current.style.top = `${mouseY}px`;
      }
    };

    followMouse();
  }, []);

  return (
    <div className="background">
      <div
        className="cursor-follower"
        ref={followerRef}
      />
      <div
        className="cursor"
        ref={cursorRef}
      >
        <span className="cursor__point" />
        <span className="cursor__point" />
        <span className="cursor__point" />
        <span className="cursor__point" />
      </div>
    </div>
  );
};

export default CursorFollower;
