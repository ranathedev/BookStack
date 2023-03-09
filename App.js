import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import GetStartedScreen from "./components/screens/GettingStartedScreen";
import SignUpFlowScreen from "./components/screens/SignUpFlowScreen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Sono: require("./assets/fonts/Sono-Regular.ttf"),
    SonoMedium: require("./assets/fonts/Sono-Medium.ttf"),
    SonoBold: require("./assets/fonts/Sono-SemiBold.ttf"),
    Inter: require("./assets/fonts/Inter-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      {/* <SignUp /> */}
      <SignUpFlowScreen />
      {/* <GetStartedScreen /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});