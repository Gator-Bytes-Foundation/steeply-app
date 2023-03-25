import 'react-native-gesture-handler';
import React, { useCallback } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from "react-native";
import { NativeBaseProvider, Box } from "native-base";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

//Importing all screens
import WelcomeScreen from "./src/screens/WelcomeScreen";
import Sidebar from "./src/components/Sidebar";
//import Footer from "./src/components/SimpleFooter";
import MenuScreen from "./src/screens/MenuScreen";
import TaskListScreen from "./src/screens/TaskListScreen";
//import TaskDetailScreen from "./src/screens/TaskDetailScreen";
//import ExploreScreen from "./src/screens/ExploreScreen";
//import AccountScreen from "./src/screens/AccountScreen";
//import ExpertScreen from "./src/screens/ExpertScreen";
import ExerciseScreen from "./src/screens/lessons/exercise.screen";
import SocialScreen from "./src/screens/lessons/social.screen";
//import ReviewScreen from "./src/screens/ReviewScreen";
//import ChangePasswordScreen from "./src/screens/ChangePasswordScreen";
import OnBoardScreen from "./src/screens/OnBoardScreen";
import AboutScreen from "./src/screens/AboutScreen";
import ReferencesScreen from "./src/screens/ReferencesScreen";
import StretchTutorialsScreen from "./src/screens/lessons/StretchTutorial.screen";
import EducationScreen from "./src/screens/lessons/education.screen";
import MedScreen from "./src/screens/lessons/med.screen";
import DietScreen from "./src/screens/lessons/diet.screen";
import SymptomScreen from "./src/screens/lessons/symptom.screen";

SplashScreen.preventAutoHideAsync();
const Drawer = createDrawerNavigator();

const customFonts = {
  TrendaExtraLight: require("./assets/fonts/TrendaFonts/Trenda-ExtraLight.otf"),
  TrendaLightIt: require("./assets/fonts/TrendaFonts/Trenda-LightIt.otf"),
  TrendaLight: require("./assets/fonts/TrendaFonts/Trenda-Light.otf"),
  TrendaRegular: require("./assets/fonts/TrendaFonts/Trenda-Regular.otf"),
  TrendaSemiboldIt: require("./assets/fonts/TrendaFonts/Trenda-SemiboldIt.otf"),
  TrendaSemibold: require("./assets/fonts/TrendaFonts/Trenda-Semibold.otf"),
  MoonBold: require("./assets/fonts/MoonFonts/Moon-Bold.otf"),
  MoonLight: require("./assets/fonts/MoonFonts/Moon-Light.otf")
}

function AppFlow(props) {
  return (
    <Drawer.Navigator initialRouteName="Welcome" drawerContent={(props) => <Sidebar {...props}/>}
    > 
        <Drawer.Screen name="Welcome" component={WelcomeScreen} />
        <Drawer.Screen name="Home" component={WelcomeScreen} />
        <Drawer.Screen name="Menu" key="menu" component={MenuScreen} />
        <Drawer.Screen name="TaskList" component={TaskListScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="References" component={ReferencesScreen} />
        <Drawer.Screen name="TaskDetail" component={TaskListScreen} />
        <Drawer.Screen name="OnBoard" component={OnBoardScreen} />
        <Drawer.Screen name="Exercise" component={ExerciseScreen} />
        <Drawer.Screen name="Navigating School" component={EducationScreen} />
        <Drawer.Screen name="Stay Connected" component={SocialScreen} />
        <Drawer.Screen name="Diet & Nutrition" component={DietScreen} />
        <Drawer.Screen name="Side Effect Management" component={SymptomScreen} />
        <Drawer.Screen name="Med Management" component={MedScreen} />
        <Drawer.Screen name="Exercises" component={StretchTutorialsScreen}/>
        <Drawer.Screen name="Stretching" component={StretchTutorialsScreen}/>
        <Drawer.Screen name="OnlineDiagnosisGroups" component={StretchTutorialsScreen}/>
    </Drawer.Navigator>
  )
} 

export default function App() {
  const [fontsLoaded] = useFonts(customFonts);
  //if fonts are not loaded it will show loading icon

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeBaseProvider>
      <NavigationContainer>
      <View safeArea flex={1} onLayout={onLayoutRootView}>
        <AppFlow />
      </View>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}





