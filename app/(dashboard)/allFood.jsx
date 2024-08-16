import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const items = [
  {
    id: '1',
    title: 'Fried Chicken Wings',
    image: require('../../assets/nonveg.jpg'),
    location: '162 Wellington Street East, Barrie',
    description: 'These savory and crunchy chicken wings are a popular snack or meal...',
  },
  {
    id: '2',
    title: 'Fruit Juice Nepal',
    image: require('../../assets/mixed.jpg'),
    location: '54 Brighton Road, Barrie',
    description: 'Fruit juices are beverages made from the extraction or pressing of the natural liquids Fruit juices are beverages made from the extraction or pressing of the natural liquids...',
  },
  {
    id: '3',
    title: 'Fruit Juice Nepal',
    image: require('../../assets/veg.jpeg'),
    location: '54 Brighton Road, Barrie',
    description: 'Fruit juices are beverages made from the extraction or pressing of the natural liquids...',
  },
];

const AllFood = () => {
  const navigation = useNavigation();

  const handleClick = (item) => {
    navigation.navigate('FoodDetail', { foodItem: item });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => handleClick(item)}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemContent}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <View style={styles.itemLocationContainer}>
          <Ionicons name="location-outline" size={16} color="#666" />
          <Text style={styles.itemLocation}>{item.location}</Text>
        </View>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.itemsListContainer}
      />
    </SafeAreaView>
  );
};

export default AllFood;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  itemsListContainer: {
    paddingHorizontal: 10,
  },
  itemContainer: {
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    overflow: 'hidden',
    elevation: 1,
    padding: 10,
  },
  itemImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  itemContent: {
    paddingTop: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  itemLocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  itemLocation: {
    marginLeft: 5,
    fontSize: 12,
    color: '#666',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
  },
});
