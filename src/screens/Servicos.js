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

export default class Servicos extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>Links de Suporte </Text>
          <Text style={styles.text}>
            Veja onde e o qual problema aqui que de como orientar seus idosos no
            smartphone
          </Text>
          <NeuView
            width={Dimensions.get('window').width * 0.8}
            height={200}
            // color={'#eef2f9'}#09AFA2
            color={'#eef2f9'}
            borderWidth={10}
            borderRadius={16}
            style={{alignSelf: 'center', margin: 10}}>
            <Text style={styles.cardTitle}>Suporte do Android</Text>

            <Text style={styles.descricao}>
              Busque e saiba qual problema esta tendo em seu dispositivo
              verifique e resolva os problemas para seus idosos
            </Text>

            <NeuButton
              color="#eef2f9"
              width={80}
              height={50}
              borderRadius={10}
              onPress={() =>
                Linking.openURL(
                  'https://support.google.com/android#topic=7313011',
                )
              }
              style={{marginLeft: 150}}>
              <Icon name="android" type="material" size={20} color="#4682b4" />
              <Text style={styles.textbtn}>Saiba mais</Text>
            </NeuButton>
          </NeuView>
          <NeuView
            width={Dimensions.get('window').width * 0.8}
            height={200}
            // color={'#eef2f9'}#09AFA2
            color={'#eef2f9'}
            borderWidth={10}
            borderRadius={16}
            style={{alignSelf: 'center', margin: 10}}>
            <Text style={styles.cardTitle}>
              Como tirar fotos e Compartilhar
            </Text>

            <Text style={styles.descricao}>
              Ensine seu idoso ao bater foto e compartihar com familiares veja a
              orientação direta da google
            </Text>

            <NeuButton
              color="#eef2f9"
              width={80}
              height={50}
              borderRadius={10}
              onPress={() =>
                Linking.openURL(
                  'https://support.google.com/android/answer/9075928?hl=pt-BR',
                )
              }
              style={{marginLeft: 150}}>
              <Icon name="android" type="material" size={20} color="#4682b4" />
              <Text style={styles.textbtn}>Saiba mais</Text>
            </NeuButton>
          </NeuView>
          <NeuView
            width={Dimensions.get('window').width * 0.8}
            height={200}
            // color={'#eef2f9'}#09AFA2
            color={'#eef2f9'}
            borderWidth={10}
            borderRadius={16}
            style={{alignSelf: 'center', margin: 10}}>
            <Text style={styles.cardTitle}>Acessibilidade para idosos </Text>

            <Text style={styles.descricao}>
              Siga as orientações diretas do Android, e configure seu celular do
              modo visual e mais interativo
            </Text>

            <NeuButton
              color="#eef2f9"
              width={80}
              height={50}
              borderRadius={10}
              onPress={() =>
                Linking.openURL(
                  'https://support.google.com/accessibility/android/answer/9078941?hl=pt-BR',
                )
              }
              style={{marginLeft: 150}}>
              <Icon name="android" type="material" size={20} color="#4682b4" />
              <Text style={styles.textbtn}>Saiba mais</Text>
            </NeuButton>
          </NeuView>
          <NeuView
            width={Dimensions.get('window').width * 0.8}
            height={200}
            // color={'#eef2f9'}#09AFA2
            color={'#eef2f9'}
            borderWidth={10}
            borderRadius={16}
            style={{alignSelf: 'center', margin: 10}}>
            <Text style={styles.cardTitle}>Whatsapp Economico</Text>
            <Text style={styles.descricao}>
              Economize evitando dowload autómatico do whatsapp de fotos e
              videos que seu idoso possa baixar.
            </Text>
            <NeuButton
              color="#eef2f9"
              width={80}
              height={50}
              borderRadius={10}
              onPress={() =>
                Linking.openURL(
                  'https://faq.whatsapp.com/pt_br/android/23248698/?category=5245251',
                )
              }
              style={{marginLeft: 150}}>
              <Icon
                name="whatsapp"
                type="font-awesome"
                size={20}
                color="#4682b4"
              />
              <Text style={styles.textbtn}>Saiba aqui</Text>
            </NeuButton>
          </NeuView>
          <NeuView
            width={Dimensions.get('window').width * 0.8}
            height={200}
            // color={'#eef2f9'}#09AFA2
            color={'#eef2f9'}
            borderWidth={10}
            borderRadius={16}
            style={{alignSelf: 'center', margin: 10}}>
            <Text style={styles.cardTitle}>Whatsapp Segurança</Text>
            <Text style={styles.descricao}>
              Evite links de golpes e roubos no whatsapp seu e de seu idoso,
              utilize somente para mensagens, mas caso precise veja o FAQ
              contendo dicas e ajuda
            </Text>
            <NeuButton
              color="#eef2f9"
              width={80}
              height={50}
              borderRadius={10}
              onPress={() =>
                Linking.openURL('https://faq.whatsapp.com/26000216?lang=pt_br')
              }
              style={{marginLeft: 150}}>
              <Icon
                name="whatsapp"
                type="font-awesome"
                size={20}
                color="#4682b4"
              />
              <Text style={styles.textbtn}>Saiba aqui</Text>
            </NeuButton>
          </NeuView>
          <NeuView
            width={Dimensions.get('window').width * 0.8}
            height={200}
            // color={'#eef2f9'}#09AFA2
            color={'#eef2f9'}
            borderWidth={10}
            borderRadius={16}
            style={{alignSelf: 'center', margin: 10}}>
            <Text style={styles.cardTitle}>Suporte do Youtube</Text>
            <Text style={styles.descricao}>
              Precisa de ajuda com seus videos no youtube ? veja aqui o suporte
              e como corrigir.
            </Text>
            <NeuButton
              color="#eef2f9"
              width={80}
              height={50}
              borderRadius={10}
              onPress={() =>
                Linking.openURL(
                  'https://support.google.com/youtube/?hl=pt-BR#topic=9257498',
                )
              }
              style={{marginLeft: 150}}>
              <Icon
                name="youtube"
                type="font-awesome"
                size={20}
                color="#4682b4"
              />
              <Text style={styles.textbtn}>Saiba aqui</Text>
            </NeuButton>
          </NeuView>
          <NeuView
            width={Dimensions.get('window').width * 0.8}
            height={200}
            // color={'#eef2f9'}#09AFA2
            color={'#eef2f9'}
            borderWidth={10}
            borderRadius={16}
            style={{alignSelf: 'center', margin: 10}}>
            <Text style={styles.cardTitle}>Suporte do Facebook</Text>
            <Text style={styles.descricao}>
              Precisa de ajuda com seu facebook, priacidade e segurança sua e do
              seu idoso nesta rede conte com o suporte direto.
            </Text>
            <NeuButton
              color="#eef2f9"
              width={80}
              height={50}
              borderRadius={10}
              onPress={() =>
                Linking.openURL(
                  'https://support.google.com/youtube/?hl=pt-BR#topic=9257498',
                )
              }
              style={{marginLeft: 150}}>
              <Icon
                name="youtube"
                type="font-awesome"
                size={20}
                color="#4682b4"
              />
              <Text style={styles.textbtn}>Saiba aqui</Text>
            </NeuButton>
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
    fontSize: 18,
    alignSelf: 'center',
  },
  text: {
    textAlign: 'left',
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
    fontSize: 16,
    flexWrap: 'wrap',
  },
});
