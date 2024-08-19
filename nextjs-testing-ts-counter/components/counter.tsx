'use client';
// counter.tsx

import { useState } from 'react';

import React from 'react';

type CounterProps = {
  initialCount?: number;
};

export default function Counter({ initialCount = 0 }: CounterProps) {
  const [counter, setCounter] = useState<number>(initialCount);

  const handleIncrement = () => {
    setCounter((counter) => counter + 1);
  };

  const handleDecrement = () => {
    setCounter((counter) => counter - 1);
  };

  return (
    <div className="counter__container">
      <div className="counter__display" role="status">
        {counter}
      </div>
      <div className="counter__buttons">
        <button onClick={handleIncrement} className="counter__increment">
          +
        </button>
        <button onClick={handleDecrement} className="counter__decrement">
          -
        </button>
      </div>
    </div>
  );
}
