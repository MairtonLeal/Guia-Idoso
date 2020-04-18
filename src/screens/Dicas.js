/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import {NeuView} from 'react-native-neu-element'; // Conceito Neumorphismo
import LottieView from 'lottie-react-native'; // Animações com Affeteraffects em LottiesFiles

export default class Dicas extends Component {
  render() {
    return (
      <ScrollView>
        <View styles={styles.container}>
          <Text style={styles.title}>Guia ilustrativo</Text>
          <Text style={styles.text}>Como lavar as mãos?</Text>
          <Image
            style={{
              resizeMode: 'stretch',
              height: Dimensions.get('window').width * 0.9,
              width: Dimensions.get('window').width * 0.9,
              alignSelf: 'center',
              margin: 10,
            }}
            source={require('../images/infografico.jpg')}
          />
          <NeuView
            color="#eef2f9"
            height={Dimensions.get('window').height * 0.15}
            width={Dimensions.get('window').width * 0.95}
            borderRadius={16}
            style={{alignSelf: 'center', margin: 10}}>
            <Text style={styles.descricao}>
              Siga os passos para você e seu idoso e lave as mãos de maneira
              correta e proteja-se
            </Text>
          </NeuView>
          <Text style={styles.text}> Utilize sempre mascaras</Text>
          <LottieView
            resizeMode="contain"
            autoSize
            autoPlay
            loop
            style={{
              height: Dimensions.get('window').height * 0.4,
              width: Dimensions.get('window').width * 0.4,
              alignSelf: 'center',
            }}
            source={require('../images/17895-wear-mask.json')}
          />
          <NeuView
            color="#eef2f9"
            height={Dimensions.get('window').height * 0.15}
            width={Dimensions.get('window').width * 0.95}
            borderRadius={16}
            style={{alignSelf: 'center', margin: 10}}>
            <Text style={styles.descricao}>
              Além da higienização de lavar as mãos, coloque mascaras seja com
              seu idoso ou qualquer pessoa
            </Text>
          </NeuView>
          <Text style={styles.text}> Mantenha Distancia</Text>
          <LottieView
            resizeMode="contain"
            autoSize
            autoPlay
            loop
            style={{
              height: Dimensions.get('window').height * 0.4,
              width: Dimensions.get('window').width * 0.4,
              alignSelf: 'center',
            }}
            source={require('../images/19070-keep-distance-coronavirus.json')}
          />
          <NeuView
            color="#eef2f9"
            height={Dimensions.get('window').height * 0.15}
            width={Dimensions.get('window').width * 0.95}
            borderRadius={16}
            style={{alignSelf: 'center', margin: 10}}>
            <Text style={styles.descricao}>
              Caso precise sair com seu idoso, busque distancia dos demais, seja
              entre 2 a 3 metros pelo recomendado.
            </Text>
          </NeuView>
          <Text style={styles.text}> Faça Exercicios</Text>
          <LottieView
            resizeMode="contain"
            autoSize
            autoPlay
            loop
            style={{
              height: Dimensions.get('window').height * 0.4,
              width: Dimensions.get('window').width * 0.4,
              alignSelf: 'center',
            }}
            source={require('../images/18558-chinup-animation.json')}
          />
          <NeuView
            color="#eef2f9"
            height={Dimensions.get('window').height * 0.15}
            width={Dimensions.get('window').width * 0.95}
            borderRadius={16}
            style={{alignSelf: 'center', margin: 10}}>
            <Text style={styles.descricao}>
              Faça exercicios com seu idosos em casa com pouco esforço mas que
              mantenha-se longe de maus habitos, e pratique !
            </Text>
          </NeuView>

          <Text style={styles.text}>Contate parentes em videochamada</Text>
          <LottieView
            resizeMode="contain"
            autoSize
            autoPlay
            loop
            style={{
              height: Dimensions.get('window').height * 0.4,
              width: Dimensions.get('window').width * 0.4,
              alignSelf: 'center',
            }}
            source={require('../images/18583-video-call.json')}
          />

          <NeuView
            color="#eef2f9"
            height={Dimensions.get('window').height * 0.15}
            width={Dimensions.get('window').width * 0.95}
            borderRadius={16}
            style={{alignSelf: 'center', margin: 10}}>
            <Text style={styles.descricao}>
              Realize conversa e interação para seus idosos com video chamadas,
              converse de forma segura e mais interativa
            </Text>
          </NeuView>
        </View>
      </ScrollView>
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
    padding: 10,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10,
  },

  text: {
    textAlign: 'left',
    color: '#4682b4',
    margin: 10,
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  descricao: {
    textAlign: 'left',
    color: '#4682b4',
    fontSize: 14,
    margin: 10,
    flexWrap: 'wrap',
  },
});
