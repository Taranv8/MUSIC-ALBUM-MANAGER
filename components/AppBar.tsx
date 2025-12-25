import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  title: string;
  showBack?: boolean;
};

export default function AppBar({ title, showBack = false }: Props) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {showBack ? (
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={22} color="#ffffff" />
        </Pressable>
      ) : (
        <View style={styles.spacer} />
      )}

      <Text style={styles.title}>{title}</Text>

      <View style={styles.spacer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: "#2563eb",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    elevation: 4,
  },
  backButton: {
    padding: 8,
  },
  spacer: {
    width: 40,
  },
  title: {
    flex: 1,
    textAlign: "center",
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
});
