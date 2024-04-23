import React, { useMemo, useState } from "react";
import ExploreHeader from "@/components/ExploreHeader";
import { Stack } from "expo-router";
import { View } from "react-native";
import Listings from "@/components/Listings";
import listingsData from "@/assets/data/airbnb-listings.json";

const Page: React.FC = () => {
  const [category, setCategory] = useState("Tiny homes");
  const items = useMemo(() => listingsData as any, []);

  const onDataChange = (category: string) => {
    setCategory(category);
  };

  return (
    <View style={{ flex: 1, marginTop: 130 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChange} />,
        }}
      />
      <Listings category={category} listings={items} />
    </View>
  );
};

export default Page;
