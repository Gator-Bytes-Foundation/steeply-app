import React from "react";
import { createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { NavigationContainer } from "@react-navigation/native";
//import { createBottomTabNavigator } from "react-navigation-tabs";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import {
  NativeBaseProvider,
  Button,
  Box,
  HamburgerIcon,
  Pressable,
  Heading,
  VStack,
  Text,
  Center,
  HStack,
  Divider,
  Icon,
  Stack,
} from "native-base";

import { createDrawerNavigator, DrawerContentScrollView} from "@react-navigation/drawer";

//Importing all screens
import WelcomeScreen from "./src/screens/WelcomeScreen";
//import Sidebar from "./src/components/sidebar";
import Footer from "./src/components/SimpleFooter";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import MenuScreen from "./src/screens/MenuScreen";
import HomeScreen from "./src/screens/HomeScreen";
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


//Importing navigator helper which will allow us to navigate between different flows
import { navigate, setNavigator } from "./src/helpers/navigation";
//Importing fonts hook
import { useFonts } from "@use-expo/font";
//Importing AppLoading component if something doesn't load correctly
import AppLoading from "expo-app-loading";
//importing API keys which we are going to use to initialize out firebase 
import apiKeys from "./src/config/keys";
//importing firebase
//import * as firebase from "firebase";
//importing icons library's
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';




//flow that is controling the login screens
const loginFlow = createStackNavigator({
  Welome: WelcomeScreen,
  Signin: SigninScreen,
  Signup: SignupScreen
});


//flow that is controling the home screens
const homeFlow = createStackNavigator({
  Home: HomeScreen,
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




//navigator component which will have all navigators nested
const navigator = createSwitchNavigator({
  //ResolveAuth: ResolveAuthScreen,

  loginFlow: loginFlow,
  OnBoard: OnBoardScreen,
  Menu: MenuScreen,
  //bottomTabFlow: bottomTabFlow
});


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
const getIcon = (screenName) => {
  switch (screenName) {
    case "Inbox":
      return "email";
    case "Outbox":
      return "send";
    case "Favorites":
      return "heart";
    case "Archive":
      return "archive";
    case "Trash":
      return "trash-can";
    case "Spam":
      return "alert-circle";
    default:
      return undefined;
  }
};

const sidebarRoutes = ["Home","About","References"];
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} safeArea>
      <VStack space="6" my="2" mx="1">
        <Box px="4">
          <Text bold color="gray.700">
            Mail
          </Text>
          <Text fontSize="14" mt="1" color="gray.500" fontWeight="500">
            john_doe@gmail.com
          </Text>
        </Box>
        <VStack divider={<Divider />} space="4">
          <VStack space="3">
            {sidebarRoutes.map((name, index) => ( //props.state.routeNames
              <Pressable key={index}
                px="5"
                py="3"
                rounded="md"
                bg={
                  index === props.state.index
                    ? "rgba(6, 182, 212, 0.1)"
                    : "transparent"
                }
                onPress={(event) => {
                  props.navigation.navigate(name);
                }}
              >
                <HStack space="7" alignItems="center">
                  <Text
                    fontWeight="500"
                    color={
                      index === props.state.index ? "primary.500" : "gray.700"
                    }
                  >
                    {name}
                  </Text>
                </HStack>
              </Pressable>
            ))}
          </VStack>
          <VStack space="5">
            <Text fontWeight="500" fontSize="14" px="5" color="gray.500">
              Labels
            </Text>
            <VStack space="3">
              <Pressable px="5" py="3">
                <HStack space="7" alignItems="center">
                  <Text color="gray.700" fontWeight="500">
                    Family
                  </Text>
                </HStack>
              </Pressable>
              <Pressable px="5" py="2">
                <HStack space="7" alignItems="center">
                  <Text color="gray.700" fontWeight="500">
                    Friends
                  </Text>
                </HStack>
              </Pressable>
              <Pressable px="5" py="3">
                <HStack space="7" alignItems="center">
                  <Text fontWeight="500" color="gray.700">
                    Work
                  </Text>
                </HStack>
              </Pressable>
            </VStack>
          </VStack>
        </VStack>
      </VStack>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function AppFlow(props) {
  return (
    <Box safeArea flex={1}>
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}
    > 
        <Drawer.Screen name="Welcome" component={WelcomeScreen} />
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Menu" component={MenuScreen} />
        <Drawer.Screen name="TaskList" component={TaskListScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="References" component={ReferencesScreen} />
        <Drawer.Screen name="TaskDetail" component={TaskListScreen} />
        <Drawer.Screen name="OnBoard" component={OnBoardScreen} />
        <Drawer.Screen name="Exercise" component={ExerciseScreen} />
        <Drawer.Screen name="Social" component={SocialScreen} />
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
        <Tab.Screen name="Home" component={HomeScreen} options={{
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
  /*const App = createAppContainer(navigator);
  return (
    <NativeBaseProvider>
      <App ref={(navigator) => { setNavigator(navigator) }} />
    </NativeBaseProvider>
  );*/
  return (
      <App/>
  );
}





