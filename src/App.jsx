import React from "react";
import { FormProvider } from "./MultiStepForm/MultiStepFormContext";
import MultiStepForm from "./MultiStepForm/MultiStepForm";
import "./styles.css";
import ProfileList from "./MultiStepForm/ProfileList";

const App = () => {
  return (
    <FormProvider>
      <div className="app__container">
        <h1>Dating Platform Form</h1>
        <MultiStepForm />
        <ProfileList />
      </div>
    </FormProvider>
  );
};

export default App;