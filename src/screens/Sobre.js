/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Linking,
  Image,
  Dimensions,
} from 'react-native';
import LottieView from 'lottie-react-native'; // Animações com Affeteraffects em LottiesFiles
import {NeuView, NeuButton} from 'react-native-neu-element'; // Conceito Neumorphismo
import {Icon} from 'react-native-elements'; // icon para opções

export default class Sobre extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.version}>Versão 1.0.0</Text>
        <Image
          source={require('../images/logo.png')}
          style={{
            resizeMode: 'contain',
            height: 40,
            width: 40,
            alignSelf: 'center',
            margin: 10,
          }}
        />
        <Text style={styles.title}>Sobre o Guia do idoso</Text>

        <Text style={styles.text}>
          Este é um aplicativo que guia responsáveis e idosos a canais de
          informação principais e de orientação durante o COVID-19.
        </Text>

        <LottieView
          resizeMode="contain"
          autoSize
          autoPlay
          loop
          style={{height: 100, width: 100, alignSelf: 'center'}}
          source={require('../images/14916-prueba-doctores-freepik.json')}
        />

        <Text style={styles.text}>
          Agradeço à todos os profissionais da saúde que estão todo o dia contra
          o coronavirus e estão ajudando pessoas e os grupos de risco, meus
          sinceros obrigados à estes heróis.
        </Text>
        <NeuButton
          color="#eef2f9"
          width={80}
          height={50}
          borderRadius={10}
          onPress={() =>
            Linking.openURL(
              'https://www.linkedin.com/in/mairton-leal-5558b8b4/',
            )
          }
          style={{alignSelf: 'center', margin: 10}}>
          <Icon name="logo-linkedin" type="ionicon" size={30} color="#4682b4" />
          <Text style={styles.textbtn}>Meu perfil</Text>
        </NeuButton>

        <Text style={styles.text}>
          Desenvolvido por Mairton Rodrigues, Formado em Ciência da Computação e
          CEO at Sollow.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2f9',
    justifyContent: 'center',

    //  alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    color: '#4682b4',
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
  },

  text: {
    textAlign: 'center',
    color: '#4682b4',
    fontSize: 15,
    padding: 10,
  },
  textbtn: {
    textAlign: 'center',
    color: '#4682b4',
    fontSize: 13,
    flexWrap: 'wrap',
  },
  version: {
    textAlign: 'right',
    color: '#4682b4',
    fontSize: 13,
    margin: 10,
  },
});
