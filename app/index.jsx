import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function App() {
    const router = useRouter();

const handleSignin = () => {
 router.push('sign-in')
}


const handleSignup = () => {
    router.push('sign-up')
}

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Welcome to</Text>
        <Text style={styles.headerTitle}>Hunger Help</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image source={require('../assets/logos.png')} style={styles.image} />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSignin}>
          <Text style={styles.buttonText}>
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}  onPress={handleSignup}>
          <Text style={styles.buttonText}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>
          By using this app, you agree to our{' '}
          <Text style={styles.linkText}>
            Terms and Conditions
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  headerText: {
    fontSize: 18,
    color: '#6c757d',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#343a40',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    width: '80%',
    paddingVertical: 15,
    borderRadius: 8,
    backgroundColor: '#333',
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  footerContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#6c757d',
    textAlign: 'center',
  },
  linkText: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});
