import React from "react";
import { Input, InputNumber, Select } from "antd";
import { useFormContext } from "./MultiStepFormContext";
import options from "../data/options.json";

const Details = () => {
  const { state, dispatch } = useFormContext();

  return (
    <div className="form__step">
      <label>Name</label>
      <Input
        value={state.name}
        onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })}
      />

      <label>Age</label>
      <InputNumber
        value={state.age}
        onChange={(val) => dispatch({ type: "SET_AGE", payload: val })}
        style={{ width: "100%" }}
      />

      <label>Profession</label>
      <Select
        value={state.profession}
        onChange={(val) => dispatch({ type: "SET_PROFESSION", payload: val })}
        style={{ width: "100%" }}
      >
        {options.professions.map((p) => (
          <Select.Option key={p} value={p}>
            {p}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default Details;