import React, { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { FormValueOption, InputProps } from './contracts';
import { observer } from 'mobx-react-lite';
import FormData from 'store/form';
import useStore from '../../hooks/useStore';

export default observer(({ formType, field }: InputProps) => {
  const inputEl = useRef<HTMLInputElement>(null!);

  const [formData] = useStore('formData');
  const { updateField } = formData as FormData;

  const [error, setError] = useState('');
  const errInpClass = 'border border-danger';

  const cleanError = () => setError('');

  const updateValue = () => {
    const valid = field.pattern.test(inputEl.current.value);
    if (!valid) {
      setError(field.errMsg);
    }
    const newValue = valid ? inputEl.current.value.trim() : '';
    updateField(field.name as FormValueOption, newValue);
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
});
