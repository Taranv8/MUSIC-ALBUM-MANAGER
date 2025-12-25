import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#2563eb" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "600" },
        }}
      >
        <Stack.Screen
          name="index"
          options={{ title: "Music Albums" }}
        />
        <Stack.Screen
          name="add-album"
          options={{ title: "Add New Music Album" }}
        />
      </Stack>
    </Provider>
  );
}

