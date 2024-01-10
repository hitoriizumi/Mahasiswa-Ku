import React, { useState, useEffect } from "react";
import { Heading, Image, Text, FlatList, Form, Item, Input, Stack, Button, HStack, View, VStack, Center, Box, ScrollView } from "native-base";
import { getCompany, deleteCompany } from "./actions/AuthAction";
import { Header } from "../components";

const AdminCompanyList = ({ navigation }) => {
  const [companyList, setCompanyList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const companies = await getCompany();
        setCompanyList(companies);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    }
    fetchData();
  }, []);

  const handleDelete = async (companyId) => {
    try {
      await deleteCompany(companyId);
      const updatedCompanies = await getCompany();
      setCompanyList(updatedCompanies);
    } catch (error) {
      console.error("Error deleting company:", error);
    }
  };

  const handleEdit = (companyId) => {
    navigation.navigate("Editcompany", { companyId });
  };

  return (
    <View>
      <Header title={"Admin"} withBack="true" />
      <Box bg={"white"}>
        <Text fontWeight={"bold"} fontSize={"18"} mx={"auto"} p={"3"}>Admin Company List</Text>
      </Box>
      <ScrollView mb={"180"}>
        <FlatList
        data={companyList}
        keyExtractor={(item) => item.companyId.toString()}
        renderItem={({ item }) => (
          <View px={"5"} pt={"5"}>
            <Text fontSize={"15"}>Nama Perusahaan: {item.nama}</Text>
            <Text fontSize={"15"}>Deskripsi Perusahaan: {item.deskripsi}</Text>
            <Text fontSize={"15"}>Divisi yang disediakan: {item.divisi}</Text>
            {/* Menampilkan gambar */}
            <Image
              source={{ uri: item.image }}
              w={"250"} h={"250"}
              alt="foto"
            />
            {/* Tombol edit */}
            <Button
              my={"2"}
              backgroundColor={"primary.500"}
              title="Edit"
              onPress={() => handleEdit(item.companyId)}>
                <Text bold={true} color={"white"}>Edit</Text>
             </Button>
            {/* Tombol delete */}
            <Button
              backgroundColor={"danger.500"}
              title="Delete"
              onPress={() => handleDelete(item.companyId)}>
                <Text bold={true} color={"white"}>Delete</Text>
              </Button>
          </View>
        )}
      />
      </ScrollView>
       
    </View>
  );
};

export default AdminCompanyList;