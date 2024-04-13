import { useAuth } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import React from "react";
import { View, Text, Button } from "react-native";

// import { Container } from './styles';

const Profile: React.FC = () => {
  let { signOut, isSignedIn } = useAuth();

  return (
    <View>
      <Button title="Log out" onPress={() => signOut()} />
      {!isSignedIn && (
        <Link href={"/(modals)/login"}>
          <Text>Log in</Text>
        </Link>
      )}
    </View>
  );
};

export default Profile;
