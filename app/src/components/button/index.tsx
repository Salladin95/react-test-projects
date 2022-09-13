import React from 'react';
import { ButtonProps } from '../contracts';

export const Button = ({ innerButton, className, onClick }: ButtonProps) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {innerButton}
    </button>
  );
};
