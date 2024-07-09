import React from "react";
import * as stylex from '@stylexjs/stylex';
type FormProps = {
  onChange?: any;
  placeholder?: string;
  value?: any;
  name?: string;
};
const styles = stylex.create({
  button: {
    width: {
      default: 200,
      '@media (max-width: 400px)': '100%',
    },
  },
  back:{
    backgroundColor:"green",
    ':hover':{
      transition:"0.3s",
       backgroundColor:"#0b3c6c"
    }
  },

  dynamicStyle: (value) => ({
    opacity: value,
  }),
});
const Form: React.FC<FormProps> = ({ onChange, value, placeholder, name }) => {
  return (
    <div >
      Input
      <div {...stylex.props(styles.back)}>
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
