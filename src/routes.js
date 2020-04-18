/* eslint-disable prettier/prettier */
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Inicio from './screens/Inicio';
import InfoApp from './screens/InfoApp';
import Dicas from './screens/Dicas';
import Conheca from './screens/Conheca';
import Servicos from './screens/Servicos';
import Sobre from './screens/Sobre';
import Splash from './screens/Splash';
var routerStack = createStackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: {
        headerShown: false,
      },
    },
    Inicio: {
      screen: Inicio,
      navigationOptions: {
        headerShown: false,
      },
    },
    InfoApp: {
      screen: InfoApp,
      navigationOptions: {
        headerTitle: '',
      },
    },
    Dicas: {
      screen: Dicas,
      navigationOptions: {
        headerTitle: '',
      },
    },
    Conheca: {
      screen: Conheca,
      navigationOptions: {
        headerTitle: '',
      },
    },
    Servicos: {
      screen: Servicos,
      navigationOptions: {
        headerTitle: '',
      },
    },
    Sobre: {
      screen: Sobre,
      navigationOptions: {
        headerTitle: '',
      },
    },
  },
  {
    initialRouteName: 'Splash',
    defaultNavigationOptions: {
      headerTransparent: true,
      headerTintColor: '#4682b4',
    },
  },
);

export default createAppContainer(routerStack);
