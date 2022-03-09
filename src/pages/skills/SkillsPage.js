import { useState } from "react";
import classes from "./SkillsPage.module.css";
import Layout from "../../components/layout/layout";
import Stepper from "../../components/stepper/stepper";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import Select from "../../components/select/select";
import { useForm } from "../../providers/FormProvider";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { serializeSkills } from "../../utils/helpers";
import SkillCard from "../../components/skillCard/skillCard";
import { schema } from "./SkillsPageSchema";

const descriptionText =
  "As we said, Redberry has been on the field for quite some time now, and we have touched and embraced  a variety of programming languages, technologies,  philosophies, and frameworks. We are battle-tested in PHP Laravel Stack with Vue.js, refined in React,  and allies with Serverside technologies like Docker  and Kubernetes, and now we have set foot in the web3 industry.";

function SkillsPage() {
  const { setValues, skills } = useForm();
  const navigate = useNavigate();
  const skillsOptions = skills ? serializeSkills(skills) : [];
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleAddSkill = (values) => {
    const { currentSkill } = values;
    const newSkill = { ...currentSkill, years: values.experience };
    setSelectedSkills((prev) => [...prev, newSkill]);
  };

  const { values, handleChange, setFieldValue, submitForm, touched, errors } =
    useFormik({
      initialValues: {
        currentSkill: "",
        experience: "",
      },
      onSubmit: handleAddSkill,
      validationSchema: schema,
    });

  const handleSelect = (option) => {
    setFieldValue("currentSkill", option);
  };

  const handleRemove = (value) => {
    setSelectedSkills((previousSkills) => {
      return previousSkills.filter((skill) => skill.value !== value);
    });
  };

  const handleNext = () => {
    const skillsArr = selectedSkills.map(skill => {
      return {
        id: skill.value,
        experience: skill.years
      }
    })
    setValues(prevValues => {
      return {
        ...prevValues, skills: skillsArr
      }
    })
    navigate("/covid");
  };

  return (
    <Layout
      title="Tell us about your skills"
      descriptionTitle={"A bit about our battles"}
      description={descriptionText}
    >
      <div className={classes.container}>
        <div className={classes.select}>
          <Select
            name="currentSkill"
            options={skillsOptions}
            placeholder="skill"
            onChange={handleSelect}
          />
          <Input
            name="experience"
            placeholder="Experience Duration in Years"
            onChange={handleChange}
            value={values.experience}
            error={touched.experience && errors.experience}
          />

          <Button
            type="square"
            title="Add Programming Language"
            onClick={submitForm}
          />
        </div>
        {selectedSkills.map(({ label, value, experience }) => {
          return (
            <div className={classes.skillcard}>
              <SkillCard
                skill={label}
                years={experience}
                onRemove={() => handleRemove(value)}
              />
            </div>
          );
        })}
      </div>
      <div className={classes.Stepper}>
        <Stepper
          length={5}
          activeIndex={1}
          onClickNext={handleNext}
          onClickPrev={() => navigate("/personal-info")}
        />

      </div>
    </Layout>
  );
}

export default SkillsPage;
