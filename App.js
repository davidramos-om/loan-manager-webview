import { StyleSheet, Platform, View, TextInput } from "react-native";
import { WebView } from "react-native-webview";
import { useState } from "react";

import { StatusBar } from "expo-status-bar";
import { LoadingView } from "./LoadingView";
import Button from "./Button";
const uri = Object.freeze({
  app: "https://www.davidramos-om.com/",
});

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  navigateTo = (url) => {
    this.webview.injectJavaScript(`window.location = "${url}"`);
  };

  handleGoHome = () => {
    navigateTo(uri.app);
  };

  handleWebViewNavigationStateChange = (newNavState) => {
    const { url } = newNavState;
    if (!url) {
      this.webview.stopLoading();
      return;
    }

    //* Stop if url is leaving the domain
    if (!url.includes(uri.app)) {
      this.webview.stopLoading();
      navigateTo(uri.app);
    }
  };

  return (
    <View style={{ flex: 1, paddingTop: Platform.OS === "ios" ? 30 : 30 }}>
      <Button onPress={this.handleGoHome} />
      <WebView
        style={styles.container}
        source={{ uri: uri.app }}
        ref={(ref) => (this.webview = ref)}
        onLoad={() => setIsLoading(false)}
        onNavigationStateChange={this.handleWebViewNavigationStateChange}
      />
      <LoadingView isLoading={isLoading} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  homeButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
