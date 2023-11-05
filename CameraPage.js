import { Button, View, SafeAreaView, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Divider } from '@rneui/themed';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as MediaLibrary from 'expo-media-library';
import { useEffect, useState, useRef } from 'react';
import { Camera, CameraType } from 'expo-camera';
import * as tf from "@tensorflow/tfjs";
import { cameraWithTensors } from '@tensorflow/tfjs-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as mobilenet from '@tensorflow-models/mobilenet';

const textureDims = Platform.OS === 'ios' ?
{
  height: 1920,
  width: 1080,
} :
{
  height: 1200,
  width: 1600,
};

let frame = 0;
const computeRecognitionEveryNFrames = 60;

const TensorCamera = cameraWithTensors(Camera);

const initialiseTensorflow = async () => {
  await tf.ready();
  tf.getBackend();
}
const handleCameraStream = images => {
  // console.log('images data', images);
  const loop = async () => {
    if (net) {
      if (frame % computeRecognitionEveryNFrames === 0) {
        const nextImageTensor = images.next().value;
        if (nextImageTensor) {
          const objects = await net.classify(nextImageTensor, 3);
          // net.infer(nextImageTensor, true);
          if (objects && objects.length > 0) {
            objects.map(object => {
              object.probability = object.probability.toFixed(2);
              if (object.probability >= 0.6) {
                console.log('detected obj', object);
                setDetections([...detections, object.className]);
              }
            });
          }
          tf.dispose([nextImageTensor]);
        }
      }
      frame += 1;
      frame = frame % computeRecognitionEveryNFrames;
    }
    requestAnimationFrame(loop);
  };
  loop();
};


  const CameraPage = () => {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [detections, setDetections] = useState([]);
    const [net, setNet] = useState();

    useEffect(() => {
      const getData = async () => {
        // initialise Tensorflow
        await initialiseTensorflow();
        // load the model
        setNet(await mobilenet.load({version: 2, alpha: 0.50}));
  
      }; getData();
    }, []);
    
    if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  if (!net) {
    return (
      <View style={styles.container}>
        <Text>Model not loaded</Text>
      </View>
    );
  }



    return (
      <View style={styles.container}>
      <TensorCamera 
      style={styles.camera} 
      type={Camera.Constants.Type.back}
      onReady={this.handleCameraStream}
      resizeHeight={200}
      resizeWidth={152}
      resizeDepth={3}
      autorender={true}
      cameraTextureHeight={textureDims.height}
      cameraTextureWidth={textureDims.width}
  />
    </View>);
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
      },
      camera: {
        flex: 1,
      },
      buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
      },
      button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
      },
      text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
      },
    });
  
  export default CameraPage