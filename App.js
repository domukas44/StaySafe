import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import HomeScreen from './app/screens/HomeScreen';
import SignInScreen from './app/screens/SignInScreen';
import SignUpScreen from './app/screens/SignUpScreen';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import Navigation from './app/component/navigation';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style= {styles.root}>
        <Navigation/>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#f9fbfc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
