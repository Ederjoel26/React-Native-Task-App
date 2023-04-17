import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import TaskFormScreen from "./screens/TaskFormScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={({navigation}) => ({
            headerStyle: { backgroundColor: "#222f3e"},
            headerTitleStyle: { color: "#ffffff" },
            title: "Tasks App",
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("TaskFormScreen")}>
                <Text style={{color:"#fff", marginRight: 20, fontSize: 15}}>Add task</Text>
              </TouchableOpacity>
            )}
          )}/>

        <Stack.Screen 
          name="TaskFormScreen" 
          component={TaskFormScreen}
          options={() => ({
            title: "Create Task",
            headerStyle: {backgroundColor: "#222f3e"},
            headerTitleStyle: { color: "#ffffff"},
            headerTintColor: "#ffffff",
          })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;