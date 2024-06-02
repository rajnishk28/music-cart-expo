import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Home from "../Components/Home"
import Cart from "../Components/Cart"
import Invoice from "../Components/Invoice"
import Login from "../Components/LoginScreen"
const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (

    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home}

        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={{ uri: 'https://static.thenounproject.com/png/4992186-200.png' }}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen name="cart" component={Cart}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2d9TvOnmJwypIZmYkcSNyV_f508Z_Kxp-NQ&s" }}
              style={{ width: size, height: size }} />
          ),

        }}

      />
      <Tab.Screen name="Invoice" component={Invoice}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={{ uri: 'https://i.pinimg.com/564x/8e/67/13/8e6713eef995384e33ac2d346870021d.jpg' }}
              style={{ width: size, height: size }} />
          ),

        }}
      />

      <Tab.Screen name="Login" component={Login}
        options={{

          tabBarIcon: ({ color, size }) => (
            <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeMKm3zn9w13Y2T5PbmNvCdjxpMZQtDA_mV-qLuLdU6w&s" }}
              style={{ width: size, height: size }} />
          ),
          title: "Login"

        }}
      />

    </Tab.Navigator>



  )
}

export default Navigation

