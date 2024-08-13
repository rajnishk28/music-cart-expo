import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, Button, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import baseUrl from './Api';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/product/getall`)
      .then(response => {
        setProducts(response.data.products);
        setFilteredProducts(response.data.products);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, products]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBox}
        placeholder="Search products..."
        value={search}
        onChangeText={setSearch}
      />

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.productsContainer}>
          {filteredProducts.map((ele) => (
            <View key={ele._id} style={styles.productContainer}>
              <Image
                source={{ uri: ele.imageUrl }}
                style={styles.image}
              />
              <Text style={styles.name}>{ele.name}</Text>
              <Text style={styles.description}>{ele.color}</Text>
              <Text style={styles.price}>${ele.price}</Text>

              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => alert('Product added to cart')}>
                  <Text style={styles.buttonText}>Add To Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => alert('Product added to cart')}>
                  <Text style={styles.buttonText}>Buy Now</Text>
                </TouchableOpacity>
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
    backgroundColor: '#f0f0f0',
    padding: 15,
  },
  searchBox: {
    marginTop: 50,
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 30,
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productContainer: {
    width: (windowWidth / 2) - 25, // Adjusted for better spacing
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
    marginBottom: 15,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
    color: '#333',
    textAlign: 'center',
  },
  price: {
    fontSize: 16,
    marginBottom: 10,
    color: '#E91E63',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 15,
    color: '#777',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    backgroundColor: '#841584',
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});
