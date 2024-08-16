import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image , TouchableOpacity} from 'react-native';
import { Link } from 'expo-router';
export default function App() {
    return (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Donation App</Text>
          </View>
          <View style={styles.imageContainer}>
          <Image source={require("../assets/icon.png")} style={styles.image} />
          </View>
          <View style={styles.buttonContainer}>
        <Link href={"sign-in"} style={styles.buttonWrapper}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </View>
        </Link>
      </View>
          <View style={styles.signupTextContainer}>
            <Text style={styles.signupText}>Don't have an account? <Link href={"sign-up"} style={styles.linkstyle}>Sign Up now!</Link></Text>
          </View>
          
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 20,
      },
      titleContainer: {
        flex: 1,
        justifyContent: 'center',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      imageContainer: {
        flex: 3,
        justifyContent: 'center',
      },
      buttonContainer: {
        marginTop: 10,
      },
      buttonWrapper: {
        width: '100%',
      },
      button: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',

      },
      buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
      },
      signupTextContainer: {
        marginTop: 20,
      },
      signupText: {
        fontSize: 14,
        color: '#888',
      },
      linkstyle : {
        color : "blue"
      }
    });
    