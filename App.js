import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import Signup from './Signup';
import { Divider } from '@rneui/themed';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ScreenStackHeaderCenterView } from 'react-native-screens';
import CameraPage from './CameraPage';

const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName={'Signup'}>
      <Stack.Screen name = "Signup" component={Signup} />
      <Stack.Screen name = "CameraPage" component={CameraPage} />
    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
