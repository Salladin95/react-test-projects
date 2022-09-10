import React from 'react';

export default ({
  callback,
  value,
}: {
  value: number;
  callback: (e: React.FormEvent<HTMLInputElement>) => void;
}) => {
  return <input placeholder="Enter value" type="text" value={value} onInput={callback} />;
};
