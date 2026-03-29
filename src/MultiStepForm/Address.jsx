import React from "react";
import { Select, Input } from "antd";
import { useFormContext } from "./MultiStepFormContext";

const Address = () => {
  const { state, dispatch } = useFormContext();

  return (
    <div className="form__step">
      <label>City (choose or type)</label>
      <Select
        value={state.city}
        onChange={(val) => dispatch({ type: "SET_CITY", payload: val })}
        style={{ width: "100%", marginBottom: "10px" }}
        placeholder="Select a city"
      >
        <Select.Option value="Chisinau">Chișinău</Select.Option>
        <Select.Option value="Bucharest">București</Select.Option>
        <Select.Option value="Berlin">Berlin</Select.Option>
        <Select.Option value="Paris">Paris</Select.Option>
        <Select.Option value="London">London</Select.Option>
        <Select.Option value="Madrid">Madrid</Select.Option>
        <Select.Option value="Rome">Rome</Select.Option>
        <Select.Option value="Vienna">Vienna</Select.Option>
        <Select.Option value="Prague">Prague</Select.Option>
        <Select.Option value="Warsaw">Warsaw</Select.Option>
      </Select>

      <Input
        placeholder="Or type your city"
        value={state.city}
        onChange={(e) => dispatch({ type: "SET_CITY", payload: e.target.value })}
      />
    </div>
  );
};

export default Address;