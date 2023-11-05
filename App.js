import React from 'react';
import {useState, useEffect} from 'react';
import { StyleSheet, View, Text, ScrollView, Button, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';
import * as Location from 'expo-location';

export default function App() {
  const [directions, setDirections] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [destinationAddress, setDestinationAddress] = useState('');
  const [destination, setDestination] = useState(destination);
  const API_KEY = process.env.GOOGLE_KEY

  const getUserLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        const location = await Location.getCurrentPositionAsync({});
        setUserLocation(location.coords);
      }
    } catch (error) {
      console.error('Error getting user location:', error);
    }
  };

  const getRoute = async () => {
    if (userLocation) {
      try {
        // Geocode the destination address
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${destinationAddress}&key=${API_KEY}`
        );

        console.log('Geocoding Response:', response.data.results[0].geometry.location);

        const result = response.data.results[0];
        if (result) {
          const location = {
            lat: result.geometry.location.lat,
            lng: result.geometry.location.lng,
          };
          setDestination(location);

          const destCoords = `${location.lat},${location.lng}`;

          const response = await axios.get(
            `https://maps.googleapis.com/maps/api/directions/json?origin=${userLocation.latitude},${userLocation.longitude}&destination=${destCoords}&key=${API_KEY}`
          );

          const route = response.data.routes[0];
          if (route) {
            const legs = route.legs[0];
            const steps = legs.steps;

            setDirections(steps);
          } else {
            console.error('No route found');
          }
        } else {
          console.error('No geocoded result found');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    } else {
      console.error('User location not available');
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter destination address"
        value={destinationAddress}
        onChangeText={(text) => setDestinationAddress(text)}
      />
      {userLocation && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
            }}
            title="Current Location"
          />
          <Marker
            coordinate={destination}
            title="Destination"
          />
        </MapView>
      )}
      
      <Button title="Get Directions" onPress={getRoute} />
      <ScrollView style={styles.directions}>
        {directions.map((step, index) => (
          <View style={styles.direction} key={index}>
            <Text>{step.html_instructions}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  directions: {
    flex: 1,
  },
  direction: {
    padding: 8,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 40,
    padding: 10,
  },
});