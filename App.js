import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MyDatePicker from './src/components/MyDatePicker';
import useDaysOfMonth from './src/hooks/useDaysOfMonth';

export default function App() {
  const [datePickerOpen, setDatePickerOpen] = useState(false);




  return (
    <View style={styles.container}>
      <MyDatePicker isVisible={datePickerOpen}
        setIsVisible={setDatePickerOpen} />
      <TouchableOpacity
        onPress={() => { setDatePickerOpen(true) }}
        style={styles.TO}>
        <Text style={styles.t}>Open</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}









const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TO: {
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  t: {
    fontSize: 20,

  }
});
