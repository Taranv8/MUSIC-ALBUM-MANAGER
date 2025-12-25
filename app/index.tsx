import { View, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { useRouter } from "expo-router";

import AlbumCard from "../components/AlbumCard";
import FloatingButton from "../components/FloatingButton";
import FilterDropdown from "../components/FilterDropdown";
import { selectAlbums,selectFilteredAlbums } from "../redux/albums/albumSelectors";

export default function HomeScreen() {
  const router = useRouter();
  const albums = useSelector(selectFilteredAlbums);

  return (
    <View style={styles.container}>
      <FilterDropdown />

      <FlatList
        data={albums}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <AlbumCard album={item} />
        )}
      />

      <FloatingButton onPress={() => router.push("/add-album")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  list: {
    padding: 16,
    paddingBottom: 80,
  },
});
