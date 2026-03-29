import React, { createContext, useReducer, useContext } from "react";
import { formReducer, initialState } from "./formReducer";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);