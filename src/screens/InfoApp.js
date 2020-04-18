/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Linking,
  Dimensions,
} from 'react-native';
import {NeuButton, NeuBorderView} from 'react-native-neu-element'; // Conceito Neumorphismo
import {Icon} from 'react-native-elements'; // icon para opções

export default class InfoApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>Baixe para seu idoso</Text>
          <Text style={styles.text}>
            Selecionamos alguns aplicativos que ajudem você com seu idoso
            durante a quarentena
          </Text>

          <NeuBorderView
            width={Dimensions.get('window').width * 0.8}
            height={Dimensions.get('window').width * 0.5}
            color={'#eef2f9'}
            borderWidth={10}
            borderRadius={16}
            style={{alignSelf: 'center', margin: 10}}>
            <Text style={styles.cardTitle}>Estatuto do Idoso</Text>
            <Text style={styles.descricao}>
              Saiba os direitos dos seus idosos, entenda os direitos dos idoso a
              partir dos 60 anos.
            </Text>
            <NeuButton
              color="#eef2f9"
              width={80}
              height={50}
              borderRadius={10}
              style={{marginLeft: 150}}
              onPress={() =>
                Linking.openURL(
                  'https://play.google.com/store/apps/details?id=com.estatutodoidoso.app',
                )
              }>
              <Icon name="shop" type="material" size={25} color="#4682b4" />
              <Text style={styles.textbtn}>Baixar</Text>
            </NeuButton>
          </NeuBorderView>
          <NeuBorderView
            width={Dimensions.get('window').width * 0.8}
            height={Dimensions.get('window').width * 0.5}
            color={'#eef2f9'}
            borderWidth={10}
            borderRadius={16}
            style={{alignSelf: 'center', margin: 10}}>
            <Text style={styles.cardTitle}>Psicologia Para</Text>
            <Text style={styles.descricao}>
              Serviço de psicologia gratuito, disponivel em plataforma digital
              sem sair de casa
            </Text>
            <NeuButton
              color="#eef2f9"
              width={80}
              height={50}
              borderRadius={10}
              style={{marginLeft: 150}}
              onPress={() => Linking.openURL('http://psicologiapara.net.br/')}>
              <Icon name="shop" type="material" size={25} color="#4682b4" />
              <Text style={styles.textbtn}>Baixar</Text>
            </NeuButton>
          </NeuBorderView>
          <NeuBorderView
            width={Dimensions.get('window').width * 0.8}
            height={Dimensions.get('window').width * 0.5}
            color={'#eef2f9'}
            borderWidth={10}
            borderRadius={16}
            style={{alignSelf: 'center', margin: 10}}>
            <Text style={styles.cardTitle}>Super </Text>
            <Text style={styles.descricao}>
              Precisa de delivery para suas compras em belém ? vá de super, o
              super mercado do futuro
            </Text>
            <NeuButton
              color="#eef2f9"
              width={80}
              height={50}
              borderRadius={10}
              style={{marginLeft: 150}}
              onPress={() =>
                Linking.openURL(
                  'https://play.google.com/store/apps/details?id=br.com.appsuper.appsuper',
                )
              }>
              <Icon name="shop" type="material" size={25} color="#4682b4" />
              <Text style={styles.textbtn}>Baixar</Text>
            </NeuButton>
          </NeuBorderView>
          <NeuBorderView
            width={Dimensions.get('window').width * 0.8}
            height={Dimensions.get('window').width * 0.5}
            color={'#eef2f9'}
            borderWidth={10}
            borderRadius={16}
            style={{alignSelf: 'center', margin: 10}}>
            <Text style={styles.cardTitle}>CQPD Facilita </Text>
            <Text style={styles.descricao}>
              Oferendo simpliciade para pessoas idosas e melhorando a utilização
              do aparelho
            </Text>
            <NeuButton
              color="#eef2f9"
              width={80}
              height={50}
              borderRadius={10}
              style={{marginLeft: 150}}
              onPress={() =>
                Linking.openURL(
                  'https://play.google.com/store/apps/details?id=br.com.cpqd.core.facilita',
                )
              }>
              <Icon name="shop" type="material" size={25} color="#4682b4" />
              <Text style={styles.textbtn}>Baixar</Text>
            </NeuButton>
          </NeuBorderView>
          <NeuBorderView
            width={Dimensions.get('window').width * 0.8}
            height={Dimensions.get('window').width * 0.5}
            color={'#eef2f9'}
            borderWidth={10}
            borderRadius={16}
            style={{alignSelf: 'center', margin: 10}}>
            <Text style={styles.cardTitle}>Pressão Arterial </Text>
            <Text style={styles.descricao}>
              Colete, analise e compartilhe sua anotação de pressão arterial na
              hora certa.
            </Text>
            <NeuButton
              color="#eef2f9"
              width={80}
              height={50}
              borderRadius={10}
              style={{marginLeft: 150}}
              onPress={() =>
                Linking.openURL(
                  'https://play.google.com/store/apps/details?id=com.boxeelab.healthlete.bpwatch',
                )
              }>
              <Icon name="shop" type="material" size={25} color="#4682b4" />
              <Text style={styles.textbtn}>Baixar</Text>
            </NeuButton>
          </NeuBorderView>

          <NeuBorderView
            width={Dimensions.get('window').width * 0.8}
            height={Dimensions.get('window').width * 0.5}
            color={'#eef2f9'}
            borderWidth={10}
            borderRadius={16}
            style={{alignSelf: 'center', margin: 10}}>
            <Text style={styles.cardTitle}>My therapy</Text>
            <Text style={styles.descricao}>
              My Therapy é um lembrete de medicamento premiado e gratuito com
              agenda de saúde.
            </Text>
            <NeuButton
              color="#eef2f9"
              width={80}
              height={50}
              borderRadius={10}
              style={{marginLeft: 150}}
              onPress={() =>
                Linking.openURL(
                  'https://play.google.com/store/apps/details?id=eu.smartpatient.mytherapy',
                )
              }>
              <Icon name="shop" type="material" size={25} color="#4682b4" />
              <Text style={styles.textbtn}>Baixar</Text>
            </NeuButton>
          </NeuBorderView>
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
  },
  text: {
    textAlign: 'center',
    color: '#4682b4',
    fontSize: 16,
    padding: 10,
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
    fontSize: 16,
    flexWrap: 'wrap',
  },
});
