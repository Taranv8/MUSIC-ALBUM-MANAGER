import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  label: string;
  onRemove?: () => void;
};

export default function Chip({ label, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>

      {onRemove && (
        <Pressable onPress={onRemove} style={styles.icon}>
          <Ionicons name="close" size={14} color="#4f46e5" />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e0e7ff",
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  text: {
    fontSize: 13,
    color: "#3730a3",
    fontWeight: "500",
  },
  icon: {
    marginLeft: 6,
  },
});
