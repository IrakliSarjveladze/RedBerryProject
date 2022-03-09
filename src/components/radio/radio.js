import classes from "../radio/radio.module.css";

const Radio = ({ title, onChange, className, value, options }) => {
  return (
    <div className={classes.radio}>
      <p>{title}</p>
      {options.map(({ value: optValue, label }) => {
        return (
          <div className={classes.radiolane}>
            <input
              type="radio"
              onChange={onChange}
              value={optValue}
              checked={value === optValue}
            />
            <label className={classes.descriptiontitle}>{label}</label>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Radio;
