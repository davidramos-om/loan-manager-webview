import { StyleSheet, Text, View } from "react-native";

export default function AppToolbar({ leftButton, title, righButton }) {
  return (
    <View style={styles.toolbar}>
      <Text style={styles.toolbarButton}>{leftButton}</Text>
      <Text style={styles.toolbarTitle}>{title}</Text>
      <Text style={styles.toolbarButton}>{righButton}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: "#81c04d",
    paddingTop: 40,
    paddingBottom: 20,
    flexDirection: "row",
  },
  toolbarButton: {
    paddingLeft: 10,
    paddingRight: 10,
    color: "#fff",
    textAlign: "center",
  },
  toolbarTitle: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    flex: 1,
  },
});
