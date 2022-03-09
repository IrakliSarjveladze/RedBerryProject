import classes from "./WelcomePage.module.css";
import rocketMan from "../../img/rocketman.png";
import stars from "../../img/stars.png";
import Button from "../../components/button/button";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1 className={classes.welcome}>Welcome Rocksteers!</h1>
        <Button
          title="Start Questionnaire"
          onClick={() => navigate("/personal-info")}
        />
        <Button title="Submitted Aplications" type="text" />
        <img src={rocketMan} className={classes.imgRocket} />
      </div>
      <img src={stars} className={classes.imgStars} />
    </div>
  );
};

export default WelcomePage;
