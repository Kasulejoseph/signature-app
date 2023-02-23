import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HouseAddressItem from './components/HouseAddress/HouseAddressItem';
import HouseAddress from './components/HouseAddress';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HouseInvoiceList } from './components/HouseInvoice';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();
interface CustomHeaderProps {
  title: string;
}

export default function App() {
  const CustomHeader = ({ title }: CustomHeaderProps) => {
    return (
      <View style={{ height: 200, backgroundColor: '#3762FB'}}>
        <View style= {{flexDirection: 'row', justifyContent: "space-between", marginTop: 120, padding: 20 }}>
        <Text style={{ fontSize: 24, color: '#fff' }}>{title}</Text>
        <TouchableOpacity  style={styles.buttonContainer}>
      <View style={styles.iconContainer}>
        <Icon name='star' size={20} color="#fff" />
      </View>
      <Text style={styles.buttonText}>UPS</Text>
    </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Addresses"
          component={HouseAddress}
          options={{title: 'Addresses',
          // headerStyle: {
          //   backgroundColor: '#f4511e',
          // },
          // headerTintColor: '#fff',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
            
          // },
          // headerTintColor: '#fff',
          // header: (props) => {
          // return (
          //   <View style={{ height: 200}}>
          //     <View>
          //     <Text>jhgh</Text>
          //     </View>
              
          //   </View>
          // )},
          header: () => <CustomHeader title="Hi, Jose!" />,
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          //   // color: '#fff'
          // }
        }}
        />
        <Stack.Screen  name="Invoices" component={HouseInvoiceList} />
      </Stack.Navigator>
    {/* <HouseAddress></HouseAddress> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    // marginTop: 100,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  houseAddress: {
    margin: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3158E2',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    maxHeight: 100,
  },
  iconContainer: {
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
