import React, { useContext } from "react";
import { Formik, Field, Form } from "formik";
import { Button, Input, Select } from "antd";
import FormContext from "./MultiStepFormContext";
import options from "../data/options.json";

const Address = () => {
  const { address, setAddress, next, prev } = useContext(FormContext);

  return (
    <Formik
      initialValues={address}
      onSubmit={(values) => { setAddress(values); next(); }}
      validate={(values) => {
        const errors = {};
        if (!values.address1) errors.address1 = "Address is required";
        if (!values.city) errors.city = "City is required";
        return errors;
      }}
    >
      {({ errors }) => (
        <Form className="details__wrapper">
          <div className={`form__item ${errors.address1 && "input__error"}`}>
            <label>Address-1 </label>
            <Field name="address1">{({ field }) => <Input {...field} />}</Field>
            <p className="error__feedback">{errors.address1}</p>
          </div>

          <div className="form__item">
            <label>Address-2</label>
            <Field name="address2">{({ field }) => <Input {...field} />}</Field>
          </div>

          <div className={`form__item ${errors.city && "input__error"}`}>
            <label>City </label>
            <Field name="city">
              {({ field, form }) => (
                <Select
                  style={{ width: "100%" }}
                  value={field.value}
                  onChange={(val) => form.setFieldValue(field.name, val)}
                >
                  {options.cities.map((c) => (
                    <Select.Option key={c} value={c}>
                      {c}
                    </Select.Option>
                  ))}
                </Select>
              )}
            </Field>
            <p className="error__feedback">{errors.city}</p>
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

export default Address;