import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, FlatList, Image, StyleSheet, Alert } from 'react-native';

const dummyData = [
  {
    id: '1',
    orderNumber: '179011',
    user: 'Simant Dhakal',
    image: require('../../assets/nonveg.jpg'),
  },
  {
    id: '2',
    orderNumber: '178043',
    user: 'Kushal Ghimire',
    image: require('../../assets/mixed.jpg'),
  },
  {
    id: '3',
    orderNumber: '171012',
    user: 'Sunil Balami',
    image: require('../../assets/veg.jpeg'),
  },
];

const requestedData = [
    {
      id: '1',
      orderNumber: '179011',
      dishName: 'Indian Egg Curry',
      location: '73 Tunbridge road, Barrie',
      phoneNumber: '6472733523',
      image: require('../../assets/nonveg.jpg'),
    },
    {
      id: '2',
      orderNumber: '169190',
      dishName: 'Chicken Curry',
      location: '4 Brighton, Barrie',
      phoneNumber: '6472733523',
      image: require('../../assets/veg.jpeg'),
    },
    {
        id: '3',
        orderNumber: '179011',
        dishName: 'Indian Egg Curry',
        location: '73 Tunbridge road, Barrie',
        phoneNumber: '6472733523',
        image: require('../../assets/nonveg.jpg'),
      },
      {
        id: '4',
        orderNumber: '169190',
        dishName: 'Chicken Curry',
        location: '4 Brighton, Barrie',
        phoneNumber: '6472733523',
        image: require('../../assets/veg.jpeg'),
      },
  ];


const handleApprove = (item, user) => {
   Alert.alert(
    "Approve!",
    `You are going to approve order No: ${item} which was requested from ${user}.`,
    [
        {
            text : "Cancel"
        },
        {
            text: "Approve"
        }
    ]
   )
}


const handleReject = (item, user) => {
    Alert.alert(
     "Approve!",
     `You are going to reject order No: ${item} which was requested from ${user}.`,
     [
         {
             text : "Cancel"
         },
         {
             text: "Approve"
         }
     ]
    )
 }

const RequestsDonated = () => {
  const [view, setView] = useState('requested');

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemContent}>
        <Text style={styles.itemOrderNumber}>Order #{item.orderNumber}</Text>
        <Text style={styles.itemUser}>{item.user} has sent you an item request for the order</Text>
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.approveButton} onPress={() => {handleApprove(item.orderNumber, item.user)}}>
            <Text style={styles.approveButtonText}>Approve</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rejectButton} onPress={() => {handleReject(item.orderNumber, item.user)}}>
            <Text style={styles.rejectButtonText}>Reject</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );


  const renderRequestedItem = ({ item }) => (
    <View style={styles.requestItemContainer}>
      <Image source={item.image} style={styles.requestItemImage} />
      <View style={styles.requestItemContent}>
        <Text style={styles.requestItemOrderNumber}>Order #{item.orderNumber}</Text>
        <Text style={styles.requestItemText}>
          Your {item.dishName} is ready to be picked
          at {item.location}. Please call the
          person at <Text style={styles.requestItemPhoneNumber}>{item.phoneNumber}</Text> for
          confirmation.
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.switchContainer}>
        <TouchableOpacity
          style={[styles.switchButton, view === 'requested' && styles.activeSwitchButton]}
          onPress={() => setView('requested')}
        >
          <Text style={[styles.switchText, view === 'requested' && styles.activeSwitchText]}>
            Requested
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.switchButton, view === 'donated' && styles.activeSwitchButton]}
          onPress={() => setView('donated')}
        >
          <Text style={[styles.switchText, view === 'donated' && styles.activeSwitchText]}>
            Donated
          </Text>
        </TouchableOpacity>
      </View>
      {view === 'requested' && (
        <FlatList
          data={requestedData}
          renderItem={renderRequestedItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      )}
      {view === 'donated' && (
        <FlatList
          data={dummyData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </SafeAreaView>
  );
};

export default RequestsDonated;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 5,
  },
  switchButton: {
    flex: 1,
    paddingVertical: 15,
    marginHorizontal: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeSwitchButton: {
    backgroundColor: '#333',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  switchText: {
    fontSize: 16,
    color: '#000',
  },
  activeSwitchText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  listContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  itemContent: {
    flex: 1,
    justifyContent: 'center',
  },
  itemOrderNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemUser: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  approveButton: {
    backgroundColor: '#333',
    borderRadius: 5,
    padding: 10,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  rejectButton: {
    backgroundColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    flex: 1,
    alignItems: 'center',
  },
  approveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  rejectButtonText: {
    color: 'black',
    fontSize: 16,
  },
  requestItemContainer: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
  },
  requestItemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  requestItemContent: {
    flex: 1,
    justifyContent: 'center',
  },
  requestItemOrderNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  requestItemText: {
    fontSize: 14,
    color: '#555',
  },
  requestItemDishName: {
    fontWeight: 'bold',
  },
  requestItemLocation: {
    fontWeight: 'bold',
    color: '#000',
  },
  requestItemPhoneNumber: {
    fontWeight: 'bold',
    color: '#000',
  },
});
