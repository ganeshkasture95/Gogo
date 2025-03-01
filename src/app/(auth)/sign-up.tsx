import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import OAuth from "@/components/OAuth";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSiginUpPress = async () => {};

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Create Your Account
          </Text>
        </View>
        <View className="flex  gap-2 p-6">
          <InputField
            label="Name"
            placeholder={"Enter your account name."}
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
          <InputField
            label="Email"
            placeholder={"Enter your account name."}
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            label="Password"
            placeholder={"Enter your account name."}
            icon={icons.lock}
            value={form.password}
            secureTextEntry={true}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />

          <CustomButton
            title="Sign Up"
            onPress={onSiginUpPress}
            className="mt-6"
          />

          {/*  Auth  */}
          <OAuth />
          <Link
            href="/sign-in"
            className="text-lg text-center text-general-200 mt-8"
          >
            <Text>Already have an account? {"  "}</Text>
            <Text className="text-primary-500">Log In</Text>
          </Link>

          {/*  Verification Model  */}
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
