import { evaluate } from "mathjs";
import {
  CalculatorAction,
  CalculatorActionTypes,
} from "../../actions/calculatorActions";

interface CalculatorState {
  input: string | '';
}

const initialState: CalculatorState = { input: "" };

const calculatorReducer = (state = initialState, action: CalculatorAction) => {
  switch (action.type) {
    case CalculatorActionTypes.ADD_INPUT:
      if (isNaN(parseInt(state.input))) {
        return {
          ...state,
          input: action.payload,
        };
      }
			else {
        return {
          ...state,
          input: state.input + action.payload,
        };
      }

    case CalculatorActionTypes.CLEAR_INPUT:
      if (state.input) {
        return {
          ...state,
          input: "",
        };
      }

    case CalculatorActionTypes.DELETE_LAST_INPUT:
      if (state.input) {
        return {
          ...state,
          input: state.input.slice(0, -1),
        };
      }

    case CalculatorActionTypes.CALCULATE_RESULT:
      if (state.input) {
        try {
          const result = evaluate(state.input);
          return {
            ...state,
            input: String(result),
          };
        } catch (error) {
          return {
            ...state,
            input: "Error",
          };
        }
      }

    default:
      return state;
  }
};

export default calculatorReducer;
