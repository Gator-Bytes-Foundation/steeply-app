import * as React from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Box,
  Pressable,
  VStack,
  Text,
  HStack,
  Divider,
  Icon,
} from "native-base";

const getIcon = (screenName) => {
  switch (screenName) {
    case "Home":
      return "heart";
    case "References":
      return "archive";
    case "About":
      return "alert-circle";
    default:
      return undefined;
  }
};

const sidebarRoutes = ["Home","About","References"];
function Sidebar(props) {
  return (
    <DrawerContentScrollView {...props} safeArea>
      <VStack space="6" my="2" mx="1">
        <Box px="4">
          <Text bold color="gray.700">
            Steeply
          </Text>
          <Text fontSize="14" mt="1" color="gray.500" fontWeight="500">
           Pages
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
                  <Icon
                    color={
                      index === props.state.index ? "primary.500" : "gray.500"
                    }
                    size="5"
                    as={<MaterialCommunityIcons name={getIcon(name)} />}
                  />
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
        </VStack>
      </VStack>
    </DrawerContentScrollView>
  );
}
export default Sidebar
