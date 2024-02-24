import { View, ActivityIndicator, Text } from "react-native";

export function LoadingView({ isLoading }) {
  if (!isLoading) {
    return null;
  }

  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 80,
        backgroundColor: "rgba(0,0,0,0.5)",
        paddingBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <ActivityIndicator
        animating={isLoading}
        color="#fff"
        style={{ marginRight: 10 }}
      />
      <Text style={{ color: "#fff" }}>Loading...</Text>
    </View>
  );
}
