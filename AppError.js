import { StyleSheet, Text, View } from "react-native";

export default function AppErrorMessage({ title, error }) {
  return (
    <View style={styles.messageBox}>
      <View>
        <Text style={styles.messageBoxTitleText}>{title}</Text>
      </View>
      <View>
        <Text style={styles.messageBoxBodyText}>{error}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  messageBox: {
    backgroundColor: "#ef553a",
    width: 300,
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
  },
  messageBoxTitleText: {
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    marginBottom: 10,
  },
  messageBoxBodyText: {
    color: "#fff",
    fontSize: 16,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
