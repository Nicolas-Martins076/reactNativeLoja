import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import  { useNavigation } from '@react-navigation/native';

import Roupas from '../../components/Roupas/index.jsx';


export default function Home() {
 const navigation = useNavigation();

 return (
   <View style={styles.container}>
       <View style={styles.header}>
         <Image
          source={require('../../assets/images/banner.png')}
          style={styles.image}
         />

         <View style={styles.textContainer}>
            <Text style={styles.text}>Roupas</Text>
            <Text style={[styles.text, { color: '#CECECF'} ]}>•</Text>
            <Text style={[styles.text, { color: '#CECECF'} ]}>MASCULINO</Text>
            <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
              <MaterialIcons
                name="filter-list"
                size={24}
                color="#000"
              />
            </TouchableOpacity>
         </View>
       </View>

      <View style={styles.line} />

      <ScrollView>
        <Text style={styles.text}>LANÇAMENTOS</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Roupas img={require('../../assets/images/1.png')} cost="R$140,90" onClick={()=> navigation.navigate('Detail') }>
          Kit 4 Camisas Dry-fit Sandrini Masculina Academia
          </Roupas>
          <Roupas img={require('../../assets/images/2.png')} cost="R$180,90" onClick={()=> navigation.navigate('Detail') }>
          Kit 3 Camisetas Dry Fit Feminina Academia Treino Corrida Proteção 
          </Roupas>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Roupas img={require('../../assets/images/3.png')} cost="R$60,90" onClick={()=> alert('CLICOU')}>
           Kit 3 Shorts Masculino Básico
          </Roupas>
          <Roupas img={require('../../assets/images/4.png')} cost="R$220" onClick={()=> alert('CLICOU')}>
          Nike Epic React Flyknit 2
          </Roupas>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Roupas img={require('../../assets/images/5.png')} cost="R$120,90" onClick={()=> alert('CLICOU')}>
            Nike Joyride Run Flyknit
          </Roupas>
          <Roupas img={require('../../assets/images/6.png')} cost="R$920" onClick={()=> alert('CLICOU')}>
            Nike Air Max Dia Sujeito Programador
          </Roupas>
        </View>

      </ScrollView>

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  header:{
    marginBottom: 8
  },
  image:{
    width: '100%'
  },
  textContainer:{
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  text:{
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%'
  },
  line:{
    borderBottomColor: '#D8d8d8',
    borderBottomWidth: 2,
  }
});