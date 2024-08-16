import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
// import { useRouter } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native'; // Use useNavigation

const handleSigninClicked = () => {
    router.push('/sign-in')
}

const UserProfile = () => {

  const navigation = useNavigation(); // Use useNavigation hook

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profileSection}>
          <Image source={require('../../assets/simantprofile.jpg')}
          style={styles.profileImage} />
          <Text style={styles.name}>Simant Dhakal</Text>
          <Text style={styles.address}>162 Wellington Street East, Barrie</Text>

          <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('UpdateProfile')}>
            <Image source={require('../../assets/editing.png')} style={styles.editIcon} />
            <Text style={styles.editText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.statsSection}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>192</Text>
            <Text style={styles.statLabel}>Food Donated</Text>
          </View>
          <View style={styles.horLine}></View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Food Requested</Text>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Recently Donated Items</Text>
        <View style={styles.itemRow}>
          <View style={styles.itemBox}>
            <Image
              source={require('../../assets/nonveg.jpg')}
              style={styles.itemImage}
            />
            <Text style={styles.itemTitle}>Italian Pasta</Text>
            <Text style={styles.itemDescription}>
              Pellentesque sit amet sapien fringilla, mattis ligula consectetur.
            </Text>
          </View>
          <View style={styles.itemBox}>
            <Image
              source={require('../../assets/mixed.jpg')}
              style={styles.itemImage}
            />
            <Text style={styles.itemTitle}>Chessy Chess Pizza</Text>
            <Text style={styles.itemDescription}>
              Pellentesque sit amet sapien fringilla, mattis ligula consectetur.
            </Text>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Recently Requested Items</Text>
        <View style={styles.itemRow}>
          <View style={styles.itemBox}>
            <Image
              source={require('../../assets/veg.jpeg')}
              style={styles.itemImage}
            />
            <Text style={styles.itemTitle}>Green Barrie Fruit Salad</Text>
            <Text style={styles.itemDescription}>
              Pellentesque sit amet sapien fringilla, mattis ligula consectetur.
            </Text>
          </View>
          <View style={styles.itemBox}>
            <Image
              source={require('../../assets/eggcurry.jpg')}
              style={styles.itemImage}
            />
            <Text style={styles.itemTitle}>Indian Egg Curry</Text>
            <Text style={styles.itemDescription}>
              Pellentesque sit amet sapien fringilla, mattis ligula consectetur.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
  },
  editIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  editText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
    padding: 16,
    borderColor: '#D9D9D9', // Add border color
    borderWidth: 1,
  },
  statBox: {
    alignItems: 'center',
  },
  horLine: {
    width: 1,
    borderColor: '#D9D9D9', // Add border color
    borderWidth: 1,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  itemBox: {
    width: '48%',
  },
  itemImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 12,
    color: '#666',
  },
});

export default UserProfile;