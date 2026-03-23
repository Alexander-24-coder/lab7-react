import React, { useState } from "react";
import { Steps } from "antd";
import FormContext from "./MultiStepFormContext";
import Details from "./Details";
import Address from "./Address";
import Review from "./Review";
import HobbyForm from "./HobbyForm";

const { Step } = Steps;

const detailsInitialState = { name: "", age: "", profession: "" };
const addressInitialState = { address1: "", address2: "", city: "" };

const renderStep = (step) => {
  switch (step) {
    case 0: return <Details />;
    case 1: return <Address />;
    case 2: return <HobbyForm />;
    case 3: return <Review />;
    default: return null;
  }
};

const MultiStepForm = () => {
    const savedData = JSON.parse(localStorage.getItem("formData")) || {};
    const [details, setDetails] = useState(savedData.details || detailsInitialState);
    const [address, setAddress] = useState(savedData.address || addressInitialState);
    const [currentStep, setCurrentStep] = useState(0);

    const next = () => {
        if (currentStep === 3) {
            localStorage.setItem("formData", JSON.stringify({ details, address }));
            setCurrentStep(0);
            setDetails(detailsInitialState);
            setAddress(addressInitialState);
            return;
        }
        setCurrentStep(currentStep + 1);
    };

    const prev = () => setCurrentStep(currentStep - 1);

        return (
            <FormContext.Provider value={{ details, setDetails,  next, prev, address, setAddress, }}>
                <Steps current={currentStep} style={{ marginBottom: "2em"}}>
                   < Step title="Fill in you details" />
                   < Step title="Address details" />
                   < Step title="Hobbies" />
                   < Step title="Review and Save" />
                </Steps>
                <main>{renderStep(currentStep)}</main>
            </FormContext.Provider>
        );
    };


export default MultiStepForm;