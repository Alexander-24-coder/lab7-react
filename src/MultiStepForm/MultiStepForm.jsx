import React from "react";
import { Steps, Button } from "antd";
import { useFormContext } from "./MultiStepFormContext";
import Details from "./Details";
import Address from "./Address";
import HobbyForm from "./HobbyForm";
import Review from "./Review";
import Preview from "./Preview";

const { Step } = Steps;

const MultiStepForm = () => {
  const { state, dispatch } = useFormContext();

  const steps = [
    { title: "Details", content: <Details /> },
    { title: "Address", content: <Address /> },
    { title: "Hobbies", content: <HobbyForm /> },
    { title: "Review", content: <Review /> },
  ];

  return (
    <div className="form__container">
      <Steps current={state.step}>
        {steps.map((s, i) => (
          <Step key={i} title={s.title} />
        ))}
      </Steps>

      <div className="form__content">{steps[state.step].content}</div>

      <div className="form__buttons">
        {state.step > 0 && (
          <Button onClick={() => dispatch({ type: "PREV_STEP" })}>Back</Button>
        )}
        {state.step < steps.length - 1 && (
          <Button type="primary" onClick={() => dispatch({ type: "NEXT_STEP" })}>
            Next
          </Button>
        )}
      </div>

      <Preview />
    </div>
  );
};

export default MultiStepForm;