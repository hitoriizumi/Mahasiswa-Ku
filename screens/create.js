import { Heading, Image, Text, FlatList, Item, Input, Stack, Button, ScrollView, Box, FormControl, View, Center, Select, CheckIcon, WarningOutlineIcon, VStack, HStack } from "native-base";
import { Header } from "../components";
import { useState, useEffect } from "react";
import FIREBASE from "./config/FIREBASE";
import { clearStorage, getData } from "./utils";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
import Ionicons from "@expo/vector-icons/Ionicons";
import { addCompany, getCompany } from "./actions/AuthAction";

const Create = () => {
    const navigation = useNavigation();
  const [create, setCreate] = useState(null);
  const [nama, setNama] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [divisi, setDivisi] = useState("");
  const [image, setImage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [companies, setCompanies] = useState([]);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const toggleAlert = (message) => {
    setShowAlert(!showAlert);
    setAlertMessage(message);
  };

  useEffect(() => {
    const fetchCompanies = async () => {
        try {
            const companyList = await getCompany();
            setCompanies(companyList);
        } catch (error) {
            console.error("Error fetching companies:", error);
        }
    };
    fetchCompanies();
}, []);

const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  console.log(result);

  if (!result.cancelled) {
    setImage(result.uri);
  }
};

const onAddCompany = async () => {
  try {
    if (nama && deskripsi && divisi && image) {
      const response = await fetch(image);
      const blob = await response.blob();

      // Generate a unique name for the image
      const imageName = new Date().toISOString();

      // Reference to the Firebase Storage path
      const storageRef = FIREBASE.storage().ref().child('images/' + imageName);

      // Upload the image to Firebase Storage
      await storageRef.put(blob);

      // Get the download URL for the image
      const downloadUrl = await storageRef.getDownloadURL();

      const data = {
        nama: nama,
        deskripsi: deskripsi,
        divisi: divisi,
        image: downloadUrl,
      };

      console.log("Data to be added:", data);

      // Add data to Firebase Firestore
      const user = await addCompany(data);
      console.log("Company added successfully:", user);

      // Navigate to "Companyadmin" screen
      navigation.navigate("Companyadmin");
    } else {
      console.error("Error", "Data tidak lengkap");
    }
  } catch (error) {
    console.error("Error adding company:", error);
  }
};


  const getUserData = () => {
    getData("admin").then((res) => {
      const data = res;
      if (data) {
        console.log("isi data", data);
        setCreate(data);
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

  const onSubmit = (create) => {
    if (create) {
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
    <ScrollView>
<View mx={"10"} my={"20"}>
        <Center>
            <Image
                source={require("../assets/telkom.png")}
                resizeMode="contain"
                w="75"
                h="75"
                alt="Profil Logo"
                borderRadius={"full"}
            />
        </Center>
        <FormControl>
            <Box mb={"5"}>
            <Text bold={true} fontSize={18} mb={"1"}>Perusahaan:</Text>
            <Input placeholder="isi nama perusahaan" borderRadius={"5"} w="100%" borderWidth={1.5} borderColor={"#9A1314"} onChangeText={(nama) => setNama(nama)}/>
            </Box>
            <Box mb={"5"}>
            <Text bold={true} fontSize={18} mb={"1"}>Deskripsi:</Text>
            <Input placeholder="isi deskripsi perusahaan" borderRadius={"5"} w="100%" borderWidth={1.5} borderColor={"#9A1314"} onChangeText={(deskripsi) => setDeskripsi(deskripsi)}/>
            </Box>
            <Box mb={"5"}>
            <Text bold={true} fontSize={18} mb={"1"}>Divisi:</Text>
            <Input placeholder="tulis nama kamu" borderRadius={"5"} w="100%" borderWidth={1.5} borderColor={"#9A1314"} onChangeText={(divisi) => setDivisi(divisi)}/>
            </Box>
            <Box>
            <Text bold={true} fontSize={18} mb={"1"}>Image:</Text>
            <Button backgroundColor={"#9A1314"} w={"45%"} p={3} onPress={pickImage}>
                <HStack>
                <Text bold={true} mr={"2"} color={"white"}>Pick an image</Text>  
                <Ionicons name="cloud-upload-outline" size={20} color="white" />
                </HStack>
            </Button>
            {image && <Image source={{ uri: image }} alt={"foto"} style={{ width: 200, height: 200 }} />}
            </Box>
            <Button
                w={"45%"} h={"38"} my={"3"} bg={"#9A1314"} borderRadius={"5"} title="Save" onPress={() => {
                    onAddCompany();
                  }} >
                <Text color={"white"} bold={true} fontSize={15}>Submit</Text>
            </Button>
        </FormControl>
        <Center mt={"10"}>
        <Button bg={"#9A1314"} mb={"2"} w={"40%"} onPress={() => navigation.navigate("Data")}>
            <Text color={"white"} bold={true}>Data Mahasiwsa</Text>
            </Button>
          <Button bg={"#9A1314"} mb={"2"} w={"40%"} onPress={() => navigation.navigate("Companyadmin")}>
            <Text color={"white"} bold={true}>List Done</Text>
            </Button>
          <Button bg={"#9A1314"} mb={"2"} w={"40%"} type="text"
            title={create ? "Logout" : "Login"} onPress={() => onSubmit(create)}>
            <Text color={"white"} bold={true}>Logout</Text>
            </Button>
        </Center>
        
      </View>
    </ScrollView>
      
    </>
  );
};

export default Create;