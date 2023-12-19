import { Text, View } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
//
// navigations
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//
// screens
import SignIn from "./screens/SignIn";
import Todo from "./screens/Todo";
import Search from "./screens/Search";
import Inbox from "./screens/Inbox";
import Profile from "./screens/Profile";
import ProfileInfo from "./screens/ProfileInfo";
import Home from "./screens/Home";
//
import "react-native-gesture-handler";
import Dm from "./screens/Dm";
import Privacy from "./screens/Privacy";
import Discover from "./screens/Discover";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="ProfileInfo" component={ProfileInfo} />
        <Stack.Screen name="DirectMessage" component={Dm} />
        <Stack.Screen name="Privacy" component={Privacy} />
        <Stack.Screen name="Discover" component={Discover} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="home-outline"
                size={24}
                color={focused ? "black" : "#DCDCDC"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Feather
                name="search"
                size={24}
                color={focused ? "black" : "#DCDCDC"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Todo"
        component={Todo}
        options={{
          title: "",
          tabBarIcon: () => {
            return (
              <View
                style={{
                  top: 8,
                  backgroundColor: "black",
                  width: 48,
                  height: 32,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRightColor: "#E6436D",
                  borderRightWidth: 4,
                  borderLeftWidth: 4,
                  borderLeftColor: "#65D2E9",
                  borderRadius: 12,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 26,
                    fontWeight: 500,
                    paddingBottom: 34,
                  }}
                >
                  +
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="chatbox-outline"
                size={24}
                color={focused ? "black" : "#DCDCDC"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Me"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Feather
                name="user"
                size={24}
                color={focused ? "black" : "#DCDCDC"}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
