import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      <Text>primera app</Text>
      <Text>Open up App.js 3000</Text>
      <TextInput style={styles.input} placeholder="entra"></TextInput>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ccc",
  },
  input: {
    backgroundColor: "#42424242",
    width:250,
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 1,
    borderRadius: 4,
    color: "#000",
  },
});
