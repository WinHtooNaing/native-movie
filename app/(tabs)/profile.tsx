import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const Profile = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Profile</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Profile;
