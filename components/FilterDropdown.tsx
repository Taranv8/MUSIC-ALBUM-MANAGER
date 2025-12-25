import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useDispatch, useSelector } from "react-redux";

import { setFilter } from "../redux/albums/albumSlice";
import { selectFilter } from "../redux/albums/albumSelectors";

const FILTER_OPTIONS = [
  { label: "All", value: "ALL" },
  { label: "Year", value: "YEAR" },
  { label: "Singer", value: "SINGER" },
];

export default function FilterDropdown() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Filter</Text>

      <View style={styles.pickerWrapper}>
      <Picker
  selectedValue={filter}
  onValueChange={(value) => dispatch(setFilter(value))}
>
  {FILTER_OPTIONS.map((option) => (
    <Picker.Item
      key={option.value}
      label={option.label}
      value={option.value}
      color="#000000"   // ✅ IMPORTANT
    />
  ))}
</Picker>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 12,
    backgroundColor: "#f8fafc",
  },
  label: {
    fontSize: 12,
    color: "#64748b",
    marginBottom: 4,
  },
  pickerWrapper: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
});
