import classes from "./inputText.module.css";

const InputText = ({
  type,
  placeholder,
  onChange,
  className,
  value,
  title,
  ...rest
}) => {
  return (
    <div className={classes.textcontainer}>
      <p className={classes.title}>{title}</p>
      <input
        className={classes.textBox}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        {...rest}
      />
    </div>
  );
};
export default InputText;
