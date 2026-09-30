import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🛍️</Text>
      <Text style={styles.title}>Simple Store</Text>
      <Text style={styles.subtitle}>
        Find your favorite products here.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Products')}
      >
        <Text style={styles.buttonText}>View Products</Text>
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
    padding: 20
  },
  icon: {
    fontSize: 65,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#263B70',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 15,
    color: '#777',
    marginTop: 10,
    marginBottom: 25
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

