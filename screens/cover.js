import React from 'react';
import { View } from "native-base";
import { Background } from "../components";
import { useNavigation } from '@react-navigation/native';
import { Heading, Button, Text } from 'native-base';

const Cover = () => {
  const navigation = useNavigation();

  return (
    <Background>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Heading color={"white"} fontSize={33}>MahasiswaKu</Heading>
      </View>
      <View flex={0.3} mx={"20"}>
       <Button
          onPress={() => navigation.navigate("Choose")}
          bg={"#9A1314"}
          borderRadius={10}
          mt={20}
          py={3}
          px={8}
        >
          <Text fontWeight={"bold"} fontSize={20} color={"white"}>
            Continue
          </Text>
        </Button> 
      </View>
      
    </Background>
  );
}

export default Cover;