import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, Text } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import Home from "./screens/home";
import Form from "./screens/form";
import Profile from "./screens/profile";
import Companyuser from "./screens/companyuser";
import Companyadmin from "./screens/companyadmin";
import Login from "./screens/login";
import Signup from "./screens/signup";
import Choose from "./screens/choose";
import Cover from "./screens/cover";
import About from "./screens/about";
import Task from "./screens/task";
import Taskdone from "./screens/taskdone";
import Create from "./screens/create";
import Loginadmin from "./screens/loginadmin";
import Signupadmin from "./screens/signupadmin";
import Chooseadmin from "./screens/chooseadmin";
import Data from "./screens/data";
import Detail from "./screens/detail";
import Editcompany from "./screens/editcompany";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Navigator Declaration
const Stack = createNativeStackNavigator(); 
const Tab = createBottomTabNavigator();

const noHead = { headerShown: false };

const Tabs = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = "home-outline";
              break;
            case "Company":
              iconName = "business-outline";
              break;
            case "Form":
              iconName = "create-outline";
              break;
            case "Task":
              iconName = "clipboard-outline";
              break;
            case "Profile":
              iconName = "person-circle-outline";
              break;
          }
          return (
            <Ionicons name={iconName} size={20} color={focused ? "white" : color} />
          );
        },
        tabBarIconStyle: { marginVertical: 5 },
        tabBarStyle: {
          height: 70,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          margin: 20,
          borderTopWidth: 0,
          position: 'absolute',
          backgroundColor: '#9A1314',
          paddingTop: insets.center,
          paddingBottom: insets.center, 
          padding: 5,
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.50,
          shadowRadius: 10.0,
        },
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text color={focused ? "white" : color} mb={2}>
              {children}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={noHead} />
      <Tab.Screen name="Company" component={Companyuser} options={noHead} />
      <Tab.Screen name="Form" component={Form} options={noHead} />
      <Tab.Screen name="Task" component={Task} options={noHead} />
      <Tab.Screen name="Profile" component={Profile} options={noHead} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Cover" component={Cover} options={noHead} />
          <Stack.Screen name="Choose" component={Choose} options={noHead} />
          <Stack.Screen name="Chooseadmin" component={Chooseadmin} options={noHead} />
          <Stack.Screen name="Signup" component={Signup} options={noHead} />
          <Stack.Screen name="Signupadmin" component={Signupadmin} options={noHead} />
          <Stack.Screen name="Login" component={Login} options={noHead} />
          <Stack.Screen name="Loginadmin" component={Loginadmin} options={noHead} />
          <Stack.Screen name="Tabs" component={Tabs} options={noHead} />
          <Stack.Screen name="Home" component={Home} options={noHead} />
          <Stack.Screen name="About" component={About} options={noHead} />
          <Stack.Screen name="Create" component={Create} options={noHead} />
          <Stack.Screen name="Companyadmin" component={Companyadmin} options={noHead} />
          <Stack.Screen name="Editcompany" component={Editcompany} options={noHead} />
          <Stack.Screen name="Data" component={Data} options={noHead} />
          <Stack.Screen name="Detail" component={Detail} options={noHead} />
          <Stack.Screen name="Taskdone" component={Taskdone} options={noHead} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;