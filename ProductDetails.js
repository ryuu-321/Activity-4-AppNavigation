import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet
} from 'react-native';

export default function ProductDetails({ navigation, route }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>📦</Text>

      <Text style={styles.name}>{product.name}</Text>

      <Text style={styles.price}>₱{product.price}</Text>

      <Text style={styles.description}>
        {product.description}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>← Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F5FA',
    padding: 25
  },
  icon: {
    fontSize: 75,
    marginBottom: 20
  },
  name: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#263B70'
  },
  price: {
    fontSize: 22,
    color: '#16A34A',
    marginTop: 10,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30
  },
  button: {
    backgroundColor: '#3157D5',
    padding: 15,
    borderRadius: 10,
    width: '70%',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  }
});