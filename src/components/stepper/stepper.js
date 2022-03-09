import classes from "./stepper.module.css";
import Previous from "../../img/Previous.png";
import Next from "../../img/Next.png";
//length = 5
const Stepper = ({ length, activeIndex, onClickNext, onClickPrev }) => {
  const stepsArray = new Array(length).fill("");

  return (
    <div className={classes.container}>
      {activeIndex > 0 && (
        <img src={Previous} className={classes.img} onClick={onClickPrev} />
      )}
      {stepsArray.map((_, index) => {
        const isActive = activeIndex === index;
        return (
          <div
            className={`${classes.dot} ${isActive ? classes.active : ""}`}
            key={index}
          />
        );
      })}
      <img src={Next} className={classes.img} onClick={onClickNext} />
    </div>
  );
};

export default Stepper;
