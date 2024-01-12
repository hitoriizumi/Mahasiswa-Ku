import { Heading, Center, View, Image, Text, VStack, Button } from "native-base";
import { Header } from "../components";
import FIREBASE from "./config/FIREBASE";
import { clearStorage, getData } from "./utils";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  const [profile, setProfile] = useState(null);

  const getUserData = () => {
    getData("user").then((res) => {
      const data = res;
      if (data) {
        console.log("isi data", data);
        setProfile(data);
      } else {
        // navigation.replace('Login');
      }
    });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getUserData();
    });

    return () => {
      unsubscribe();
    };
  }, [navigation]);

  const onSubmit = (profile) => {
    if (profile) {
      FIREBASE.auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          clearStorage();
          navigation.navigate("Choose");
        })
        .catch((error) => {
          // An error happened.
          alert(error);
        });
    } else {
      navigation.navigate("Login");
    }
  };

  return (
    <>
      <View backgroundColor={"#9A1314"} w={"full"} h={"250"} borderBottomLeftRadius={"40"} borderBottomRightRadius={"40"}>
        <Center>
          <Heading color={"white"} mt={"50"} mb={"5"}>
            Profile
          </Heading>
          <Image
            source={require("../assets/profile.png")}
            resizeMode="contain"
            w="100"
            h="100"
            alt="Profil Logo"
            borderRadius={"full"}
          />
        </Center>
      </View>
      <View mx={8} mt={"5"}>
        <VStack mb={"5"} >
          <Text bold={true} fontSize={"17"}>
            Nama :
          </Text>
          <Text fontSize={"17"} fontWeight={"light"}>
            {profile?.nama}
          </Text>
        </VStack>
        <VStack mb={"5"} >
          <Text bold={true} fontSize={"17"}>
            Email :
          </Text>
          <Text fontSize={"17"} fontWeight={"light"}>
            {profile?.email}
          </Text>
        </VStack>
        <VStack mb={"5"} >
          <Text bold={true} fontSize={"17"}>
            No HP :
          </Text>
          <Text fontSize={"17"} fontWeight={"light"}>
            {profile?.nohp}
          </Text>
        </VStack>
      </View>
      <Center flex={0.5}>
        <Button bg={"#9A1314"} mb={"2"} w={"30%"} type="text"
        title={profile ? "Logout" : "Login"} onPress={() => onSubmit(profile)}>
          <Text color={"white"} bold={true}>Logout</Text>
        </Button>
        <Button w={"30%"} bg={"#9A1314"} onPress={() => navigation.navigate("About")}>
          <Text color={"white"} bold={true}>About App</Text>
        </Button>
      </Center>
    </>
  );
};

export default Profile;