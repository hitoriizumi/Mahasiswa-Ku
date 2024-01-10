import React, { useState, useEffect } from 'react';
import { Heading, Image, Text, FlatList, Form, Item, Input, Stack, Button, HStack, View, VStack, Center, Box, ScrollView } from "native-base";
import { Alert } from 'react-native';
import { getForm } from './actions/AuthAction'; // Pastikan Anda memiliki fungsi getForm yang mengambil data dari pengguna (user/mahasiswa)
import { Header } from "../components";

const AdminViewData = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    // Mengambil data yang sudah dikirim oleh pengguna (user/mahasiswa)
    fetchData();
  }, []);

  //akan menyimpan pembaruan pada var data 
  const fetchData = async () => { 
    try {
      const data = await getForm(); // Menggunakan fungsi getForm yang sudah ada
      setFormData(data);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <>
      <Header title={"Admin"} withBack="true" />
      <ScrollView>
      <View p={"8"}>
        <Text fontSize={"20"} fontWeight={"bold"} mb={"5"} mx={"auto"}>Data Pribadi dan CV MahasiswaKu</Text>
        {formData.map((data, index) => ( //setiap set data formulir pada array form data dirender di view
          <View key={index} mb={"3"} borderBottomWidth={"1"} paddingBottom={"3"} borderColor={"black"}>
            <Text fontSize={"18"} fontWeight={"bold"} mb={"1"}>Nama Mahasiswa: {data.nama}</Text>
            <Text mb={"1"}>Alamat: {data.alamat}</Text> 
            <Text mb={"1"}>Email: {data.email}</Text>
            <Text mb={"1"}>No HP: {data.nohp}</Text>
            <Text mb={"1"}>Deskripsi: {data.deskripsi}</Text>
            {data.image && <Image source={{ uri: data.image }} alt='cv' style={{ width: 300, height: 300, resizeMode: 'cover' }} />}
          </View>
        ))}
      </View>
    </ScrollView>
    </>
  );
};

export default AdminViewData;