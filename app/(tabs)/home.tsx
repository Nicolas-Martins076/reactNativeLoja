import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Categories from '../../components/Categories';
import { RootStackParamList } from '../(tabs)/types';
import { useCart } from '../(tabs)/cartContext';  // Importa o contexto do carrinho

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'home'>;

const products = [
  { id: 1, name: 'Camiseta Azul ****', image: require('../../assets/images/produtos/camiseta2.png'), price: 129.90 },
  { id: 2, name: 'Camiseta Azul ****', image: require('../../assets/images/produtos/camiseta5.png'), price: 129.90 },
  { id: 3, name: 'Camiseta Azul ****', image: require('../../assets/images/produtos/leg3.png'), price: 129.90 },
  { id: 4, name: 'Camiseta Azul ****', image: require('../../assets/images/produtos/leg4.png'), price: 129.90 },
  { id: 5, name: 'Camiseta Azul ****', image: require('../../assets/images/produtos/regata4.png'), price: 129.90 },
  { id: 6, name: 'Camiseta Azul ****', image: require('../../assets/images/produtos/regata5.png'), price: 129.90 },
  { id: 7, name: 'Camiseta Azul ****', image: require('../../assets/images/produtos/top5.png'), price: 129.90 },
  { id: 8, name: 'Camiseta Azul ****', image: require('../../assets/images/produtos/top2.png'), price: 129.90 },
];

const Home: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();
  const { addToCart } = useCart(); // Usa o contexto do carrinho
  const [showMessage, setShowMessage] = useState<boolean>(false); // Estado para mostrar a mensagem

  // Função para adicionar ao carrinho
  const handleAddToCart = (product: { id: number; name: string; price: number; image: any }) => {
    addToCart({ ...product, quantity: 1 }); // Adiciona o produto ao contexto
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={require('../../assets/images/banner.jpeg')} style={styles.logo} />
      <Categories />

      {showMessage && (
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>Item adicionado ao carrinho!</Text>
        </View>
      )}

      <View style={styles.productListContainer}>
        {products.map((product) => (
          <View key={product.id} style={styles.productItem}>
            <ImageBackground source={product.image} style={styles.productImage} />
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>R$ {product.price.toFixed(2)}</Text>
            <TouchableOpacity
              style={styles.addToCartButton}
              onPress={() => handleAddToCart(product)}
            >
              <Text style={styles.addToCartText}>Adicionar ao carrinho</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c6c6c6',
    padding: 10,
  },
  productListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productItem: {
    width: '48%',
    paddingBottom: 16,
  },
  productImage: {
    width: '100%',
    aspectRatio: 0.75,
    backgroundColor: 'gray',
    borderRadius: 16,
  },
  productName: {
    color: '#200916',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 8,
  },
  productPrice: {
    color: '#000000',
    fontSize: 14,
  },
  addToCartButton: {
    backgroundColor: '#5dc1b9',
    paddingVertical: 8,
    borderRadius: 9999,
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartText: {
    color: 'white',
    fontSize: 12,
  },
  messageContainer: {
    backgroundColor: '#5dc1b9',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  messageText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  logo: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 16,
    alignSelf: 'center',
  },
});

export default Home;
