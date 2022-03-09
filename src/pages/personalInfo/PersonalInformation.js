import classes from "./PersonalInformation.module.css";
import Layout from "../../components/layout/layout";
import Stepper from "../../components/stepper/stepper";
import Input from "../../components/input/input";
import { useForm } from "../../providers/FormProvider";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { schema } from "./PersonalInformationSchema"
const descriptionText =
  "You watch “What? Where? When?” Yeah. Our founders used to play it. That’s where they got a question about a famous American author and screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the exact name and he answered Ray Redberry. And at that moment, a name for a yet to be born company was inspired - Redberry 😇";

function PersonalInformation() {
  const { setValues } = useForm();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    setValues(prev => {
      return { ...prev, ...values }
    })
    navigate("/skills");
  };
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: ''
    },
    onSubmit: handleSubmit,
    // validationSchema: schema
  });

  return (
    <Layout
      title="Hey, rocksteer, what are you coordinates"
      descriptionTitle={"Redberry Origins"}
      description={descriptionText}
    >
      <div className={classes.divData}>
        <form onSubmit={formik.handleSubmit}>
          <Input
            name="first_name"
            className={classes.divMail}
            placeholder="first name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.first_name}
            error={formik.touched.first_name && formik.errors.first_name}
          />
          <Input
            name="last_name"
            className={classes.divMail}
            placeholder="Last Name"
            type="text"
            minLength="2"
            onChange={formik.handleChange}
            value={formik.values.last_name}
            error={formik.touched.last_name && formik.errors.last_name}
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className={classes.divMail}
            error={formik.touched.email && formik.errors.email}
          />
          <Input
            name="phone"
            placeholder="+995 5-- - "
            onChange={formik.handleChange}
            value={formik.values.phone}
            className={classes.divMail}
            error={formik.touched.phone && formik.errors.phone}
          />
          <Stepper
            length={5}
            activeIndex={0}
            onClickNext={formik.submitForm}
          />
        </form>
      </div>
    </Layout>
  );
}

export default PersonalInformation;
