import React, { useContext } from "react";
import { Formik, Form } from "formik";
import { Checkbox, Button } from "antd";
import FormContext from "./MultiStepFormContext";
import options from "../data/options.json";

const HobbyForm = () => {
  const { details, setDetails, next, prev } = useContext(FormContext);

  return (
    <Formik
      initialValues={{ hobbies: details.hobbies || [] }}
      onSubmit={(values) => {
        setDetails({ ...details, hobbies: values.hobbies });
        next();
      }}
    >
      {({ values, setFieldValue }) => (
        <Form className="details__wrapper">
          <div className="form__item">
            <label>Choose your hobbies:</label>
            <Checkbox.Group
              options={options.hobbies}
              value={values.hobbies}
              onChange={(checkedValues) =>
                setFieldValue("hobbies", checkedValues)
              }
            />
          </div>

          <div className="form__item button__items d-flex justify-content-between">
            <Button type="default" onClick={prev}>Back</Button>
            <Button type="primary" htmlType="submit">Next</Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default HobbyForm;