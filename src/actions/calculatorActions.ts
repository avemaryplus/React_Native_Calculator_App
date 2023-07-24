export enum CalculatorActionTypes {
  ADD_INPUT = "ADD_INPUT",
  CLEAR_INPUT = "CLEAR_INPUT",
  DELETE_LAST_INPUT = "DELETE_LAST_INPUT",
  CALCULATE_RESULT = "CALCULATE_RESULT",
}

interface AddInputAction {
  type: CalculatorActionTypes.ADD_INPUT;
  payload: string;
}

interface ClearInputAction {
  type: CalculatorActionTypes.CLEAR_INPUT;
}

interface DeleteLastInputAction {
  type: CalculatorActionTypes.DELETE_LAST_INPUT;
}

interface CalculateResultAction {
  type: CalculatorActionTypes.CALCULATE_RESULT;
}

export type CalculatorAction =
  | AddInputAction
  | ClearInputAction
  | DeleteLastInputAction
  | CalculateResultAction;

export const addInput = (value: string): AddInputAction => ({
  type: CalculatorActionTypes.ADD_INPUT,
  payload: value,
});

export const clearInput = (): ClearInputAction => ({
  type: CalculatorActionTypes.CLEAR_INPUT,
});

export const deleteLastInput = (): DeleteLastInputAction => ({
  type: CalculatorActionTypes.DELETE_LAST_INPUT,
});

export const calculateResult = (): CalculateResultAction => ({
  type: CalculatorActionTypes.CALCULATE_RESULT,
});
