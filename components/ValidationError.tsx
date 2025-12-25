import { Text, StyleSheet } from "react-native";

type Props = {
  message?: string;
};

export default function ValidationError({ message }: Props) {
  if (!message) return null;

  return <Text style={styles.error}>{message}</Text>;
}

const styles = StyleSheet.create({
  error: {
    color: "#ef4444",
    fontSize: 12,
    marginTop: 4,
    fontWeight: "500",
  },
});
