/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Linking,
  Dimensions,
} from 'react-native';
import {NeuButton, NeuView} from 'react-native-neu-element'; // Conceito Neumorphismo
import {Icon} from 'react-native-elements'; // icon para opções
export default class Conheca extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>Ajude asilos</Text>

          <NeuButton
            color="#eef2f9"
            width={130}
            height={50}
            borderRadius={10}
            onPress={() =>
              Linking.openURL(
                ' https://g1.globo.com/pa/para/noticia/2020/04/04/abrigos-de-belem-que-cuidam-de-idosos-precisam-de-ajuda-durante-pandemia-do-coronavirus.ghtml',
              )
            }
            style={{margin: 5, alignSelf: 'center'}}>
            <Icon name="web" type="material" size={20} color="#4682b4" />
            <Text style={styles.textbtn}>matéria jornalistica</Text>
          </NeuButton>
          <Text style={styles.text}>
            Doe e contribua no que puder nos locais presentes em belém. Entre em
            contato nos telefones abaixo
          </Text>
          <NeuView
            width={Dimensions.get('window').width * 0.8}
            height={150}
            color={'#eef2f9'}
            borderWidth={10}
            borderRadius={16}
            style={{alignSelf: 'center', margin: 10}}>
            <Text style={styles.cardTitle}>Abrigo da Missão Belém</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <NeuButton
                color="#eef2f9"
                width={80}
                height={50}
                borderRadius={10}
                onPress={() => Linking.openURL(`tel:${993937756}`)}
                style={{margin: 10}}>
                <Icon name="phone" type="material" size={25} color="#4682b4" />
                <Text style={styles.textbtn}>Contato 1</Text>
              </NeuButton>
              <NeuButton
                color="#eef2f9"
                width={80}
                height={50}
                borderRadius={10}
                style={{margin: 10}}
                onPress={() => Linking.openURL(`tel:${988839013}`)}>
                <Icon name="phone" type="material" size={25} color="#4682b4" />
                <Text style={styles.textbtn}>Contato 2</Text>
              </NeuButton>
            </View>
          </NeuView>

          <NeuView
            width={Dimensions.get('window').width * 0.8}
            height={150}
            color={'#eef2f9'}
            borderWidth={10}
            borderRadius={16}
            style={{alignSelf: 'center', margin: 10}}>
            <Text style={styles.cardTitle}>Abrigo São Vicente de Paula </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <NeuButton
                color="#eef2f9"
                width={80}
                height={50}
                borderRadius={10}
                onPress={() => Linking.openURL(`tel:${991141542}`)}
                style={{margin: 10}}>
                <Icon name="phone" type="material" size={25} color="#4682b4" />
                <Text style={styles.textbtn}>Contato 1</Text>
              </NeuButton>
              {/* <NeuButton
                color="#eef2f9"
                width={80}
                height={50}
                borderRadius={10}
                style={{margin: 10}}
                onPress={() => Linking.openURL(`tel:${999893945}`)}>
                <Icon name="phone" type="material" size={25} color="#4682b4" />
                <Text style={styles.textbtn}>Contato 2</Text>
              </NeuButton> */}
            </View>
          </NeuView>
          <NeuView
            width={Dimensions.get('window').width * 0.8}
            height={150}
            color={'#eef2f9'}
            borderWidth={10}
            borderRadius={16}
            style={{alignSelf: 'center', margin: 10}}>
            <Text style={styles.cardTitle}> Abrigo Pão de Santo Antônio.</Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <NeuButton
                color="#eef2f9"
                width={80}
                height={50}
                borderRadius={10}
                onPress={() => Linking.openURL(`tel:${32490069}`)}
                style={{margin: 10}}>
                <Icon name="phone" type="material" size={25} color="#4682b4" />
                <Text style={styles.textbtn}>Contato 1</Text>
              </NeuButton>
              {/* <NeuButton
                color="#eef2f9"
                width={80}
                height={50}
                borderRadius={10}
                style={{margin: 10}}
                onPress={() => Linking.openURL(`tel:${999893945}`)}>
                <Icon name="phone" type="material" size={25} color="#4682b4" />
                <Text style={styles.textbtn}>Contato 2</Text>
              </NeuButton> */}
            </View>
          </NeuView>

          <NeuView
            width={Dimensions.get('window').width * 0.8}
            height={150}
            color={'#eef2f9'}
            borderWidth={10}
            borderRadius={16}
            style={{alignSelf: 'center', margin: 10}}>
            <Text style={styles.cardTitle}>Comitê Arte pela Vida </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <NeuButton
                color="#eef2f9"
                width={80}
                height={50}
                borderRadius={10}
                onPress={() => Linking.openURL(`tel:${999893945}`)}
                style={{margin: 10}}>
                <Icon name="phone" type="material" size={25} color="#4682b4" />
                <Text style={styles.textbtn}>Contato 1</Text>
              </NeuButton>
              <NeuButton
                color="#eef2f9"
                width={80}
                height={50}
                borderRadius={10}
                style={{margin: 10}}
                onPress={() => Linking.openURL(`tel:${982802188}`)}>
                <Icon name="phone" type="material" size={25} color="#4682b4" />
                <Text style={styles.textbtn}>Contato 2</Text>
              </NeuButton>
            </View>
          </NeuView>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f5',
    justifyContent: 'center',

    //  alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    color: '#4682b4',
    fontSize: 18,
    textAlign: 'right',
    margin: 10,
    marginBottom: 10,
    padding: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    color: '#4682b4',
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  },
  text: {
    textAlign: 'center',
    color: '#4682b4',
    fontSize: 16,
    padding: 20,
  },
  textbtn: {
    textAlign: 'center',
    color: '#4682b4',
    fontSize: 13,
    flexWrap: 'wrap',
  },
  descricao: {
    textAlign: 'left',
    color: '#4682b4',
    margin: 10,
    fontSize: 13,
    flexWrap: 'wrap',
  },
});
