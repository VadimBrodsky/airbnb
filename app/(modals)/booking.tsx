import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { BlurView } from "expo-blur";
import Animated, { FadeIn, FadeOut, SlideInDown } from "react-native-reanimated";
import { defaultStyles } from "@/constants/Styles";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { places } from "@/assets/data/places";
import DatePicker from "react-native-modern-datepicker";

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

const guestGroups = [
  {
    name: "Adults",
    text: "Ages 13 or above",
    count: 0,
  },
  {
    name: "Children",
    text: "Ages 2-12",
    count: 0,
  },
  {
    name: "Infants",
    text: "Under 2",
    count: 0,
  },
  {
    name: "Pets",
    text: "Pets allowed",
    count: 0,
  },
];

const Booking: React.FC = () => {
  let router = useRouter();
  let [openCard, setOpenCard] = useState(0);
  let [selectedPlace, setselectedPlace] = useState(0);
  let today = new Date().toISOString().substring(0, 10);
  let [groups, setGroups] = useState(guestGroups);

  let onClearAll = () => {
    setselectedPlace(0);
    setOpenCard(0);
    setGroups(guestGroups);
  };

  return (
    <BlurView intensity={70} tint="light" style={styles.container}>
      {/* where */}
      <View style={styles.card}>
        {openCard !== 0 && (
          <AnimatedTouchableOpacity
            onPress={() => setOpenCard(0)}
            style={styles.cardPreview}
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}
          >
            <Text style={styles.previewText}>Where</Text>
            <Text style={styles.previewDate}>I'm flexible</Text>
          </AnimatedTouchableOpacity>
        )}

        {openCard == 0 && (
          <>
            <Animated.Text entering={FadeIn} style={styles.cardHeader}>
              Where to?
            </Animated.Text>
            <Animated.View style={styles.cardBody}>
              <View style={styles.searchSection}>
                <Ionicons name="search-outline" size={20} style={styles.searchIcon} />
                <TextInput
                  style={styles.inputField}
                  placeholder="Search destination"
                  placeholderTextColor={Colors.grey}
                />
              </View>
            </Animated.View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 25, paddingLeft: 20, marginBottom: 30 }}
            >
              {places.map((item, index) => (
                <TouchableOpacity onPress={() => setselectedPlace(index)} key={index}>
                  <Image
                    source={item.img}
                    style={selectedPlace === index ? styles.placeSelected : styles.place}
                  />
                  <Text
                    style={[
                      { paddingTop: 6 },
                      selectedPlace === index ? { fontFamily: "mon-sb" } : { fontFamily: "mon" },
                    ]}
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </>
        )}
      </View>

      {/* when */}
      <View style={styles.card}>
        {openCard !== 1 && (
          <AnimatedTouchableOpacity
            onPress={() => setOpenCard(1)}
            style={styles.cardPreview}
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}
          >
            <Text style={styles.previewText}>When</Text>
            <Text style={styles.previewDate}>Any week</Text>
          </AnimatedTouchableOpacity>
        )}

        {openCard == 1 && (
          <>
            <Animated.Text entering={FadeIn} style={styles.cardHeader}>
              When's your trip?
            </Animated.Text>
            <Animated.View style={styles.cardBody}>
              <DatePicker
                options={{
                  defaulFont: "mon",
                  borderColor: "transparent",
                  mainColor: Colors.primary,
                  headerFont: "mon-sb",
                }}
                current={today}
                selected={today}
                mode="Calendar"
              />
            </Animated.View>
          </>
        )}
      </View>

      {/* who */}
      <View style={styles.card}>
        {openCard !== 2 && (
          <AnimatedTouchableOpacity
            onPress={() => setOpenCard(2)}
            style={styles.cardPreview}
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}
          >
            <Text style={styles.previewText}>Who</Text>
            <Text style={styles.previewDate}>Add guests</Text>
          </AnimatedTouchableOpacity>
        )}

        {openCard == 2 && (
          <>
            <Animated.Text entering={FadeIn} style={styles.cardHeader}>
              Who's coming?
            </Animated.Text>
            <Animated.View style={styles.cardBody}>
              {groups.map((item, index) => (
                <View
                  key={index}
                  style={[
                    styles.guestItem,
                    index + 1 < guestGroups.length ? styles.itemBorder : null,
                  ]}
                >
                  <View>
                    <Text
                      style={{
                        fontFamily: "mon-sb",
                        fontSize: 14,
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        fontFamily: "mon",
                        fontSize: 14,
                      }}
                    >
                      {item.text}
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      gap: 10,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        let newGroups = [...groups];
                        let newIndex = newGroups[index];
                        newIndex.count = newIndex.count > 0 ? newIndex.count - 1 : 0;
                        setGroups(newGroups);
                      }}
                    >
                      <Ionicons
                        name="remove-circle-outline"
                        size={26}
                        color={groups[index].count > 0 ? Colors.grey : Colors.light}
                      />
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontFamily: "mon",
                        fontSize: 16,
                        minWidth: 18,
                        textAlign: "center",
                      }}
                    >
                      {item.count}
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        let newGroups = [...groups];
                        newGroups[index].count++;
                        setGroups(newGroups);
                      }}
                    >
                      <Ionicons name="add-circle-outline" size={26} color={Colors.grey} />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </Animated.View>
          </>
        )}
      </View>

      {/* footer */}
      <Animated.View style={defaultStyles.footer} entering={SlideInDown.delay(200)}>
        <View
          style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}
        >
          <TouchableOpacity onPress={onClearAll} style={{ justifyContent: "center" }}>
            <Text style={{ fontSize: 18, fontFamily: "mon-sb", textDecorationLine: "underline" }}>
              Clear all
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.back()}
            style={[defaultStyles.btn, { paddingRight: 20, paddingLeft: 50 }]}
          >
            <Ionicons
              name="search-outline"
              size={24}
              color={Colors.white}
              style={[defaultStyles.btnIcon]}
            />
            <Text style={defaultStyles.btnText}>Search</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 14,
    margin: 10,
    elevation: 4,
    shadowColor: Colors.black,
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 2 },
    gap: 20,
  },
  previewText: {
    fontFamily: "mon-sb",
    fontSize: 14,
    color: Colors.grey,
  },
  previewDate: {
    fontFamily: "mon-sb",
    fontSize: 14,
    color: Colors.dark,
  },
  cardPreview: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  cardHeader: {
    fontFamily: "mon-b",
    fontSize: 24,
    padding: 20,
  },
  cardBody: {
    paddingHorizontal: 20,
  },
  searchSection: {
    height: 50,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Colors.accent,
    borderRadius: 8,
    backgroundColor: Colors.white,
    alignContent: "center",
    alignItems: "center",
    marginBottom: 4,
  },
  inputField: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.white,
  },
  searchIcon: {
    padding: 10,
  },
  place: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  placeSelected: {
    width: 120,
    height: 120,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.grey,
  },
  guestItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
  },
  itemBorder: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.grey,
  },
});

export default Booking;
