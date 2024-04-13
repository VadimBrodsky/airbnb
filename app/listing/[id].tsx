import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

// import { Container } from './styles';

const Listing: React.FC = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

export default Listing;
