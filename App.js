import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import Navigation from './app/component/navigation';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducers'
import { Store } from './store';

const store = createStore(reducer);

export default function App() {
  return (
  <Provider store={Store}>
    <NavigationContainer style={styles.color}>
      <SafeAreaView style= {styles.root}>
        <Navigation/>
      </SafeAreaView>
    </NavigationContainer>
  </Provider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  color: {
  },
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
