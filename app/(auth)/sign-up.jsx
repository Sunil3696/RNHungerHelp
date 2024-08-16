import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';


import { useRouter } from 'expo-router';
const Signup = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const router = useRouter();


const handleEmailChange = (value) => {
console.log("email:",value)
setEmail(value)
}


const handlePasswordChange = (value) => {
    console.log("pass",value)
    setPassword(value)
}

const handleSigninClicked = () => {
    router.push('/sign-in')
}

const handleSignUp = () => {
        if(!email || !password){
            alert("Both field are required")
            return
        }
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address");
            return;
        }

        if(password.length <6 ){
            alert("Password must be atleast 6 char long")
            return ;
        }

    Alert.alert("Signup Successfull", 
        `Verification email has been sent to ${email}. Please verify.`,
   [
    {
        text : "Ok",
        
    },{
    text : "Signin now",
    onPress: () => router.push('/sign-in'),
    }
   ],
   { cancelable: false }
    );
};


  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.headerContainer}>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.subtitle}>Signup to proceed</Text>
      </View>


      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter your email" keyboardType="email-address" autoCapitalize="none"
          onChangeText={handleEmailChange}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={ handlePasswordChange}
          placeholder="Enter your password"
          secureTextEntry
        />
  
      </View>

      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={handleSignUp} style={styles.signInButton}>
          <Icon name="paper-plane" size={20} color="#fff" />
          <Text style={styles.signInButtonText}>Signup Account</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSigninClicked}>
          <Text style={styles.signUpText}>Already have an account. Sign in</Text>
        </TouchableOpacity>
      </View>
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
      },
      headerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor : "red"
        backgroundColor : "#fff"
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      subtitle: {
        fontSize: 16,
        color: '#666',
      },
      formContainer: {
        flex: 2,
        justifyContent: 'center',
      },
      label: {
        fontSize: 16,
        marginBottom: 5,
      },
      input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        borderRadius: 5,
        marginBottom: 15,
        fontSize: 16,
      },
      footerContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
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
      signUpText: {
        fontSize: 14,
        color: '#007BFF',
      },
});

export default Signup;
