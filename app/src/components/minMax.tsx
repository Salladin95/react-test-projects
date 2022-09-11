import React, { useRef, useEffect } from 'react';
import { MinMaxProps } from './contracts';
import { Button } from './button';

export const MinMax = ({ min = 1, max, current, updateCnt }: MinMaxProps) => {
  const inp = useRef<HTMLInputElement>(null!);

  const onKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      parseCurrentStr();
    }
  };

  const applyCurrent = (value: number) => {
    const validValue = Math.max(min, Math.min(max, value));
    inp.current.value = validValue.toString();
    updateCnt(validValue);
  };

  const parseCurrentStr = (): void => {
    const value = parseInt(inp.current.value);
    applyCurrent(isNaN(value) ? min : value);
  };

  const increment = () => applyCurrent(current + 1);
  const decrement = () => applyCurrent(current - 1);

  useEffect(() => {
    inp.current.value = current.toString();
  }, [current]);

  return (
    <div className="buttons">
      <Button className="btn btn-danger" innerButton="-" onClick={decrement} />
      <input
        placeholder="Enter value"
        type="text"
        ref={inp}
        defaultValue={current}
        onBlur={parseCurrentStr}
        onKeyPress={onKeyPress}
      />
      <Button className="btn btn-primary" innerButton="+" onClick={increment} />
    </div>
  );
};
