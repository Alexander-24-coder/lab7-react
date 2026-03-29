import React from "react";
import { Button } from "antd";
import { useFormContext } from "./MultiStepFormContext";

const Review = () => {
  const { state, dispatch } = useFormContext();

  const handleSubmit = () => {
    const savedProfiles = JSON.parse(localStorage.getItem("datingProfiles")) || [];
    savedProfiles.push(state);
    localStorage.setItem("datingProfiles", JSON.stringify(savedProfiles));

    alert("Profile submitted and saved!");
    dispatch({ type: "RESET_FORM" });
  };

  return (
    <div className="form__step">
      <h3>Review your profile</h3>
      <p>Name: {state.name}</p>
      <p>Age: {state.age}</p>
      <p>Profession: {state.profession}</p>
      <p>City: {state.city}</p>
      <p>Hobbies: {state.hobbies.join(", ")}</p>
      <p>Preferences: {state.preferences}</p>

      <Button type="primary" onClick={handleSubmit}>
        Confirm & Save
      </Button>
    </div>
  );
};

export default Review;