/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { useField } from 'formik';
import { bool, string } from 'prop-types';

function RadioInput({
  id,
  name,
  label,
  helpText,
  required,
  placeholder,
  isChecked,
  ...rest
}) {
  const inputId = id || name;
  const [field] = useField(name) || [];

  return (
    <div className="mt-2 form-control">
      <input
        className="form-radio"
        type="radio"
        id={inputId}
        name={name}
        checked={isChecked}
        aria-describedby={`${inputId}-feedback ${inputId}-help`}
        {...field}
        {...rest}
      />
      <label htmlFor={inputId} className="pl-2">
        {label}
      </label>

      <div className="text-xs" id={`${inputId}-help`} tabIndex="-1">
        {helpText}
      </div>
    </div>
  );
}

RadioInput.propTypes = {
  id: string,
  name: string.isRequired,
  label: string.isRequired,
  helpText: string,
  placeholder: string,
  required: bool,
  isChecked: bool,
};

RadioInput.defaultProps = {
  id: '',
  helpText: '',
  required: false,
  placeholder: '',
  isChecked: false,
};

export default RadioInput;
