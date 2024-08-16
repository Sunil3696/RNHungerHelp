import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Modal } from 'react-native';
const Donate = () => {
  const [foodName, setFoodName] = useState('');
  const [foodType, setFoodType] = useState('');
  const [foodDescription, setFoodDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [foodFor, setFoodFor] = useState('');
  const [location, setLocation] = useState('');
  const [availableTill, setAvailableTill] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  const handleSubmit = () => {
    setModalVisible(true);
  };

  const handleImagePicker = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Food Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter food name"
            value={foodName}
            onChangeText={setFoodName}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Food Type</Text>
          <TouchableOpacity style={styles.dropdown} onPress={() => console.log('Select Food Type')}>
            <Text style={styles.dropdownText}>{foodType || 'Select'}</Text>
            <Ionicons name="chevron-down" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Food Description</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Enter food description here"
            value={foodDescription}
            onChangeText={setFoodDescription}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Ingredients</Text>
          <TextInput style={styles.textArea}  placeholder="Enter ingredients" value={ingredients}   onChangeText={setIngredients}

          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Food For</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter number of people"
            value={foodFor}
            onChangeText={setFoodFor}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Location</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter location"
            value={location}
            onChangeText={setLocation}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Available Till</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter time (e.g., 6 PM)"
            value={availableTill}
            onChangeText={setAvailableTill}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Upload Image</Text>
          <TouchableOpacity style={styles.imagePicker} onPress={handleImagePicker}>
            {imageUri ? (
              <Image source={{ uri: imageUri }} style={styles.imagePreview} />
            ) : (
              <Text style={styles.imagePickerText}>Pick an image</Text>
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          <Ionicons name="checkmark-circle" size={80} color="green"/>
            <Text style={styles.modalTitle}>Donation Submitted </Text>
            <Text style={styles.modalText}>
              Your donation has beed submitted. we will update you if anyone requires it.
            </Text>
            <TouchableOpacity style={styles.modalButton} onPress={handleCloseModal}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Donate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    height: 80,
    textAlignVertical: 'top',
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
  },
  dropdownText: {
    fontSize: 16,
    color: '#000',
  },
  imagePicker: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  imagePickerText: {
    color: 'black',
    fontSize : 16, 
    // backgroundColor : 'green',
    
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    width : '90%',
    alignSelf : 'center'
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
