import classes from "../input/input.module.css";

const Input = ({ type, placeholder, onChange, className, value, error, ...rest }) => {
  return (
    <div className={classes.skillcontainer}>
      <input
        className={classes.skillBox}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        {...rest}
      />
      <p className={classes.error}>{error}</p>
    </div>
  );
};

export default Input;
