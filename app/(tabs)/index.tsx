import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { images } from "../../constants/images";
import { icons } from "../../constants/icons";
import SearchBar from "../../components/SearchBar";
import { useRouter } from "expo-router";
export default function Index() {
  const router = useRouter();
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="w-full absolute z-0" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
        <View className="flex-1 mt-5">
          <SearchBar
            placeholder="Search for a movie or series"
            onPress={() => router.push("/search")}
          />
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </View>
  );
}
