import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import profile from "./profile"; 
import HomeStack from "./HomeStack";
const Tab = createBottomTabNavigator();

const DashLayout = () => {
    return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
    
              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "profile") {
                iconName = focused ? "person" : "person-outline";
              }
    
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
          <Tab.Screen name="profile" component={profile} options={{ headerShown: false }} />
          
        </Tab.Navigator>
      );
    };

export default DashLayout;

const styles = StyleSheet.create({});
