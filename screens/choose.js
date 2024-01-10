import { Heading, Image, Text, Link, FlatList, Item, Input, Stack, Flex, HStack, Button, ScrollView, Box, FormControl, View, Center, Select, CheckIcon, WarningOutlineIcon, Pressable, Icon } from "native-base";
import { Header } from "../components";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Form = () => {
  const [show, setShow] = useState(false);
  const navigation = useNavigation();
  return (
    <>
    <Header withBack="true" />
            <View mx={"10"} my={"auto"}>
                <Center mb={"25"}>
                    <Image source={require("../assets/first.png")} alt="photo" w={"180"} h={'180'} mb={"2"} />
                    <Text bold={true} fontSize={20} color={"#9A1314"} >Sign In to MahasiswaKu</Text>
                </Center>
                <Center>
                    <Button
                        onPress={() => navigation.navigate("Login")}
                        w={"100%"} h={"38"} my={"3"} bg={"#9A1314"} borderRadius={"5"}>
                        <Text color={"white"} bold={true} fontSize={14}>Sign In</Text>
                    </Button>
                    <Text fontWeight={"light"} mt={"3"}>Don't have an account? 
                    <Link onPress={() => navigation.navigate("Signup")}>
                        Sign Up
                    </Link>
                    </Text>
                </Center>
                <Center>
                    <Text fontWeight={"light"} mt={"3"}>Login as an Admin? 
                    <Link onPress={() => navigation.navigate("Chooseadmin")}>
                        Admin
                    </Link>
                    </Text>
                </Center>
            </View>
            <Center mb={"8"} mx={"12"}>
                <Text fontWeight={"light"} textAlign={"center"} >
                    By creating an account, you are agreeing to our Terms of Service
                </Text>
            </Center>
    </>
  );
};

export default Form;