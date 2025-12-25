import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Pressable,
  Keyboard,
} from "react-native";
import Chip from "./Chip";
import singersData from "../data/singers.json";

type Props = {
  value: string[];
  onChange: (selected: string[]) => void;
  error?: string;
};

export default function SingerMultiSelect({ value, onChange, error }: Props) {
  const [text, setText] = useState("");
  const [filtered, setFiltered] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (text.trim() === "") {
      setFiltered([]);
      return;
    }

    const filteredList = singersData
      .filter(
        (singer) =>
          singer.toLowerCase().includes(text.toLowerCase()) &&
          !value.includes(singer)
      )
      .slice(0, 5); // top 4-5 suggestions

    setFiltered(filteredList);
  }, [text, value]);

  const addSinger = (name: string) => {
    onChange([...value, name]);
    setText("");
    setShowSuggestions(false);
    Keyboard.dismiss();
  };

  const removeSinger = (name: string) => {
    onChange(value.filter((s) => s !== name));
  };

  const handleSubmitEditing = () => {
    if (text.trim() !== "" && !value.includes(text.trim())) {
      addSinger(text.trim());
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Singers</Text>

      <View style={styles.inputContainer}>
        <View style={styles.chipContainer}>
          {value.map((singer) => (
            <Chip key={singer} label={singer} onRemove={() => removeSinger(singer)} />
          ))}

          <TextInput
            style={styles.input}
            value={text}
            placeholder="Type to add singer"
            onChangeText={(t) => {
              setText(t);
              setShowSuggestions(true);
            }}
            onSubmitEditing={handleSubmitEditing}
            autoCorrect={false}
          />
        </View>
      </View>

      {showSuggestions && filtered.length > 0 && (
        <View style={styles.suggestionsContainer}>
          {filtered.map((item, index) => (
  <Pressable
    key={`${item}-${index}`}
    onPress={() => addSinger(item)}
  >
    <Text style={styles.suggestion}>{item}</Text>
  </Pressable>
))}

        </View>
      )}

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
  inputContainer: {
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 8,
    backgroundColor: "#ffffff",
    paddingHorizontal: 8,
    paddingVertical: 6,
    minHeight: 48,
  },
  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 6,
  },
  input: {
    flex: 1,
    minWidth: 100,
    paddingVertical: 4,
    fontSize: 14,
    color: "#0f172a",
  },
  suggestion: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 14,
    color: "#0f172a",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    backgroundColor: "#ffffff",
  },
  
  suggestionsContainer: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 8,
    marginTop: 4,
    overflow: "hidden",
  },
  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
  },
  error: {
    marginTop: 4,
    fontSize: 12,
    color: "#ef4444",
  },
});
