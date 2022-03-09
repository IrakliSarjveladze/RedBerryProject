import Layout from "../../components/layout/layout";
import Radio from "../../components/radio/radio";
import classes from "./InsightPage.module.css";
import Input from "../../components/input/input"
import InputText from "../../components/input/inputText";
import Stepper from "../../components/stepper/stepper";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../providers/FormProvider";

const descriptionText =
  "We were soo much fun before the pandemic started! Parties almost every weekend and lavish employee birthday celebrations! Unfortunately, covid ruined that fun like it did almost everything else in the world. But we try our best to zhuzh it up a bit. For example, we host biweekly Devtalks where our senior and lead developers talk about topics they are passionate about. Previous topics have included Web3, NFT, Laravel 9, Kubernetes, etc. We hold these talks in the office but you can join our Zoom broadcast as well. Feel free to join either as an attendee or a speaker!";

const confirmCancel = [
  { value: "0", label: "Yes" },
  { value: "1", label: "No" },
];
function InsightPage() {
  const navigate = useNavigate();
  const { setValues } = useForm();

  const { values, handleChange, setFieldValue, submitForm } =
    useFormik({
      initialValues: {
        will_organize_devtalk: null,
        devtalk_topic: "",
        something_special: ""
      },
      onSubmit: (values) => {
        const newValues = {
          devtalk_topic: values.devtalk_topic,
          something_special: values.something_special,
          will_organize_devtalk: values.will_organize_devtalk === "0" ? false : true,
        }
        setValues(prev => {
          return { ...prev, ...newValues }
        })
        navigate("/submit")
      },
    });


  return (
    <Layout
      title="What about you?"
      descriptionTitle={"Redberrian Insights"}
      description={descriptionText}
    >
      <div className={classes.radio}>
        <Radio
          title="Would you attend Devtalks and maybe also organize your own?"
          options={confirmCancel}
          value={values.will_organize_devtalk}
          onChange={(e) => setFieldValue("will_organize_devtalk", e.target.value)}
        />
      </div>
      <div className={classes.InputText}>
        <InputText
          title="What would you speak about at Devtalk?"
          placeholder="I would..."
          type="text"
          id="devtalk_topic"
          name="devtalk_topic"
          onChange={handleChange}
        />
        <InputText
          title="Tell us something special"
          placeholder="I would..."
          type="text"
          id="something_special"
          name="something_special"
          onChange={handleChange}
        />
        <Stepper
          length={5}
          activeIndex={4}
          onClickNext={submitForm}
          onClickPrev={() => navigate("/covid")}
        />
      </div>
    </Layout>
  );
}
export default InsightPage;
