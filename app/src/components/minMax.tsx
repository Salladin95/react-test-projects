import React, { useState } from 'react';
import { MinMaxProps } from './contracts';
import { Button } from './button';

export const MinMax = ({ min = 1, max, current, updateCnt }: MinMaxProps) => {
  const [inputValue, setInputValue] = useState(current);

  const onInput = (e: React.FormEvent<HTMLInputElement>) => setInputValue(+e.currentTarget.value);

  const onKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      parseCurrentStr();
    }
  };

  const applyCurrent = (value: number) => {
    const validValue = Math.max(min, Math.min(max, +value));
    setInputValue(validValue);
    updateCnt(validValue);
  };

  const parseCurrentStr = (): void => {
    applyCurrent(isNaN(inputValue) ? min : inputValue);
  };

  const increment = () => applyCurrent(current + 1);
  const decrement = () => applyCurrent(current - 1);

  return (
    <div className="buttons">
      <Button className="btn btn-danger" innerButton="-" callback={decrement} />
      <input
        placeholder="Enter value"
        type="text"
        value={inputValue}
        onChange={onInput}
        onBlur={parseCurrentStr}
        onKeyPress={onKeyPress}
      />
      <Button className="btn btn-primary" innerButton="+" callback={increment} />
    </div>
  );
};
