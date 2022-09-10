import React from 'react';
import { ButtonProps } from './contracts';

export const Button = ({ innerButton, className, callback }: ButtonProps) => {
  return (
    <button type="button" className={className} onClick={callback}>
      {innerButton}
    </button>
  );
};
