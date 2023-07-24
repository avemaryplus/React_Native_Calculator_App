import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { RootState } from "../../app/store/store";
import {
  addInput,
  calculateResult,
  clearInput,
  deleteLastInput,
} from "../../actions/calculatorActions";
import { CALCULATOR_BUTTONS } from "../../helper/buttons";
import CalculatorButton from "../../components/CalculatorButton/CalculatorButton";

const Calculator = () => {
  const dispatch = useAppDispatch();
  const { input } = useAppSelector((state: RootState) => state.calculator);

  const handleButtonPress = (label: string) => {
    switch (label) {
      case "CE":
        dispatch(clearInput());
        break;
      case "=":
        dispatch(calculateResult());
        break;
      case "<":
        dispatch(deleteLastInput());
        break;
      default:
        dispatch(addInput(label));
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.input}>{input}</Text>
        <FlatList
          contentContainerStyle={styles.keyboardContentContainer}
          data={CALCULATOR_BUTTONS}
          numColumns={4}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <CalculatorButton label={item} onPress={handleButtonPress} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f972fe",
    justifyContent: "flex-end",
  },
  content: {
    alignItems: "center",
    paddingBottom: 20,
  },
  input: {
    fontSize: 30,
    alignSelf: "flex-end",
    margin: 20,
  },
  keyboardContentContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },
});

export default Calculator;
