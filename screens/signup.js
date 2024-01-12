import { Heading, Image, Text, FlatList, Item, Input, Stack, Button, ScrollView, Box, FormControl, View, Center, Select, CheckIcon, WarningOutlineIcon, Pressable, Icon } from "native-base";
import { Header } from "../components";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { registerUser } from "./actions/AuthAction";
import Login from "./login";

const Register = () => {
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [nohp, setNohp] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [position, setPosition] = useState("");

  const toggleAlert = (message) => {
    setShowAlert(!showAlert);
    setAlertMessage(message);
  };

  const onRegister = async () => {
    if (nama && email && nohp && password) {
      const data = {
        nama: nama,
        email: email,
        nohp: nohp,
        status: "user",
      };

      console.log(data);

      try {
        const user = await registerUser(data, password);
        navigation.navigate("Login");
      } catch (error) {
        console.log("Error", error.message);
        toggleAlert(error.message);
      }
    } else {
      console.log("Error", "Data tidak lengkap");
      toggleAlert("Data tidak lengkap");
    }
  };
  return (
    <>
    <Header withBack="true" />
      <View mx={"10"} my={"auto"}>
        <Box mb={"5"}>
          <Text bold={true} fontSize={18}>Sign Up</Text>
          <Text fontWeight={"light"} fontSize={15} mb={"1"}>Please enter your data to create an account :D </Text>
        </Box>
        <FormControl>
          <Box mb={"5"}>
            <Text bold={true} fontSize={18} mb={"1"}>Full name:</Text>
            <Input placeholder="tulis nama kamu" borderRadius={"5"} w="100%" borderWidth={1.5} borderColor={"#9A1314"} value={nama} onChangeText={(nama) => setNama(nama)} />
          </Box>
          <Box mb={"5"}>
            <Text bold={true} fontSize={18} mb={"1"}>Email:</Text>
            <Input placeholder="tulis email kamu" borderRadius={"5"} w="100%" borderWidth={1.5} borderColor={"#9A1314"} value={email} onChangeText={(email) => setEmail(email)}/>
          </Box>
          <Box mb={"5"}>
            <Text bold={true} fontSize={18} mb={"1"}>No HP:</Text>
            <Input placeholder="tulis no hp kamu" borderRadius={"5"} w="100%" borderWidth={1.5} borderColor={"#9A1314"} keyboardType="phone-pad" value={nohp} onChangeText={(nohp) => setNohp(nohp)}/>
          </Box>
          <Box mb={"5"}>
            <Text bold={true} fontSize={18} mb={"1"}>Password:</Text>
            <Input borderWidth={1.5} borderColor={"#9A1314"} w={{
              base: "100%",
              }} type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
                  <Icon as={<Ionicons name={show ? "eye-outline" : "eye-off-outline"} />} size={5} mr="2" color="#9A1314" />
              </Pressable>} placeholder="Password" value={password} onChangeText={(password) => setPassword(password)} />
          </Box>
        </FormControl>
        <Center>
          <Button
            onPress={() => {
              onRegister(Login);
            }}
            w={"150"} h={"38"} my={"3"} bg={"#9A1314"} borderRadius={"5"} title="Register" type="text" >
            <Text color={"white"} bold={true} fontSize={15}>Sign Up</Text>
          </Button>
        </Center>
        
      </View>
    </>
  );
};

export default Register;