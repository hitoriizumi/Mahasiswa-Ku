import { Heading, Image, Text, FlatList, Item, Input, Stack, Button, ScrollView, Box, FormControl, View, Center, Select, CheckIcon, WarningOutlineIcon, Pressable, Icon } from "native-base";
import { Header } from "../components";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { loginAdmin } from "./actions/AuthAction";

const Login = () => {
  const [show, setShow] = useState(false);
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const toggleAlert = (message) => {
    setShowAlert(!showAlert);
    setAlertMessage(message);
  };

  const login = () => {
    if (email && password) {
      loginAdmin(email, password)
        .then((admin) => {
          // Pengguna berhasil login, lakukan sesuatu dengan data pengguna jika perlu
          navigation.navigate("Create");
        })
        .catch((error) => {
          // Terjadi kesalahan saat login, tampilkan pesan kesalahan
          console.log("Error", error.message);
          toggleAlert(error.message);
        });
    }
  };

  return (
    <>
    <Header withBack="true" />
      <View mx={"10"} my={"auto"}>
        <Box mb={"5"}>
          <Text bold={true} fontSize={18}>Sign In</Text>
          <Text fontWeight={"light"} fontSize={14} mb={"1"}>Enter your data Admin</Text>
        </Box>
        <FormControl>
          <Box mb={"5"}>
            <Text bold={true} fontSize={18} mb={"1"}>Email:</Text>
            <Input placeholder="tulis email kamu" borderRadius={"5"} w="100%" borderWidth={1.5} borderColor={"#9A1314"} onChangeText={(text) => setEmail(text)} value={email}/>
          </Box>
          <Box mb={"5"}>
            <Text bold={true} fontSize={18} mb={"1"}>Password:</Text>
            <Input borderWidth={1.5} borderColor={"#9A1314"} w={{
              base: "100%",
              }} type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
                  <Icon as={<Ionicons name={show ? "eye-outline" : "eye-off-outline"} />} size={5} mr="2" color="#9A1314" />
              </Pressable>} placeholder="Password" onChangeText={(text) => setPassword(text)} value={password} />
          </Box>
        </FormControl>
        <Center>
          <Button
            onPress={() => login()} w={"150"} h={"38"} mt={"3"} bg={"#9A1314"} borderRadius={"5"} title="Login">
            <Text color={"white"} bold={true} fontSize={15}>Sign In</Text>
          </Button>
        </Center>
        
      </View>
    </>
  );
};

export default Login;