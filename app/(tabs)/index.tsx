import ExploreHeader from "@/components/ExploreHeader";
import { Stack } from "expo-router";
import React from "react";
import { View } from "react-native";
import Listings from "@/components/Listings";

const Page: React.FC = () => {
  // <Link href={"/(modals)/login"}>Login</Link>
  // <Link href={"/(modals)/booking"}>Bookings</Link>
  // <Link href={"/listing/1337"}>Listing details</Link>
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader />,
        }}
      />
      <Listings />
    </View>
  );
};

export default Page;
