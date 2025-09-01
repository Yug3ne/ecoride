import { Stack } from "expo-router";
import "../global.css";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Inter-Bold": require("../../assets/fonts/Inter-Bold.otf"),
    "Inter-ExtraBold": require("../../assets/fonts/Inter-ExtraBold.otf"),
    "Inter-ExtraLight": require("../../assets/fonts/Inter-ExtraLight.otf"),
    "Inter-Light": require("../../assets/fonts/Inter-Light.otf"),
    "Inter-Medium": require("../../assets/fonts/Inter-Medium.otf"),
    "Inter-Regular": require("../../assets/fonts/Inter-Regular.otf"),
    "Inter-SemiBold": require("../../assets/fonts/Inter-SemiBold.otf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(core)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="dark" />
    </>
  );
}
