import {
  Button,
  View,
  SafeAreaView,
} from 'react-native';
import { Divider } from '@rneui/themed';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Camera from './CameraPage';


const Signup = ({ navigation }) => {
    return (  
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button 
           onPress={ () => navigation.navigate('CameraPage')}
           title="Learn More"
           color="#841584"
           accessibilityLabel="Learn more about this purple button"
          />
          <Divider/>
        </View>
      );
    }

export default Signup
