import { View, Text, StyleSheet } from "react-native";

type Album = {
  id: string;
  title: string;
  year: number;
  singers: string[];
};

type Props = {
  album: Album;
};

export default function AlbumCard({ album }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{album.title}</Text>

      <Text style={styles.year}>Year: {album.year}</Text>

      <View style={styles.singerContainer}>
        {album.singers.map((singer) => (
          <View key={singer} style={styles.chip}>
            <Text style={styles.chipText}>{singer}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0f172a",
    marginBottom: 4,
  },
  year: {
    fontSize: 13,
    color: "#64748b",
    marginBottom: 8,
  },
  singerContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  chip: {
    backgroundColor: "#e0e7ff",
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  chipText: {
    fontSize: 12,
    color: "#3730a3",
    fontWeight: "500",
  },
});
