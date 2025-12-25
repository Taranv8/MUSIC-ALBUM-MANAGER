import { View, Text, TextInput, StyleSheet } from "react-native";

type Props = {
  label: string;
  value: string;
  placeholder?: string;
  error?: string;
  onChangeText: (text: string) => void;
};

export default function InputField({
  label,
  value,
  placeholder,
  error,
  onChangeText,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={[
          styles.input,
          error && styles.inputError,
        ]}
        placeholderTextColor="#94a3b8"
      />

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    color: "#334155",
    marginBottom: 6,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: "#0f172a",
  },
  inputError: {
    borderColor: "#ef4444",
  },
  error: {
    marginTop: 4,
    fontSize: 12,
    color: "#ef4444",
  },
});
