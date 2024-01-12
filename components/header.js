import { SafeAreaView } from "react-native-safe-area-context";
import { Box, HStack, Image, Heading, Text, StatusBar } from "native-base";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Header = ({ title, withBack = false }) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView edges={['right', 'left', 'top']}>
      <StatusBar barStyle="dark" backgroundColor={"black"} />
        <Box p={"4"} backgroundColor={"#9A1314"} shadow={"9"}>
            <HStack alignItems="center" justifyContent={"space-between"}>
              {!withBack ? (
                <>
                  <HStack>
                    <Text fontSize={"lg"} fontWeight={"bold"} color={"white"}>MahasiswaKu</Text>
                  </HStack>
                  <HStack alignItems="center" justifyContent={"flex-end"}>
                    <Text fontSize={"lg"} color={"white"} mr={"2"}>Halo {title}!</Text>
                    <Image
                      source={require("../assets/telkom.png")}
                      resizeMode="contain"
                      backgroundColor={"white"}
                      w="12"
                      h="12"
                      alt="Profil Logo"
                      mr={"1"}
                      borderRadius={"full"}
                    />
                  </HStack>
                </>
              ) : (
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.goBack()}
                >
                  <Box mr={"3"} bg={"#9A1314"} borderRadius={"lg"}>
                    <HStack>
                      <Ionicons name="chevron-back-outline" size={25} color="white" />
                      <Text fontSize={"20"} color={"white"} >Back</Text>
                    </HStack>
                  </Box>
                </TouchableOpacity>
              )}
            </HStack>
        </Box>
    </SafeAreaView>
  );
};

export default Header;