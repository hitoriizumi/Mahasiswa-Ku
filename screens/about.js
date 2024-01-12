import { Heading, Center, View, Image, Text, VStack, Button, HStack, ScrollView } from "native-base";
import { Header } from "../components";

const Profile = () => {
  return (
    <>
    <Header title={"Admin"} withBack="true" />
    <ScrollView>
      <View>
        <Image source={require("../assets/cover2.png")} alt="background" w={"full"} h={"280"}/>
      </View>
      <View my={5} mx={50}>
        <Center> 
            <Heading>App Description</Heading>
            <Text fontSize={15} textAlign={"justify"} mt={"3"}>"MahasiswaKu" merupakan aplikasi mobile inovatif yang bertujuan untuk memfasilitasi mahasiswa dan alumni dalam mengakses informasi komprehensif 
                mengenai perusahaan dan lowongan pekerjaan di bidang Teknologi Informasi (TI). Aplikasi ini berfungsi sebagai jembatan antara kandidat yang berharap dan 
                calon employer, dengan tujuan menyederhanakan proses pencarian kerja di industri TI. Aplikasi ini memiliki dua peran utama: mahasiswa dan administrator.
            </Text>
        </Center>
        <View>
            <Center my={"5"}>
              <Heading>App Info</Heading>  
            </Center>
            <HStack justifyContent={"space-between"}>
                <Text fontSize={15} textAlign={"justify"} mt={"3"}>Version</Text>  
                <Text fontSize={15} textAlign={"justify"} mt={"3"}>V0.0.1</Text>  
            </HStack>
            <HStack justifyContent={"space-between"}>
                <Text fontSize={15} textAlign={"justify"} mt={"3"}>Update On</Text>  
                <Text fontSize={15} textAlign={"justify"} mt={"3"}>December 18, 2023</Text>  
            </HStack>
            <HStack justifyContent={"space-between"}>
                <Text fontSize={15} textAlign={"justify"} mt={"3"}>Created By</Text>  
                <Text fontSize={15} textAlign={"justify"} mt={"3"}>MahasiswaKu</Text>  
            </HStack>
            <Center>
                <Image
                source={require("../assets/telkom.png")}
                resizeMode="contain"
                w="75"
                h="75"
                mt={"10"}
                alt="Profil Logo"
                borderRadius={"full"}
                />
            </Center>
        </View>
      </View>
    </ScrollView>
      
    </>
  );
};

export default Profile;