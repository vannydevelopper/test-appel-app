import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from './src/store'
import AppContainer from './src/AppContainer';

export default function App() {
  return (
    <>
     <StatusBar style="auto" />
      <Provider store={store}>
          <AppContainer/>
      </Provider></>
     
  );
}

