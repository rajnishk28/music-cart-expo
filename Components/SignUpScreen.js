import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = () => {
    setLoading(true);
    setTimeout(() => {
      console.log("clicked signup");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Mobile:", mobile);
      console.log("Password:", password);
      setLoading(false);
    }, 2000);
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignUp</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        onChangeText={setMobile}
        value={mobile}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>{loading ? "loading" : "Signup"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

    </View>
  );

}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#ffffff"
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "#000000"
  },
  input: {
    width: 300,
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'blue',
    width: 150,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
