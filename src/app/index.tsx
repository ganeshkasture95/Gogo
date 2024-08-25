import React from "react";
import { SafeAreaView, Text } from "react-native";

export default function Page() {
  return (
    <SafeAreaView className="flex   h-screen">
      <Text className={"font-bold text-red-500 text-4xl"}>
        Hi this is a Home
      </Text>
    </SafeAreaView>
  );
}
