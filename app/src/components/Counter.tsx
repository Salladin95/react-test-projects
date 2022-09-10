import React, { useState } from 'react';
import { CounterProps } from './contracts';
import { Button } from './button';
import Input from './input';

export const Counter = ({ min = 1, max }: CounterProps) => {
  const [current, setCurrent] = useState(min);

  const applyCurrent = (value: number) => {
    const validValue = Math.max(min, Math.min(max, +value));
    setCurrent(validValue);
  };

  const increment = () => applyCurrent(current + 1);
  const decrement = () => applyCurrent(current - 1);

  const updateCurrent = (e: React.FormEvent<HTMLInputElement>): void => {
    const newValue = parseInt(e.currentTarget.value);
    applyCurrent(isNaN(newValue) ? min : newValue);
  };

  return (
    <div className="buttons">
      <Button className="btn btn-danger" innerButton="-" callback={decrement} />
      <Input value={current} callback={updateCurrent} />
      <Button className="btn btn-primary" innerButton="+" callback={increment} />
    </div>
  );
};
