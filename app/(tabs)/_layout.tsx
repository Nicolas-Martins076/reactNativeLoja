import { Tabs } from 'expo-router';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { PaperProvider } from 'react-native-paper';
import { TouchableOpacity, View } from 'react-native';
import MenuHeader from '../../components/MenuHeader';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Defina o tipo de navegação para o seu stack de navegação
type RootStackParamList = {
  home: undefined;
  favorites: undefined;
  profile: undefined;
  cart: undefined;  
};

export default function TabLayout() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <PaperProvider>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#000000',
            height: 50,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          headerStyle: {
            backgroundColor: '#000000',
            height: 45,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          },
          headerLeft: () => (
            <View style={{ paddingLeft: 10, alignItems: 'center', flexDirection: 'row', top: 10 }}>
              <MenuHeader />
            </View>
          ),
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
        }}
      >
        {/* Aba Home */}
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            tabBarLabel: '',
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="home-outline"
                size={24}
                color={focused ? 'white' : 'gray'}
              />
            ),
            headerTitleStyle: {
              fontSize: 24,
              fontWeight: 'bold',
              color: 'gray',
            },
            headerLeft: () => (
              <View style={{ paddingLeft: 10, alignItems: 'center', flexDirection: 'row', top: 10 }}>
                <MenuHeader />
              </View>
            ),
            headerRight: () => (
              <View style={{ paddingRight: 10, justifyContent: 'center', flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.navigate('cart')}>
                  <MaterialCommunityIcons name="cart-outline" size={24} color="gray" />
                </TouchableOpacity>
              </View>
            ),
          }}
        />

        {/* Aba Favoritos */}
        <Tabs.Screen
          name="favorites"
          options={{
            title: 'Favoritos',
            tabBarLabel: 'Favoritos',
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="heart-outline"
                size={24}
                color={focused ? 'white' : 'gray'}
              />
            ),
          }}
        />

        {/* Aba Perfil */}
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Perfil',
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="account-outline"
                size={24}
                color={focused ? 'white' : 'gray'}
              />
            ),
          }}
        />
      </Tabs>
    </PaperProvider>
  );
}
