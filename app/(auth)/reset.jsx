import { StyleSheet, Text, View , TextInput, TouchableOpacity, Alert} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons';

const PasswordReset = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const [email , setEmail] = useState("");

const handleEmail = (value) => {
    setEmail(value)
}


const handlePasswordReset = () => {
    if(!email) {
        alert("Please enter email")
        return;
    }
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return;
    }

    Alert.alert(
        "Password reset",
        "Password reset link has been sent. Please check you email"
    )

}

  return (
    <SafeAreaView style={styles.container}>
           <View style={styles.header}>
        <Text style={styles.title}>Reset Password</Text>
      </View>
      <View style={styles.formContainer}>
      <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
          onChangeText={handleEmail}
          autoCapitalize="none"
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity  onPress={handlePasswordReset} style={styles.signInButton}>
          <Icon name="paper-plane" size={20} color="#fff" />
          <Text style={styles.signInButtonText}>Reset password</Text>
        </TouchableOpacity>
        </View>
        </SafeAreaView>
  )
}

export default PasswordReset

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        // backgroundColor: 'red',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      header : {
        // backgroundColor : 'green',
        flex : 2,
        justifyContent: 'center',
        alignItems: 'center',
      },
      formContainer : {
        flex: 1,
        // backgroundColor: "cyan"
      },
      label : {
        fontSize: 16,
        marginBottom: 5,
        fontWeight : 'bold'
      },
      input: {
        borderWidth: 1,
        // borderColor: 'green',
        padding: 10,
        borderRadius: 5,
        marginBottom: 15,
        fontSize: 16,
      },
      buttonContainer : {
        flex: 3,
        alignItems: 'center',
        // backgroundColor :"blue"
      },
      signInButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#333',
        padding: 15,
        borderRadius: 5,
        width: '100%',
        marginBottom: 20,
      },
      signInButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
      },



})