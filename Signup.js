import {
  Button,
  View,
  SafeAreaView,
} from 'react-native';
import { Divider } from '@rneui/themed';
//import camera from camera;

function Signup() {
    return (  
    <SafeAreaView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button 
           onPress={print("hello")}
           title="Learn More"
           color="#841584"
           accessibilityLabel="Learn more about this purple button"
          />
          <Divider/>
        </View>
        </SafeAreaView>
      );
    }

export default Signup
