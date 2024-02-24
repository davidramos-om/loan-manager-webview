import { StyleSheet, Platform, View, Alert, Text } from "react-native";
import { WebView } from "react-native-webview";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

import { LoadingView } from "./LoadingView";
import AppErrorMessage from "./AppError";
import AppToolbar from "./Toolbar";

const uri = Object.freeze({
  app: "https://baby-loan-app.vercel.app/",
  // app: "https://expo.dev/",
  // app: "http://localhost:5173/",
});

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const handleErrorMessage = (event) => {
    setError(event.nativeEvent.description);
    setIsLoading(false);
    const _error =
      "Ocurrió un problema al cargar la aplicación, por favor intenta de nuevo";
    setError(_error);
    Alert.alert("Error", _error);
  };

  const handleReload = () => {
    this.webview.reload();
    setIsLoading(true);
  };

  return (
    <View style={styles.mainContainer}>
      <AppToolbar
        lbAction={handleGoHome}
        leftButton="Inicio"
        title="Baby Loan"
        righButton="Idiomas"
      />
      <View style={styles.content}>
        {error ? (
          <AppErrorMessage title="Tenemos un problema" error={error} />
        ) : (
          <WebView
            style={styles.container}
            source={{ uri: uri.app }}
            ref={(ref) => (this.webview = ref)}
            onLoad={() => setIsLoading(false)}
            onError={handleErrorMessage}
            onNavigationStateChange={this.handleWebViewNavigationStateChange}
          />
        )}
        <LoadingView isLoading={isLoading} />
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
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
