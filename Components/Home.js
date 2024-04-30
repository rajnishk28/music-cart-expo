import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import axios from 'axios';
import baseUrl from './Api';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from API using Axios
    axios.get(`${baseUrl}/product/getall`)
      .then(response => {
        // Set products state with fetched data
        setProducts(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      {products.map(product => (
        <View key={product.id} style={styles.productContainer}>
          <Image
            source={{ uri: product.image }} // Assuming product object has image field
            style={styles.image}
          />
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>Price: {product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      ))}
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  productContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
  },
});
