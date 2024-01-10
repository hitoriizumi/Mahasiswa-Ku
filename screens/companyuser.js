import React, { useEffect, useState } from "react";
import { Heading, Image, Text, FlatList, Form, Item, Input, Stack, Button, HStack, View, VStack, Center, Box, ScrollView, Pressable, Spinner } from "native-base";
import { TouchableOpacity } from "react-native";
import { getCompany } from "./actions/AuthAction";
import { Header } from "../components";

const UserCompanyList = () => {
  const [companyList, setCompanyList] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State untuk menandai proses loading

  useEffect(() => {
    async function fetchCompanies() {
      try {
        const companies = await getCompany();
        setCompanyList(companies);
        setIsLoading(false); // Setelah selesai mengambil data, berhenti loading
      } catch (error) {
        console.error("Error fetching companies:", error);
        setIsLoading(false); // Jika terjadi error, berhenti loading juga
      }
    }
    fetchCompanies();
  }, []);

  return (
    <>
      <Header title={"Mahasiswa"} />
      <ScrollView>
        <View p={"5"} mb={"70"}>
          <Heading fontWeight={"bold"} fontSize={"20"} mb={"5"} mx={"auto"}>
            User Company List
          </Heading>
          {isLoading ? (
            <Center flex={1}>
              <Spinner size={"lg"} color="#9A1314" />
            </Center>
          ) : (
            <>
              {companyList.map((item) => (
                  <View mb={"5"}>
                    <Box bg={"white"} w={"full"} h={'auto'} borderRadius={"10"} boxShadow={"10"} shadow={"6"} flexDirection={"row"}>
                      {item.image && (
                        <Image
                          source={{ uri: item.image }}
                          alt="fotonya"
                          w={"180"}
                          h={"180"}
                          borderBottomLeftRadius={"10"}
                          borderTopLeftRadius={"10"}
                        />
                      )}
                      <VStack paddingY={"2"}>
                        <Text bold={true} fontSize={"14"} ml={"3"} mb={"1"} alignItems={"center"} pr={"200"}>
                          {item.nama}
                        </Text>
                        <Text fontSize={"14"} ml={"3"} alignItems={"center"} pr={"200"} mb={"1"}>Deskripsi: {item.deskripsi}</Text>
                        <Text fontSize={"14"} ml={"3"} alignItems={"center"} textAlign={"justify"} mx={135}>Divisi: {item.divisi}</Text>
                      </VStack> 
                    </Box>
                  </View>
              ))}
            </>
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default UserCompanyList;