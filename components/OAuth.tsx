import { Image, Text, View } from "react-native";
import CustomButton from "@/components/CustomButton";
import { icons } from "@/constants";

const OAuth = () => {
  const handelGoogleSignIn = () => {};
  return (
    <View className="">
      <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
        <View className="flex-1 h-[1px] bg-general-200" />
        <Text className="text-xl"> Or </Text>
        <View className="flex-1 h-[1px] bg-general-200" />
      </View>

      <CustomButton
        title="Log in with Google"
        className="mt-5 w-full shadow-none"
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            className="w-5 h-5 mx-2"
          />
        )}
        bgVariant="outline"
        textVariant="primary"
        onPress={handelGoogleSignIn}
      />
    </View>
  );
};

export default OAuth;
