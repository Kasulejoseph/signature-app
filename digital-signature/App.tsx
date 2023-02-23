import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HouseAddressItem from './components/HouseAddress/HouseAddressItem';
import HouseAddress from './components/HouseAddress';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HouseInvoiceList } from './components/HouseInvoice';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();
interface CustomHeaderProps {
  title: string;
}


export default function App() {

  // const navigation = useNavigation();

  // const handlePress = () => {
  //   // navigation.goBack();
  // };

  const CustomHeaderHomeScreen = ({ title }: CustomHeaderProps) => {
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

  const CustomHeaderInvoicesScreen = ({ title }: CustomHeaderProps) => {
    return (
      <View style={{ height: 150, backgroundColor: '#3762FB'}}>
        <View style= {{flexDirection: 'row', justifyContent: "space-between", marginTop: 60, padding: 20 }}>
        <View style={{flexDirection: 'row'}}>
        <Icon name='arrow-left' size={20} color="#fff" />
        <Text style={{ fontSize: 24, color: '#fff' }}>{title}</Text>
      </View>
        <TouchableOpacity>
        
      <Text style={styles.buttonText}>20 Items</Text>
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
          header: () => <CustomHeaderHomeScreen title="Hi, Jose!" />,
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          //   // color: '#fff'
          // }
        }}
        />
        
        <Stack.Screen  name="Invoices" options={{
          header: (props) => {
            const { routes } = props.navigation.getState();
            const { data } = routes[1]?.params;

            console.log("hhjjhghjjh", props.navigation.getState());
    
          return <CustomHeaderInvoicesScreen title={data.address} />
        }
        }} component={HouseInvoiceList} />
      </Stack.Navigator>
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
