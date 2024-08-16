import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreens from './home';
import FoodDetailScreen from './foodDetails';
import AllFood from './allFood'
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Homes" component={HomeScreens} options={{ headerShown: false }} />
      <Stack.Screen name="FoodDetail" component={FoodDetailScreen} options={{ headerTitle: '',  headerBackTitleVisible: true, }} />
      <Stack.Screen name="AllFood" component={AllFood} />
    </Stack.Navigator>
  );
};

export default HomeStack;
