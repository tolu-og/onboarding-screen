import { View, Text, Image } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import onboardimage1 from "../assets/onboard1.jpg";
import onboardimage2 from "../assets/onboard2.jpg";
import onboardimage3 from "../assets/onboard3.jpg";
import { useNavigation } from "@react-navigation/native";

const OnboardingScreen = () => {
  const navigation = useNavigation();

  const DotComponent = ({ selected }) => {
    return (
      <View
        className={`w-4 h-4 mx-1 flex items-center justify-center rounded-full ${
          selected ? "border-red-400" : ""
        } `}
      >
        <View
          className={`w-2 h-2 ${
            selected ? "bg-red-400" : "bg-red-200"
          } rounded-full`}
        ></View>
      </View>
    );
  };

  return (
    <Onboarding
      onSkip={() => navigation.replace("HomeScreen")}
      onDone={() => navigation.replace("HomeScreen")}
      DotComponent={DotComponent}
      pages={[
        {
          backgroundColor: "#3A3434",
          image: (
            <Image
              source={onboardimage1}
              className="object-contain h-72 w-72"
            />
          ),
          title: "Order",
          subtitle: "No food, no Life",
        },
        {
          backgroundColor: "#F0722E",
          image: (
            <Image
              source={onboardimage2}
              className="w-72 h-72 object-contain"
            />
          ),
          title: "Package",
          subtitle: "We Da Best",
        },
        {
          backgroundColor: "#94F3F7",
          image: (
            <Image
              source={onboardimage3}
              className="w-72 h-72 object-contain"
            />
          ),
          title: "Deliver",
          subtitle: "We Out!",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
