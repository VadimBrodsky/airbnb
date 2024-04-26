import { defaultStyles } from "@/constants/Styles";
import { useRouter } from "expo-router";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE } from "react-native-maps";

type ListingsMapProps = {
  listings: any;
};

const INITIAL_REGION = {
  latitude: 52.499586830677025,
  longitude: 13.34589882667451,
  latitudeDelta: 9,
  longitudeDelta: 9,
};

const ListingsMap: React.FC<ListingsMapProps> = (props) => {
  const router = useRouter();

  const onMarkerSelected = (listing: any) => {
    router.push(`/listing/${listing.properties.id}`);
  };

  return (
    <View style={defaultStyles.container}>
      <MapView
        style={StyleSheet.absoluteFill}
        showsUserLocation
        showsMyLocationButton
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_REGION}
      >
        {props.listings.features.map((item: any) => (
          <Marker
            key={item.properties.id}
            onPress={() => onMarkerSelected(item)}
            coordinate={{
              latitude: +item.properties.latitude,
              longitude: +item.properties.longitude,
            }}
          />
        ))}
      </MapView>
    </View>
  );
};

// const styles = StyleSheet.create({});

export default ListingsMap;
