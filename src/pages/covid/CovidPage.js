import Layout from "../../components/layout/layout";
import Stepper from "../../components/stepper/stepper";
import classes from "./CovidPage.module.css";
import Radio from "../../components/radio/radio";
import InputCalendar from "../../components/input/inputCalendar";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../providers/FormProvider";

const location = [
  { value: "from_office", label: "From Sairme Office" },
  { value: "from_home", label: "From Home" },
  { value: "hybrid", label: "Hybrid" },
];
const confirmCancel = [
  { value: "0", label: "Yes" },
  { value: "1", label: "No" },
];
const descriptionText =
  "As this infamous pandemic took over the world, we adjusted our working practices so that our employees can be as safe and comfortable as possible. We have a hybrid work environment, so you can either work from home or visit our lovely office on Sairme Street. If it was up to us, we would love you to see us in the office because we think face-to-face communications > Zoom meetings. Both on the fun and productivity scales. ";

function Covid() {
  const navigate = useNavigate();
  const { setValues } = useForm();

  const { values, handleChange, setFieldValue, submitForm } =
    useFormik({
      initialValues: {
        work_preference: "",
        had_covid_at: null,
        vaccinated_at: null,
        had_covid: null,
        vaccinated: null,
      },
      onSubmit: (values) => {
        const covidValues = {
          work_preference: values.work_preference,
          had_covid_at: values.had_covid_at,
          vaccinated_at: values.vaccinated_at,
          had_covid: values.had_covid === "0" ? false : true,
          vaccinated: values.vaccinated === "0" ? false : true

        }
        setValues(prev => {
          return { ...prev, ...covidValues }
        })
        navigate("/insight")
      },
    });

  return (
    <div>
      <Layout
        title="Covid Stuff"
        descriptionTitle={"Redberry Covid Policies"}
        description={descriptionText}
      />
      <div className={classes.radioCovid}>
        <Radio
          name="work_preference"
          title="how would you prefer to work?"
          options={location}
          value={values.work_preference}
          onChange={(e) => setFieldValue("work_preference", e.target.value)}
        />
      </div>
      <div>
        <Radio
          title="Did you contact covid 19? :("
          options={confirmCancel}
          value={values.had_covid}
          onChange={(e) => setFieldValue("had_covid", e.target.value)}
        />
      </div>
      <InputCalendar title="When?" placeholder="Date" name="had_covid_at" onChange={handleChange} />
      <Radio
        title="Have you been vaccinated?"
        options={confirmCancel}
        onChange={(e) => setFieldValue("vaccinated", e.target.value)}
        value={values.vaccinated}
      />

      <InputCalendar
        title="When did you get your last covid vaccine?"
        placeholder="Date"
        name={'vaccinated_at'}
        onChange={handleChange}
      />

      <Stepper
        length={5}
        activeIndex={2}
        onClickNext={submitForm}
        onClickPrev={() => navigate("/skills")}
      />
    </div>
  );
}

export default Covid;
