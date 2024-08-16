import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const categories = [
    { id: '1', name: 'Beverage', icon: 'beer-outline' },
    { id: '2', name: 'Fast Food', icon: 'fast-food-outline' },
    { id: '3', name: 'Vegetables', icon: 'nutrition-outline' },
    { id: '4', name: 'Dairy', icon: 'pizza-outline' },
    { id: '5', name: 'Beverage', icon: 'beer-outline' },
    { id: '6', name: 'Fast Food', icon: 'fast-food-outline' },
    { id: '7', name: 'Vegetables', icon: 'nutrition-outline' },
    { id: '8', name: 'Dairy', icon: 'pizza-outline' },
  ];

const items = [
  {
    id: '1',
    title: 'Fried Chicken Wings',
    image: require('../../assets/nonveg.jpg'),
    location: '73 Tunbridge road, Barrie',
    description: 'These savory and crunchy chicken wings are a popular snack or meal...',
  },
  {
    id: '2',
    title: 'Fruit Juice Nepal',
    image: require('../../assets/mixed.jpg'),
    location: '1 Drive, georgian College',
    description: 'Fruit juices are beverages made from the extraction or pressing of the natural liquids Fruit juices are beverages made from the extraction or pressing of the natural liquids...',
  },
  {
    id: '2',
    title: 'Fruit Juice Nepal',
    image: require('../../assets/veg.jpeg'),
    location: '54 Road, Barrie',
    description: 'Fruit juices are beverages made from the extraction or pressing of the natural liquids...',
  },
];

const Dashboard = () => {
  const navigation = useNavigation();

  const handleClick = (item) => {
    navigation.navigate('FoodDetail', { foodItem: item });
  };

  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.categoryItem} onPress={() => navigation.navigate('AllFood')}>
      <Ionicons name={item.icon} size={40} color="#333" />
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

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
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Category</Text>
        <FlatList
          data={categories}
          renderItem={renderCategory}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryList}
          contentContainerStyle={styles.categoryListContainer}
        />
        <Text style={styles.sectionTitle}>Recently Added Items</Text>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.itemsList}
          contentContainerStyle={styles.itemsListContainer}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileStyle: {
    height: 45,
    width: 45,
    borderRadius: 22.5,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    
  },
  categoryList: {
    marginBottom: 20,
     alignSelf: 'center',
    
  },
  categoryListContainer: {
    paddingHorizontal: 10,
    
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  categoryIcon: {
    width: 50,
    height: 50,
    marginBottom: 5,
    borderRadius: 10,
  },
  categoryText: {
    fontSize: 14,
    color: '#666',
    fontWeight : 'bold'
  },
  itemsList: {
    marginBottom: 20,
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
