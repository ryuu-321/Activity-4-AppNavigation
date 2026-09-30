import React from 'react';
import {
  View, Text, TouchableOpacity,
  FlatList, StyleSheet
} from 'react-native';

const products = [
  {
    id: '1',
    name: 'Headphones',
    price: 599,
    description: 'Comfortable headphones for music and study.'
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 1299,
    description: 'A smart watch for everyday use.'
  },
  {
    id: '3',
    name: 'Backpack',
    price: 799,
    description: 'A useful backpack for school and travel.'
  }
];

export default function ProductList({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Our Products</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate('Details', { product: item })
            }
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>₱{item.price}</Text>
            <Text style={styles.link}>View Details →</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F5FA',
    padding: 20
  },
  heading: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#263B70',
    marginBottom: 15
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3
  },
  name: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#263B70'
  },
  price: {
    fontSize: 17,
    color: '#16A34A',
    marginTop: 8
  },
  link: {
    color: '#3157D5',
    marginTop: 10,
    fontWeight: 'bold'
  }
});