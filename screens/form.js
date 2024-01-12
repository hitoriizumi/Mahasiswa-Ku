import { Heading, Image, Text, FlatList, Item, Input, Stack, Button, ScrollView, Box, FormControl, View, Center, Select, CheckIcon, WarningOutlineIcon, HStack } from "native-base";
import { Header } from "../components";
import { useState, useEffect } from "react";
import FIREBASE from "./config/FIREBASE";
import { clearStorage, getData } from "./utils";
import { useNavigation } from "@react-navigation/native";
import { addForm, getForm } from "./actions/AuthAction";
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from "@expo/vector-icons/Ionicons";

const Form = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState(null);
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [email, setEmail] = useState("");
  const [nohp, setNohp] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [image, setImage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const toggleAlert = (message) => {
    setShowAlert(!showAlert);
    setAlertMessage(message);
  };

  //ketika klik submit
  const onAddForm = async () => {
    if (nama && alamat && email && nohp && deskripsi && image) {
      const data = {
        nama: nama,
        alamat: alamat,
        email: email,
        nohp: nohp,
        deskripsi: deskripsi,
        image: image,
      };

      console.log(data);
      try {
        const user = await addForm(data); //panggil fungsi add form untuk simpan data
        navigation.navigate("Form");
      } catch (error) {
        console.log("Error", error.message);
        toggleAlert(error.message);
      }
    } else {
      console.log("Error", "Data tidak lengkap");
      toggleAlert("Data tidak lengkap");
    }
  };

  // memilih gambar dr library menggunakan expo
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
        setImage(result.uri);
    }
  };

  return (
    <>
      <Header title={"Mahasiswa"}/>
        <ScrollView>
        <View mx={"10"} mb={"110"}>
          <Center my={"5"}>
            <Heading>
              Form Pendaftaran
            </Heading>
          </Center>
          <FormControl>
            <Box mb={"5"}>
              <Text bold={true} fontSize={18} mb={"1"}>Nama Lengkap:</Text>
              <Input placeholder="tulis nama kamu" borderRadius={"5"} w="100%" borderWidth={1.5} borderColor={"#9A1314"} onChangeText={(nama) => setNama(nama)}/>
            </Box>
            <Box mb={"5"}>
              <Text bold={true} fontSize={18} mb={"1"}>Alamat:</Text>
              <Input placeholder="tulis nama kamu" borderRadius={"5"} w="100%" borderWidth={1.5} borderColor={"#9A1314"} onChangeText={(alamat) => setAlamat(alamat)}/>
            </Box>
            <Box mb={"5"}>
              <Text bold={true} fontSize={18} mb={"1"}>Email:</Text>
              <Input placeholder="tulis nama kamu" borderRadius={"5"} w="100%" borderWidth={1.5} borderColor={"#9A1314"} onChangeText={(email) => setEmail(email)}/>
            </Box>
            <Box mb={"5"}>
              <Text bold={true} fontSize={18} mb={"1"}>No Hp:</Text>
              <Input placeholder="tulis nama kamu" borderRadius={"5"} w="100%" borderWidth={1.5} borderColor={"#9A1314"} onChangeText={(nohp) => setNohp(nohp)}/>
            </Box>
            <Box mb={"5"}>
              <Text bold={true} fontSize={18} mb={"1"}>Nama Perusahaan dan Alasan Ingin Masuk</Text>
              <Input placeholder="tulis nama kamu" borderRadius={"5"} w="100%" borderWidth={1.5} borderColor={"#9A1314"} onChangeText={(deskripsi) => setDeskripsi(deskripsi)}/>
            </Box>
            <Box mb={"5"}>
              <Text bold={true} fontSize={18} mb={"1"}>Input CV dalam bentuk JPG, JPEG, PNG:</Text>
              <Box> 
                <Button backgroundColor={"#9A1314"} w={"45%"} p={3} onPress={pickImage}>
                    <HStack>
                    <Text bold={true} mr={"2"} color={"white"}>Pick an image</Text>  
                    <Ionicons name="cloud-upload-outline" size={20} color="white" />
                    </HStack>
                </Button>
                {image && <Image source={{ uri: image }} alt={"foto"} style={{ width: 200, height: 200 }} />}
              </Box>
            </Box>
            <Center>
              <Button
                w={"150"} h={"38"} my={"3"} bg={"#9A1314"} borderRadius={"5"} title="Save" onPress={() => {
                  onAddForm();
                }}>
                <Text color={"white"} bold={true} fontSize={15}>Submit</Text>
              </Button>
            </Center>
          </FormControl>
        </View>
      </ScrollView>
    </>
  );
};

export default Form; 