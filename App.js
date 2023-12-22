const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import Component3 from "./components/Component3";
import AutoTintTruePrivacyChip from "./components/AutoTintTruePrivacyChip";
import Rp20530Text from "./components/Rp20530Text";
import Home1 from "./screens/Home1";
import Home2 from "./screens/Home2";
import Home3 from "./screens/Home3";
import Home4 from "./screens/Home4";
import Home5 from "./screens/Home5";
import Home6 from "./screens/Home6";
import Home7 from "./screens/Home7";
import Home8 from "./screens/Home8";
import Home9 from "./screens/Home9";
import Account from "./screens/Account";
import Account1 from "./screens/Account1";
import Home10 from "./screens/Home10";
import Home11 from "./screens/Home11";
import Home12 from "./screens/Home12";
import Home13 from "./screens/Home13";
import Home14 from "./screens/Home14";
import ProfilePage from "./screens/ProfilePage";
import Account2 from "./screens/Account2";
import Account3 from "./screens/Account3";
import ProfilePage1 from "./screens/ProfilePage1";
import Home15 from "./screens/Home15";
import Login from "./screens/Login";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "BlackHanSans-Regular": require("./assets/fonts/BlackHanSans-Regular.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-LightItalic": require("./assets/fonts/Montserrat-LightItalic.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Biryani-Regular": require("./assets/fonts/Biryani-Regular.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
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
              name="Home1"
              component={Home1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home2"
              component={Home2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home3"
              component={Home3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home4"
              component={Home4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home5"
              component={Home5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home6"
              component={Home6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home7"
              component={Home7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home8"
              component={Home8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home9"
              component={Home9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Account"
              component={Account}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Account1"
              component={Account1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home10"
              component={Home10}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home11"
              component={Home11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home12"
              component={Home12}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home13"
              component={Home13}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home14"
              component={Home14}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfilePage"
              component={ProfilePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Account2"
              component={Account2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Account3"
              component={Account3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfilePage1"
              component={ProfilePage1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home15"
              component={Home15}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
