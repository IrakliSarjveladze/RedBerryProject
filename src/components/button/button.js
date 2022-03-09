import classes from "./button.module.css";
import { useMemo } from "react";
//type : "text", "default", "square"
const Button = ({ type = "default", title, className = "", onClick }) => {
  const buttonClassName = useMemo(() => {
    switch (type) {
      case "text":
        return classes.buttonText;
      case "square":
        return classes.buttonSquare;
      default:
        return classes.buttonRounded;
    }
  }, [type]);

  return (
    <div
      className={`${classes.button} ${buttonClassName} ${className}`}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default Button;
