/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
// cores usadas  #eef2f9 #4682b4
// Desenvolvedor Mobile Mairton Rodrigues
// Ferramentas usadas Lotties e Neumorphismo

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
import Feed from '../components/Feed'; // props para componetização de noticiais

export default class Inicio extends Component {
  InfoApp = () => {
    this.props.navigation.navigate('InfoApp');
  };
  Dicas = () => {
    this.props.navigation.navigate('Dicas');
  };

  Servicos = () => {
    this.props.navigation.navigate('Servicos');
  };
  Conheca = () => {
    this.props.navigation.navigate('Conheca');
  };
  Sobre = () => {
    this.props.navigation.navigate('Sobre');
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Image
                source={require('../images/logo.png')}
                style={{
                  resizeMode: 'contain',
                  height: 40,
                  width: 40,
                }}
              />
              <Text style={styles.title}> Guia idoso </Text>
            </View>

            <NeuButton
              color="#eef2f9"
              width={40}
              height={40}
              borderRadius={16}
              isConvex
              onPress={this.Sobre}
              style={{}}>
              <Icon name="help" type="material" size={30} color="#4682b4" />
            </NeuButton>
          </View>
          <View scrollEventThrottle={15}>
            <View>
              <Text
                style={{
                  fontSize: 16,

                  color: '#4682b4',
                  paddingHorizontal: 10,
                }}>
                Acompanhe
              </Text>
              <View style={{height: 150, marginTop: 10}}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <Feed
                    imageUri={require('../images/campanha.jpg')}
                    name="Veja a cartilha de campanha do Ministério da Saúde "
                    onPress={() =>
                      Linking.openURL('https://coronavirus.saude.gov.br/')
                    }
                  />
                  <Feed
                    imageUri={require('../images/camara.jpg')}
                    name="Comissão externa quer criar protocolo para idosos "
                    onPress={() =>
                      Linking.openURL(
                        'https://www.camara.leg.br/noticias/652114-comissao-externa-quer-construir-protocolo-para-atendimento-de-idosos-em-asilos-com-covid-19/',
                      )
                    }
                  />

                  <Feed
                    imageUri={require('../images/rotina.jpg')}
                    name="Como manter a a saúde dos idosos durante a pandemia "
                    onPress={() =>
                      Linking.openURL(
                        'https://oglobo.globo.com/sociedade/coronavirus-servico/rotina-dos-idosos-dos-remedios-aos-exercicios-como-manter-saude-durante-pandemia-de-coronavirus-24342699',
                      )
                    }
                  />
                  <Feed
                    imageUri={require('../images/informativo.png')}
                    name="Saiba quais noticias falsas para prevenir seu idoso"
                    onPress={() =>
                      Linking.openURL(
                        'https://www.saude.gov.br/component/tags/tag/novo-coronavirus-fake-news',
                      )
                    }
                  />
                  <Feed
                    imageUri={require('../images/family.jpg')}
                    name="Exercicio para idosos, melhore a saude fisica"
                    onPress={() =>
                      Linking.openURL(
                        'https://www.youtube.com/watch?v=xcM3aaBl-8U',
                      )
                    }
                  />
                  <Feed
                    imageUri={require('../images/radio.jpg')}
                    name="Radio para escutar com seu idoso, escolha sua lista"
                    onPress={() =>
                      Linking.openURL('https://vagalume.fm/classic-rb/')
                    }
                  />

                  {/* // https://www.youtube.com/watch?v=xcM3aaBl-8U */}
                </ScrollView>
              </View>
            </View>
          </View>

          <View style={styles.body}>
            <NeuView color="#eef2f9" height={250} width={150} borderRadius={16}>
              <LottieView
                resizeMode="contain"
                autoSize
                autoPlay
                loop
                style={{height: 100, width: 100}}
                source={require('../images/15256-caring-family.json')}
              />
              <Text style={styles.text}>
                Guia ilustrativo de prevenção contra o coronavirus
              </Text>
              <NeuButton
                color="#eef2f9"
                width={100}
                height={40}
                borderRadius={10}
                onPress={this.Dicas}
                style={{}}>
                <Text style={styles.text}>Saiba aqui</Text>
              </NeuButton>
            </NeuView>

            <NeuView color="#eef2f9" height={250} width={150} borderRadius={16}>
              <LottieView
                resizeMode="contain"
                autoSize
                autoPlay
                loop
                style={{height: 100, width: 100}}
                source={require('../images/19169-user-testing.json')}
              />
              <Text style={styles.text}>
                Links seguros das suas redes sociais e ferramentas principais
              </Text>
              <NeuButton
                color="#eef2f9"
                width={100}
                height={40}
                onPress={this.Servicos}
                borderRadius={10}>
                <Text style={styles.text}>Saiba aqui</Text>
              </NeuButton>
            </NeuView>
          </View>
          <View style={styles.body}>
            {/* Buttons e Animações */}
            <NeuView color="#eef2f9" height={250} width={150} borderRadius={16}>
              <LottieView
                resizeMode="contain"
                autoSize
                autoPlay
                loop
                style={{height: 100, width: 100}}
                source={require('../images/18710-messaging.json')}
              />
              <Text style={styles.text}>
                Conheça aplicativos para idosos durante a quarentena
              </Text>
              <NeuButton
                color="#eef2f9"
                width={100}
                height={40}
                borderRadius={10}
                style={{}}
                onPress={this.InfoApp}>
                <Text style={styles.text}>Saiba aqui</Text>
              </NeuButton>
            </NeuView>

            <NeuView color="#eef2f9" height={250} width={150} borderRadius={16}>
              <LottieView
                resizeMode="contain"
                autoSize
                autoPlay
                loop
                style={{height: 100, width: 100}}
                source={require('../images/15193-como-funciona-01.json')}
              />
              <Text style={styles.text}>
                Ajude e Conheça asilos que precisam de doação em Belém
              </Text>
              <NeuButton
                color="#eef2f9"
                width={100}
                height={40}
                borderRadius={10}
                onPress={this.Conheca}
                style={{}}>
                <Text style={styles.text}>Saiba aqui</Text>
              </NeuButton>
            </NeuView>
          </View>
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
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10,
  },
  header: {
    justifyContent: 'space-between',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
  },
  text: {
    textAlign: 'center',
    color: '#4682b4',
    margin: 10,
    fontSize: 14,
    flexWrap: 'wrap',
  },
});
