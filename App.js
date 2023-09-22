import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import fart1 from "./assets/soundfiles/555418__kuchtaa__wet-fart.mp3";
import { Audio } from "expo-av";

export default function App() {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log("Loading Sound");
    //todo: select a random file from folder ./assets/soundfiles

    const { sound } = await Audio.Sound.createAsync(
      require("./assets/soundfiles/523467__tv_ling__perfect-fart.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text>ALO!</Text>

        <TouchableOpacity onPress={playSound}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Puxa meu dedo!</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 200,
    height: 200,
    borderRadius: 200,
    color: "red",
    backgroundColor: "blue",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "monospace",
  },
});
