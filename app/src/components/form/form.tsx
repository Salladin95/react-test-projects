import React, { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { InputProps } from './contracts';

export default ({ formType, field, updateUserData }: InputProps) => {
  const inputEl = useRef<HTMLInputElement>(null!);

  const [error, setError] = useState('');
  const errInpClass = 'border border-danger';

  const cleanError = () => setError('');

  const updateValue = () => {
    const valid = field.pattern.test(inputEl.current.value);
    if (!valid) {
      setError(field.errMsg);
    }
    const newValue = valid ? inputEl.current.value.trim() : '';
    updateUserData(field.name, newValue, valid);
  };

  const onKeyPress = (e: React.KeyboardEvent) => {
    if (e.key !== 'Enter') {
      return;
    }
    e.preventDefault();
    updateValue();
  };

  return (
    <Form>
      <Form.Group className="mb-5 form-input" controlId={field.name}>
        <Form.Label>{field.label}</Form.Label>
        <Form.Control
          ref={inputEl}
          defaultValue={field.value}
          onBlur={updateValue}
          onKeyPress={onKeyPress}
          onFocus={cleanError}
          type={formType}
          placeholder={`Enter ${field.name}`}
          className={error.length ? errInpClass : ''}
        />
        <div className="alert form-alert">{error}</div>
      </Form.Group>
    </Form>
  );
};
