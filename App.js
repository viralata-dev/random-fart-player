import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const fartList = ["fart-01", "fart-02", "fart-03", "fart-04", "fart-05"];

  const handlePress = () => {
    const randomFart = Math.floor(Math.random() * fartList.length);
    alert(fartList[randomFart]);
  };

  return (
    <View style={styles.container}>
      <Button title="Puxa meu dedo!" onPress={handlePress} />
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
  },
});
