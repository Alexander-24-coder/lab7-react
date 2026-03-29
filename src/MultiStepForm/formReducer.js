export const initialState = {
  step: 0,
  name: "",
  age: "",
  profession: "",
  city: "",
  hobbies: [],
  preferences: "",
};

export function formReducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_AGE":
      return { ...state, age: action.payload };
    case "SET_PROFESSION":
      return { ...state, profession: action.payload };
    case "SET_CITY":
      return { ...state, city: action.payload };
    case "SET_HOBBIES":
      return { ...state, hobbies: action.payload };
    case "SET_PREFERENCES":
      return { ...state, preferences: action.payload };
    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };
    case "PREV_STEP":
      return { ...state, step: state.step - 1 };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
}