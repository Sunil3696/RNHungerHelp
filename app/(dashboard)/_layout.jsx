import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
// import profile from "./profile";
import profile from "./user_profile";
import HomeStack from "./HomeStack";
import Donate from './Donate';
import RequestsDonated from './RequestsDonated'; 
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
              }  else if (route.name === "Donate") {
                iconName = focused ? "heart" : "heart-outline";
              } else if (route.name === 'Requests') {
                iconName = focused ? 'list' : 'list-outline';
              }
    
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#333",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
         
          <Tab.Screen name="Donate" component={Donate} options={{ headerShown: false }} />
          <Tab.Screen name="Requests" component={RequestsDonated} options={{ headerShown: false }} />
          <Tab.Screen name="profile" component={profile} options={{ headerShown: false }} />
       
        </Tab.Navigator>
      );
    };

export default DashLayout;

const styles = StyleSheet.create({});
