import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlbumsState } from "./albumTypes";
import { sampleAlbums } from "../../data/sampleAlbums";

const initialState: AlbumsState = {
  albums: sampleAlbums,
  filter: "ALL",
};

const albumSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {
    addAlbum: (state, action: PayloadAction<typeof sampleAlbums[0]>) => {
      state.albums.push(action.payload);
    },
    setFilter: (state, action: PayloadAction<AlbumsState["filter"]>) => {
      state.filter = action.payload;
    },
  },
});

export const { addAlbum, setFilter } = albumSlice.actions;
export default albumSlice.reducer;
