import React, { useEffect } from "react";
import { View, Text } from "react-native";

type ListingsProps = {
  listings: any[];
  category: string;
};

const Listings: React.FC<ListingsProps> = ({ listings, category }) => {
  useEffect(() => {
    console.log("RELOAD LISTINGS");
  }, [category]);

  return (
    <View>
      <Text>Listings {listings.length}</Text>
    </View>
  );
};

export default Listings;
