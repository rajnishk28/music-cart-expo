import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, Button } from 'react-native';
import axios from 'axios';
import baseUrl from './Api';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/product/getall`)
      .then(response => {
        setProducts(response.data.products);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.productsContainer}>
          {products.map((ele) => (
            <View key={ele._id} style={styles.productContainer}>
              <Image
                source={{ uri: ele.imageUrl }}
                style={styles.image}
              />
              <Text style={styles.name}>{ele.name}</Text>
              <Text style={styles.description}>{ele.color}</Text>
              <Text style={styles.price}>Price: {ele.price}</Text>

              <View style={styles.buttonContainer}>
                <Button title='Add To Cart' color='#841584' onPress={() => alert('Product added to cart')} />
                <Button title='Buy Now' color='#841584' onPress={() => alert('Product added to cart')} />
              </View>


            </View>

          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    marginTop: 20,
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  productContainer: {
    width: (windowWidth / 2) - 20, // Each product container takes half the screen width minus some margin
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
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

  buttonContainer: {
    gap:10,
    marginTop: 10,
  },
});


