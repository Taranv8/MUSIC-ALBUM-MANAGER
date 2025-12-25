import { RootState } from "../store";

export const selectAlbums = (state: RootState) => state.albums.albums;
export const selectFilter = (state: RootState) => state.albums.filter;

export const selectFilteredAlbums = (state: RootState) => {
  const { albums, filter } = state.albums;

  switch (filter) {
    case "YEAR":
      return [...albums].sort((a, b) => a.year - b.year);
    case "SINGER":
      return [...albums].sort((a, b) =>
        a.singers[0].localeCompare(b.singers[0])
      );
    case "ALL":
    default:
      return albums;
  }
};
