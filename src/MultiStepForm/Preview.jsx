import React from "react";
import { Card } from "antd";
import { useFormContext } from "./MultiStepFormContext";

const Preview = () => {
  const { state } = useFormContext();

  return (
    <Card title="Live Preview" className="preview__card">
      <p><strong>Name:</strong> {state.name}</p>
      <p><strong>Age:</strong> {state.age}</p>
      <p><strong>Profession:</strong> {state.profession}</p>
      <p><strong>City:</strong> {state.city}</p>
      <p><strong>Hobbies:</strong> {state.hobbies.join(", ")}</p>
      <p><strong>Preferences:</strong> {state.preferences}</p>
    </Card>
  );
};

export default Preview;