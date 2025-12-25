import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import ValidationError from "./ValidationError";

type Props = {
  value: number | null;
  onSelect: (year: number) => void;
  error?: string;
};

const START_YEAR = 1990;
const END_YEAR = 2030;

export default function YearDropdown({ value, onSelect, error }: Props) {
  const years = Array.from({ length: END_YEAR - START_YEAR + 1 }, (_, i) => START_YEAR + i);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Publishing Year</Text>
      <View style={styles.pickerWrapper}>
      <Picker
  selectedValue={value ?? undefined}
  onValueChange={(val) => val !== null && onSelect(val as number)}
>
  <Picker.Item label="Select year" value={null} />
  {years.map((year) => (
    <Picker.Item key={year} label={year.toString()} value={year} />
  ))}
</Picker>


      </View>
      <ValidationError message={error} />
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
  pickerWrapper: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 8,
  },
});
