import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function EditableDropDown({ receivers, defaultSelectedItem, onItemSelected, onItemAdded }) {
  const handleItemSelected = (value) => {
    console.log(value);
    
  };

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('John Doe');

  function getFullNameList() {
    const fullNameList = receivers.map(person => {
      const fullName = `${person.first} ${person.last}`;
      return { label: fullName, value: fullName };
    });    
    return fullNameList;
}

const nameList = getFullNameList()


  const [items, setItems] = useState(nameList);

  console.log(nameList);
  return (
    <View style={styles.container}>
        <Text style={styles.signedBy}>Signed By</Text>
      <DropDownPicker
        value={value}
        containerStyle={styles.dropdownContainer}
        style={styles.dropdown}
        labelStyle={styles.dropdownLabel}
        open={open}
        items={nameList}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onSelectItem={handleItemSelected}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      marginVertical: 10,
      marginTop: 15,
      backgroundColor: '#fff'
    },
    signedBy: {
        marginBottom: 5,
    },
    dropdownContainer: {
      height: 40,
      borderColor: 'gray',
    },
    dropdown: {
      backgroundColor: '#fafafa',
    },
    dropDown: {
      backgroundColor: '#fafafa',
      marginTop: -1,
    },
    dropdownLabel: {
      fontSize: 16,
      color: 'gray',
    },
  });

