import { createContext, useContext, useEffect, useState } from "react";
import { getSkills, postApplication } from "../services/api";
import { token } from '../utils/axios'
export const FormContext = createContext({
  step: 0,
});

const FormProvider = ({ children }) => {
  const [skills, setSkills] = useState([]);
  const [values, setValues] = useState({});

  const handleGetAppSkills = async () => {
    const skills = await getSkills();
    setSkills(skills);
  };

  const submitApplication = async () => {
    const payload = { ...values, token: token }
    try {
      const res = await postApplication(payload);
      alert("Application has been sent")
    } catch (e) {

    }
  }

  useEffect(() => {
    handleGetAppSkills();
  }, []);

  return (
    <FormContext.Provider
      value={{ skills, setValues, submitApplication }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);

export default FormProvider;
