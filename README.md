# **React Native Neat Date Picker**

An easy-to-use date picker for react native.

<br>

<center><img src="https://i.imgur.com/dT3UH98.jpg?1" width="200"></center>

<br>

## **Main Features**

📲 Both Android and iOS devices are supported <br>
👍 Providing range and single selection modes <br>
🌈 Color customization<br>
✨ Clean UI
🈶 Chinese / English

<hr>

## **Dependencies**

[react-native-modal](https://github.com/react-native-modal/react-native-modal)

[@expo-google-fonts/roboto](https://docs.expo.io/guides/using-custom-fonts/)

<hr>

## **How to Start**

First install

```
npm i react-native-neat-date-picker
```

Then check if you have already got the dependencies in your project. 

If no, install them by

```
npm i react-native-modal
npm i @expo-google-fonts/roboto
```

## **Import**

```javascript

import DatePicker from 'react-native-neat-date-picker'

```

## **Basic Usage**

```javascript

import React, {useState} from 'react'
import {View,Button} from 'react-native'
import DatePicker from 'react-native-neat-date-picker'

const App = () => {

  const [showDatePicker, setShowDatePicker] = useState(false)

  const openDatePicker = () => {
    setShowDatePicker(true)
  }

  const onCancel = () => {
    // You should close the modal in here
    setShowDatePicker(false)
  }

  const onConfirm = (date) => {
    // You should close the modal in here
    setShowDatePicker(false)
    
    // The parameter 'date' is a Date object so that you can use any Date prototype method.
    console.log(date.getDate())
  }

  return (
    <View>
      <Button title={'open'} onPress={openDatePicker}/>
      <DatePicker
        isVisible={showDatePicker}
        mode={'single'}
        onCancel={onCancel}
        onConfirm={onConfirm}
        />
    <View>
)}

```

## **Properties**

|Property|Type|Default|Discription|
|---|---|---|---|
| `isVisible`         | Boolean  | **REQUIRED** | Show the date picker modal |
| `mode`              | String   | **REQUIRED** | 'single' for single date selection. 'range' for date range selection. |
| `onCancel`          | Function | () => null   | This function will execute when user presses cancel button. |
| `onConfirm`         | Function | () => null   | This function will execute when user presses confirm button. |
| `initialDate`       | Date     | new Date()   | When it is the first time that the user open this date picker, it will show the month which initialDate is in. |
| `minDate`           | Date     | -            | The earliest date which is allowed to be selected. |
| `maxDate`           | Date     | -            | The lateset date which is allowed to be selected. |
| `startDate`         | Date     | -            | Set this prop to a date if you need to set an initial starting date when opening the date picker the first time. Only works with 'range' mode. |
| `endDate`           | Date     | -            | Similar to startDate but for ending date. |
| `onBackButtonPress` | Function | `onCancel`   | Called when the Android back button is pressed |
| `onBackdropPress`   | Function | `onCancel`   | Called when the backdrop is pressed |
| `chinese`           | Boolean  | false        | Toggle Chinese mode. |
| `colorOptions`      | Object   | null         | To be completed... |


<hr>

## **Inspiration**

[react-native-daterange-picker](https://github.com/Naxulanth/react-native-daterange-picker)

<hr>

## **Contact Me**

This is my first open source.<br>
Therefore, I expect there are lots of improvements that could be done.<br>
Any Suggestions or contributions would be very appreciated. <br>
Also, feel free to contact me at 2roto93Stark@gmail.com if you need.<br>
