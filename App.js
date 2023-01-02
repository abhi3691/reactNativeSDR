import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Provider, SDRClient } from 'react-native-sdr';
import Screenone from './Screenone';

const ApiClient = {
  method: "get",
  baseUrl: "http://192.168.1.58:3000",
  sdrTypes: {
    "Text": Text,
    "View": View,
    "Image": Image,
    "Button": TouchableOpacity,
  }
}


const App = () => {
  return (
    <Provider client={ApiClient}
    >
      <Screenone />
    </Provider>
  )
}

export default App