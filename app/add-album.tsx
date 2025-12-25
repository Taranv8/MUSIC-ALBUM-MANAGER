import { View, StyleSheet, ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import { useRouter } from "expo-router";

import InputField from "../components/InputField";
import YearDropdown from "../components/YearDropdown";
import SingerMultiSelect from "../components/SingerMultiSelect";
import AppButton from "../components/AppButton";

import { addAlbum } from "../redux/albums/albumSlice";
import { useAlbumForm } from "../hooks/useAlbumForm";

export default function AddAlbumScreen() {
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    title,
    year,
    singers,
    errors,
    isValid,
    setTitle,
    setYear,
    setSingers,
  } = useAlbumForm();

  const handleSubmit = () => {
    if (!isValid) return;

    dispatch(
        addAlbum({
          id: Date.now().toString(),
          title,
          year: year!,  // assert year is number
          singers,
        })
      );
      

    router.back();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <InputField
        label="Album Title"
        value={title}
        error={errors.title}
        onChangeText={setTitle}
        placeholder="Enter album title"
      />

      <YearDropdown
        value={year}
        error={errors.year}
        onSelect={setYear}
      />

      <SingerMultiSelect
        value={singers}
        error={errors.singers}
        onChange={setSingers}
      />

      <AppButton
        title="Create Album"
        disabled={!isValid}
        onPress={handleSubmit}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f8fafc",
    flexGrow: 1,
  },
});
