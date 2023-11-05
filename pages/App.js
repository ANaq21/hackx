const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import PrpfileMaintain from "./screens/PrpfileMaintain";
import AllSet from "./screens/AllSet";
import Setting from "./screens/Setting";
import Family from "./screens/Family";
import ProfilePage from "./screens/ProfilePage";
import BreakPage from "./screens/BreakPage";
import StopSignDetectingPage from "./screens/StopSignDetectingPage";
import SpeedingPage from "./screens/SpeedingPage";
import SignInPage from "./screens/SignInPage";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "InriaSans-Bold": require("./assets/fonts/InriaSans-Bold.ttf"),
    "HammersmithOne-Regular": require("./assets/fonts/HammersmithOne-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PrpfileMaintain"
              component={PrpfileMaintain}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AllSet"
              component={AllSet}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Setting"
              component={Setting}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Family"
              component={Family}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfilePage"
              component={ProfilePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BreakPage"
              component={BreakPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StopSignDetectingPage"
              component={StopSignDetectingPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SpeedingPage"
              component={SpeedingPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignInPage"
              component={SignInPage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
