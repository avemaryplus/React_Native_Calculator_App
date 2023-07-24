import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

type Props = {
  label: string;
  onPress: (label: string) => void;
};

const CalculatorButton = ({ label, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={() => onPress(label)} style={styles.button}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 80,
    margin: 5,
    borderRadius: 20,
    backgroundColor: "#021091",
  },
  label: {
    fontSize: 30,
    color: "#fff",
  },
});

export default CalculatorButton;
