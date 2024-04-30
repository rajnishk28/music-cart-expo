import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const[loading,SetLoading]=useState(false);

  const handleLogin = () => {
    SetLoading(true);
    setTimeout(() => {
        console.log("wait for 2 second");
        console.log("Username:", username);
        console.log("Password:", password);
        SetLoading(false);
      }, 2000);
      navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />
     
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>{loading?"loading":"Login"}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('SignUp')}>
        <Text style={styles.buttonText}>SignUp</Text>
      </TouchableOpacity>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color:"#ffffff"
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
    width:150,
    padding: 10,
    borderRadius: 5,
    marginTop:20
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default LoginScreen;
