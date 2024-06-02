import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Invoice = () => {
  return (
    <View style={styles.container}>
      <Text >Invoice</Text>
    </View>
  )
}

export default Invoice

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height:"100%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  }
})