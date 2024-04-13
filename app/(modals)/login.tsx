import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useWarmUpBrowser } from "@/hoooks/useWarmUpBrowser";

const Login: React.FC = () => {
  useWarmUpBrowser();

  return (
    <View style={styles.container}>
      <Text>Login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  }
})

export default Login;
