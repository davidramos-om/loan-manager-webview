import { StyleSheet, Text, View } from "react-native";

export default function AppToolbar({
  leftButton,
  title,
  righButton,
  rbAction,
  lbAction,
  titleAction,
}) {
  return (
    <View style={styles.toolbar}>
      <Text onPress={lbAction} style={styles.toolbarButton}>
        {leftButton}
      </Text>
      <Text onPress={titleAction} style={styles.toolbarTitle}>
        {title}
      </Text>
      <Text onPress={rbAction} style={styles.toolbarButton}>
        {righButton}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: "#48BB78",
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
