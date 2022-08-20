/* eslint-disable max-len */
/* eslint-disable prefer-const */
import React, { useEffect, useRef } from 'react';

import './Canvas.scss';

interface Point {
  x: number;
  y: number;
}

const Canvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const container = containerRef.current;
  const car = carRef.current;

  let positions = {
    current: { x: 0, y: 0 },
    target: { x: 0, y: 0 },
    working: { x: 0, y: 0 },
  };

  let limX = 0;
  let limY = 0;
  let containerX = 0;
  let containerY = 0;
  let inertia = 0.3;
  let firstRun = true;

  function mouseMoveHandler(e: MouseEvent): void {
    positions.target.x = e.clientX - containerX;
    positions.target.y = e.clientY - containerY;

    if (positions.target.x > limX) positions.target.x = limX;
    if (positions.target.y > limY) positions.target.y = limY;
  }

  function inertiaTo(current: number, target: number, amount: number): number {
    if (amount === 1) return target;
    let distToGo = target - current;
    let delta = current + (distToGo + amount);
    if (Math.abs(distToGo) < 0.01) {
      distToGo = 0;
      delta = target;
    }

    return delta;
  }

  function update(): void {
    const { current, target, working } = positions;
    if (firstRun) {
      firstRun = false;
    } else {
      current.x = working.x;
      current.y = working.y;
    }

    working.x = inertiaTo(current.x, target.x, inertia);
    working.y = inertiaTo(current.y, target.y, inertia);

    car!.style.left = `${working.x}px`;
    car!.style.top = `${working.y}px`;

    requestAnimationFrame(update);
  }

  function init(): void {
    console.log('foo');
    containerX = window.scrollX + container!.getBoundingClientRect().left;
    containerY = window.scrollY + container!.getBoundingClientRect().top;

    limX = container!.getBoundingClientRect().width - car!.getBoundingClientRect().width;
    limY = container!.getBoundingClientRect().height - car!.getBoundingClientRect().height;

    positions.current.x = parseFloat(getComputedStyle(car!).left);
    positions.current.y = parseFloat(getComputedStyle(car!).left);

    container?.addEventListener('mousemove', mouseMoveHandler);

    update();
  }

  useEffect(() => {
    if (container && car) init();
  }, [container, car]);

  // useEffect(() => {
  //   document.addEventListener('mousemove', (event) => {
  //     const { clientX, clientY } = event;
  //     const mouseX = clientX;
  //     const mouseY = clientY;

  //     if (carRef) {
  //       positionRef.current.mouseX = mouseX - 5;
  //       positionRef.current.mouseY = mouseY - 5;
  //     }
  //   });

  // return () => {};
  // });

  // useEffect(() => {
  //   const followMouse = (): void => {
  //     positionRef.current.key = requestAnimationFrame(followMouse);
  //     let {
  //       destinationX,
  //       destinationY,
  //       distanceX,
  //       distanceY,
  //     } = positionRef.current;
  //     const {
  //       mouseX,
  //       mouseY,
  //     } = positionRef.current;

  //     if (!destinationX || !destinationY) {
  //       destinationX = mouseX;
  //       destinationY = mouseY;
  //     } else {
  //       distanceX = (mouseX - destinationX) * 0.9;
  //       distanceY = (mouseY - destinationY) * 0.9;

  //       if (
  //         Math.abs(distanceX)
  //         + Math.abs(distanceY)
  //         < 0.1
  //       ) {
  //         destinationX = mouseX;
  //         destinationY = mouseY;
  //       } else {
  //         destinationX += distanceX;
  //         destinationY += distanceY;
  //       }
  //     }
  //     // eslint-disable-next-line max-len
  //     carRef.current!.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
  //   };

  //   followMouse();
  // }, []);

  return (
    <div className="canvas" ref={containerRef}>
      {/* <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} /> */}
      <span
        className="car"
        ref={carRef}
      />
    </div>
  );
};

export default Canvas;
