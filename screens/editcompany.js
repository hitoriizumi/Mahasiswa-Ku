import React, { useState, useEffect } from "react";
import { Heading, Image, Text, FlatList, Form, Item, Input, Stack, Button, HStack, View, VStack, Center, Box, ScrollView, FormControl } from "native-base";
import { editCompany, getCompany } from "./actions/AuthAction";
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components";

const EditCompany = ({ route }) => {
    const navigation = useNavigation();
    const [nama, setNama] = useState(route.params.nama);
    const [deskripsi, setDeskripsi] = useState(route.params.deskripsi);
    const [divisi, setDivisi] = useState(route.params.divisi);
    const [image, setImage] = useState(route.params.image);
    const [companyId, setCompanyId] = useState(route.params.companyId);

  const onEditCompany = async () => {
    if (nama && deskripsi && divisi && image) {
      const data = {
        nama: nama, 
        deskripsi: deskripsi,
        divisi: divisi,
        image: image,
      };

      console.log(data);
      try {
        const admin = await editCompany(companyId, data);
        navigation.navigate("Companyadmin");
      } catch (error) {
        console.log("Error", error.message);
        toggleAlert(error.message);
      }
    } else {
      console.log("Error", "Data tidak lengkap");
      toggleAlert("Data tidak lengkap");
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View>
      <Header title={"Admin"} withBack="true" />
      <View p={"5"}> 
        <Text mx={"auto"} bold={true} fontSize={"18"} mb={"5"}>Edit Company</Text>
        <FormControl>
          <Input
          mb={"3"}
          placeholder="Nama Perusahaan"
          onChangeText={(nama) => setNama(nama)}
          />
          <Input
            mb={"3"}
            placeholder="Deskripsi Perusahaan"
            onChangeText={(deskripsi) => setDeskripsi(deskripsi)}
          />
          <Input
            mb={"3"}
            placeholder="Divisi"
            onChangeText={(divisi) => setDivisi(divisi)}
          />
          <Button mb={"2"} backgroundColor={"primary.500"} title="Change Image" onPress={pickImage}>
            <Text bold={true} color={"white"}>
              Change Image
            </Text>
          </Button>
          {image && (
            <Image
              my={"3"}
              alt="foto"
              source={{ uri: image }}
              style={{ width: 250, height: 250 }}
            />
          )}
          <Button backgroundColor={"danger.500"} title="Save Changes" onPress={() => {
                  onEditCompany();
                }}>
                  <Text bold={true} color={"white"}>
                    Save Changes
                  </Text>
                </Button>
        </FormControl>
      
      </View>
      
    </View>
  );
};

export default EditCompany;