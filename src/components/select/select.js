import RSelect from "react-select";
import classes from "./select.module.css";

const Select = ({ options, ...rest }) => {
  return (
    <RSelect
      options={options}
      className={classes.select}    
      {...rest}
    />
  );
};

export default Select;
