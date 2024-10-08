import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack >
      <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      <Stack.Screen name="update-profile" />
      <Stack.Screen name="reset"  options={{ headerTitle: '',  headerBackTitleVisible: true, }}/>
    </Stack>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});


