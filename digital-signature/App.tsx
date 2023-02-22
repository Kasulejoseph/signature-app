import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HouseAddressItem from './components/HouseAddress/HouseAddressItem';
import HouseAddress from './components/HouseAddress';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HouseInvoiceList } from './components/HouseInvoice';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HouseAddress}
          options={{title: 'Addresses'}}
        />
        <Stack.Screen name="Invoices" component={HouseInvoiceList} />
      </Stack.Navigator>
    {/* <HouseAddress></HouseAddress> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    marginTop: 100,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  houseAddress: {
    margin: 15,
  }
});
