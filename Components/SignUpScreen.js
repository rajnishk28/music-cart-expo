import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import baseUrl from "./Api"

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [fullName, setfullName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setcontactNumber] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSignup = async() => {
    setLoading(true);
    await axios.post(`${baseUrl}/user/signup`, {fullName, email,contactNumber, password}).then((res) => {
      // console.log(res.data);
      setLoading(false);
      if (res.status === 200) {
        alert("Signup Successfull")
        navigation.navigate('Login');
      };
    }).catch((err) => {
      console.log(err.response.data);
      setLoading(false);
      setMessage(err.response.data.message);
    })
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignUp</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={setfullName}
        value={fullName}
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
        onChangeText={setcontactNumber}
        value={contactNumber}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />
      {message ? <Text style={{ color: 'red' }}>{message}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>{loading ? "Loading" : "Signup"}</Text>
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
