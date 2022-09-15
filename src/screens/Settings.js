import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Settings = ({ navigation }) => {
  const logout = () => {
    signOut(auth).then(() => {
      navigation.navigate("Login");
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>Your email: {auth.currentUser.email}</Text>
      <TouchableOpacity onPress={logout} style={styles.button}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  infoText: {
    marginBottom: 10,
    fontSize: 20,
  },
  button: {
    width: "80%",
    alignItems: "center",
    backgroundColor: "#c9e265",
    marginTop: 5,
    borderColor: "white",
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
