import React from 'react';
import './form-input.scss';

//get props from parent component 'Sign-in'
//destructor props needed for readability
function FormInput({ handleChange, label, ...otherProps }) {
  //conditionally render label for shrinking label text
  //if text in field? place shrink class else null
  //keep className form-input no mattter what

  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default FormInput;
