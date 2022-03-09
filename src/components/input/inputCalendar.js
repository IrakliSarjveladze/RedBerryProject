import classes from "../input/inputCalendar.module.css";
import "react-datepicker/dist/react-datepicker.css";
import Input from "./input"

const InputCalendar = ({ value, placeholder = "Date", title, ...rest }) => {

  return (
    <div className={classes.container}>
      <p className={classes.title}>{title}</p>
      <input type="date" className={classes.input} value={value} placeholder={placeholder} {...rest} />
    </div>
  )
};

export default InputCalendar;
