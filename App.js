import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView} from "@react-navigation/drawer";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import {
  NativeBaseProvider,
  Box,
} from "native-base";


//Importing all screens
import WelcomeScreen from "./src/screens/WelcomeScreen";
import Sidebar from "./src/components/Sidebar";
import Footer from "./src/components/SimpleFooter";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import MenuScreen from "./src/screens/MenuScreen";
import TaskListScreen from "./src/screens/TaskListScreen";
import TaskDetailScreen from "./src/screens/TaskDetailScreen";
import ExploreScreen from "./src/screens/ExploreScreen";
import PurchaseScreen from "./src/screens/PurchaseScreen";
import AccountScreen from "./src/screens/AccountScreen";
import ExpertScreen from "./src/screens/ExpertScreen";
import ExerciseScreen from "./src/screens/lessons/exercise.screen";
import SocialScreen from "./src/screens/lessons/social.screen";
import ReviewScreen from "./src/screens/ReviewScreen";
import ChangePasswordScreen from "./src/screens/ChangePasswordScreen";
import OnBoardScreen from "./src/screens/OnBoardScreen";
import ConfirmPurchaseScreen from "./src/screens/ConfirmPurchasingScreen";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import AboutScreen from "./src/screens/AboutScreen";
import ReferencesScreen from "./src/screens/ReferencesScreen";
import StretchTutorialsScreen from "./src/screens/lessons/StretchTutorial.screen";


//Importing navigator helper which will allow us to navigate between different flows
import { navigate, setNavigator } from "./src/helpers/navigation";
//Importing fonts hook
import { useFonts } from "@use-expo/font";
//Importing AppLoading component if something doesn't load correctly
import AppLoading from "expo-app-loading";
import apiKeys from "./src/config/keys";
//importing firebase
//import * as firebase from "firebase";

//importing icons library's
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import EducationScreen from "./src/screens/lessons/education.screen";
import MedScreen from "./src/screens/lessons/med.screen";
import DietScreen from "./src/screens/lessons/diet.screen";
import SymptomScreen from "./src/screens/lessons/symptom.screen";




//flow that is controling the login screens
const loginFlow = createStackNavigator({
  Welome: WelcomeScreen,
  Signin: SigninScreen,
  Signup: SignupScreen
});


//flow that is controling the home screens
const homeFlow = createStackNavigator({
  Home: WelcomeScreen,
  TaskList: TaskListScreen,
  TaskDetail: TaskDetailScreen
});
homeFlow.navigationOptions = {
  title: "Home",
  tabBarIcon: ({ tintColor }) => <AntDesign name="home" size={30} color={tintColor} />
}


//flow that is controling the explore screens
const exploreFlow = createStackNavigator({
  Explore: ExploreScreen,
  Purchase: PurchaseScreen,
  Confirm: ConfirmPurchaseScreen
}, {
  initialRouteName: "Explore"
});

exploreFlow.navigationOptions = {
  title: "Subscription",
  tabBarIcon: ({ tintColor }) => <Feather name="shopping-cart" size={28} color={tintColor} />
}





//flow that is controling the account screens
const accountFlow = createStackNavigator({
  Account: AccountScreen,
  Review: ReviewScreen,
  Expert: ExpertScreen,
  ChangePassword: ChangePasswordScreen
});
accountFlow.navigationOptions = {
  title: "Me",
  tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="account" size={24} color={tintColor} />
}




//three flows put together in one bottomTabFlow
/*
const bottomTabFlow = createBottomTabNavigator({
  exploreFlow: exploreFlow,
  homeFlow: homeFlow,
  accountFlow: accountFlow
}, {
  initialRouteName: "homeFlow",
  tabBarOptions: {
    activeTintColor: "#EC216A",
    inactiveTintColor: "#14284D"
  }
});*/


//object containing all fonts 
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

const Drawer = createDrawerNavigator();

function AppFlow(props) {
  return (
    <Box safeArea flex={1}>
    <Drawer.Navigator initialRouteName="Welcome" useLegacyImplementation={true} drawerContent={(props) => <Sidebar {...props}/>}
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
    </Drawer.Navigator>
  </Box>
  )
} 

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        
      }}>
        <Tab.Screen name="App" component={AppFlow} options={{ 
            headerShown: false,
            tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="account" size={24} color={tintColor}/>
        }}/>
        <Tab.Screen name="Home" component={WelcomeScreen} options={{
          headerShown: false,
          tabBarIcon: ({ tintColor }) => <AntDesign name="home" size={30} color={tintColor} />
        }}/>
      </Tab.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

export default () => {

  const [isLoaded] = useFonts(customFonts);

  //if fonts are not loaded it will show loading icon
  if (!isLoaded)
    return <AppLoading />

  /*checking if there are any apps running before initializing a new one, if not
  we initialize the new firebase with keys we exported in keys.js
  if (!firebase.apps.length) {
    console.log("Connected with firebase!");
    firebase.initializeApp(apiKeys.firebaseConfig);
  }*/
  return (
    <NavigationContainer>
    <NativeBaseProvider>
      <AppFlow/>
    </NativeBaseProvider>
    </NavigationContainer>
  );
}





