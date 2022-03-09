import classes from "./skillCard.module.css";
import Remove from "../../img/Remove.png";

//type : "text", "default", "square"
const SkillCard = ({ onRemove, skill, years }) => {
  return (
    <div className={`${classes.container}`}>
      <p>{skill}</p>
      <p>{`Years of experience: ${years}`}</p>
      <img src={Remove} className={classes.remove} onClick={onRemove} />
    </div>
  );
};

export default SkillCard;
