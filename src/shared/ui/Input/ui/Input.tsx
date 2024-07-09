import React from "react";
import * as stylex from '@stylexjs/stylex';
type FormProps = {
  onChange?: any;
  placeholder?: string;
  value?: any;
  name?: string;
};

const Form: React.FC<FormProps> = ({ onChange, value, placeholder, name }) => {
  return (
    <div >

      <div >
        <input
          name={name}
          value={value}
          onChange={onChange}
          type="text"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Form;
