import { Link } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

// import { Container } from './styles';

const Page: React.FC = () => {
  return (
    <View>
      <Link href={"/(modals)/login"}>Login</Link>
      <Link href={"/(modals)/booking"}>Bookings</Link>
      <Link href={"/listing/1337"}>Listing details</Link>
    </View>
  );
};

export default Page;
