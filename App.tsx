import { StyleSheet, Text, View } from "react-native";
import Calculator from "./src/containers/Calculator/Calculator";
import store from "./src/app/store/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store = {store}>
        <Calculator />
    </Provider>
  );
}

