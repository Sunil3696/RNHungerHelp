import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
const Profile = () => {
    const router = useRouter();
  const profileImage = require('../../assets/me.png');
  const name = 'John Doe';
  const email = 'johndoe@example.com';
  const phoneNumber = '123-456-7890';
  const address = '123 Main St, City, Country';

  const handleEditProfile = () => {
    Alert.alert('Edit Profile', 'Profile editing feature is not implemented yet.');
  };

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      { text: 'Cancel', style: 'cancsel' },
      { text: 'Logout', onPress: () => router.push('/sign-in')},
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileImageContainer}>
        <Image source={profileImage} style={styles.profileImage} />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.infoText}>{name}</Text>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.infoText}>{email}</Text>
        <Text style={styles.label}>Phone Number</Text>
        <Text style={styles.infoText}>{phoneNumber}</Text>
        <Text style={styles.label}>Address</Text>
        <Text style={styles.infoText}>{address}</Text>
      </View>

      <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 250,
    height: 250,
    borderRadius: 25,
    marginTop : 40
  },
  infoContainer: {
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 2
  },
  infoText: {
    fontSize: 16,
    marginBottom: 15,
    marginLeft: 2
  },
  editButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#FF3B30',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
