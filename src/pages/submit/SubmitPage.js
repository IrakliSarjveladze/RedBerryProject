import classes from "./SubmitPage.module.css";
import Button from "../../components/button/button";
import { useForm } from "../../providers/FormProvider";
import { useNavigate } from "react-router-dom";

const SubmitPage = () => {
    const { submitApplication } = useForm();
    const navigate = useNavigate();
    return (
        <>
            <div className={classes.container}>
                <Button
                    className={classes.Button}
                    title="Submit"
                    onClick={submitApplication}
                />
                <Button
                    type="text"
                    onClick={() => navigate("/")}
                    title="Go back"
                    className={classes.goback}
                />
            </div>
        </>
    );
};

export default SubmitPage;
