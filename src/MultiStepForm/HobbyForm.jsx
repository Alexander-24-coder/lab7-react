import React from "react";
import { Checkbox, Radio } from "antd";
import { useFormContext } from "./MultiStepFormContext";
import options from "../data/options.json";

const HobbyForm = () => {
  const { state, dispatch } = useFormContext();

  return (
    <div className="form__step">
      <label>Hobbies</label>
      <Checkbox.Group
        options={options.hobbies}
        value={state.hobbies}
        onChange={(vals) => dispatch({ type: "SET_HOBBIES", payload: vals })}
      />

      <label>Preferences</label>
      <Radio.Group
        value={state.preferences}
        onChange={(e) =>
          dispatch({ type: "SET_PREFERENCES", payload: e.target.value })
        }
      >
        <Radio value="friendship">Friendship</Radio>
        <Radio value="dating">Dating</Radio>
        <Radio value="longterm">Long-term relationship</Radio>
      </Radio.Group>
    </div>
  );
};

export default HobbyForm;