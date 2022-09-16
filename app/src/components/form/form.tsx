import React, { useRef, useState } from 'react';
import { FormValueOption, InputProps } from 'components/contracts';
import Form from 'react-bootstrap/Form';
import getEmptyUser from './getUser';

export default ({ formType, id, updateUserData }: InputProps) => {
  const inputEl = useRef<HTMLInputElement>(null!);

  const [error, setError] = useState('');

  const option = id as FormValueOption;
  const user = getEmptyUser();
  const currentValue = user[option] ?? '';

  const testValue = (comparator: RegExp, value: string): boolean => comparator.test(value);

  const cleanError = () => setError('');

  const checkValuesByOption: Record<FormValueOption, (value: string) => boolean> = {
    name: (value) => {
      const regexpName = /^[A-Z]{3,20}$/i;
      if (!testValue(regexpName, value)) {
        const nameErr = 'Name hast to be in English and has more thant 2 characters';
        setError(nameErr);
        return false;
      }
      return true;
    },
    email: (value) => {
      const regexpMail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
      if (!testValue(regexpMail, value)) {
        const emailError = 'Email should be like that "some@mail.re"';
        setError(emailError);
        return false;
      }
      return true;
    },
    phone: (value) => {
      const regexpPhone = /^[0-9]{11}$/;
      if (!testValue(regexpPhone, value)) {
        const phoneError = 'Phone should be like "79204669595"';
        setError(phoneError);
        return false;
      }
      return true;
    },
  };

  const updateValue = () => {
    const value = inputEl.current.value;
    const isValid = checkValuesByOption[option](value);

    if (isValid) {
      updateUserData[option](value);
    } else {
      updateUserData[option]('');
    }
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
      <Form.Group className="mb-5 form-input" controlId={id}>
        <Form.Label>{`Enter your ${id}`}</Form.Label>
        <Form.Control
          ref={inputEl}
          defaultValue={currentValue}
          onBlur={updateValue}
          onKeyPress={onKeyPress}
          onChange={cleanError}
          type={formType}
          placeholder={`Enter ${id}`}
        />
        <div className="alert form-alert">{error}</div>
      </Form.Group>
    </Form>
  );
};
