import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, SafeAreaView, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UpdateProfile = () => {
  const navigation = useNavigation();

  // Define state variables
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  // Handle back navigation
  const handleBackPress = () => {
    navigation.goBack();
  };

  // Validate and submit the form
  const validateAndSubmit = () => {
    if (!fullName || !email || !address) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    // Here you would typically handle form submission, e.g., send data to an API
    Alert.alert('Success', 'Profile updated successfully!');
    // Optionally navigate to another screen or reset form fields
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          style={styles.profileImage}
          source={require('../../assets/simantprofile.jpg')}
        />
        <Text style={styles.name}>Simant Dhakal</Text>
        <Text style={styles.address}>162 Wellington Street East, Barrie</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>192</Text>
          <Text style={styles.statLabel}>Food Donated</Text>
        </View>
        <View style={styles.horLine}></View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Food Requested</Text>
        </View>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.inputLabel}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
        />

        <Text style={styles.inputLabel}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.inputLabel}>Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={setAddress}
        />

        <TouchableOpacity style={styles.button}  onPress={validateAndSubmit}>
                  <Text style={styles.buttonText}>
                    Update Profile
                  </Text>
                </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop:30,
  },
  backButton: {
    fontSize: 16,
    color: '#000',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  address: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    padding: 16,
    borderColor: '#D9D9D9', // Add border color
    borderWidth: 1,
  },
  stat: {
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
    fontSize: 16,
    color: '#666',
  },
  formContainer: {
    margin: 20,
  },
  inputLabel: {
    fontSize: 16,
    color: '#6A0DAD', // Purple color
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  button: {
      width: '100%',
      paddingVertical: 15,
      borderRadius: 8,
      backgroundColor: '#333',
      marginBottom: 15,
      marginTop: 15,
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
    },
});

export default UpdateProfile;