import React from 'react';
import { View } from 'react-native';
import { Image } from "native-base";

const Background = ({ children }) => {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../assets/cover2.png")}
        resizeMode="cover"
        height="100%"
        width="100%"
        alt='background'
      />
      <View style={{ position: "absolute", width: '100%', height: '100%' }}>
        {children}
      </View>
    </View>
  );
}

export default Background;