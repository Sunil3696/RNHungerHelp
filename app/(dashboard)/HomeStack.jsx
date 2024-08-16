import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './home';
import FoodDetailScreen from './foodDetails';
import AllFood from './allFood'
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="FoodDetail" component={FoodDetailScreen} options={{ headerTitle: '',  headerBackTitleVisible: true, }} />
      <Stack.Screen name="AllFood" component={AllFood} />
    </Stack.Navigator>
  );
};

export default HomeStack;
