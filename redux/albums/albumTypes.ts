import { Album } from "../../types";

export interface AlbumsState {
  albums: Album[];
  filter: "ALL" | "YEAR" | "SINGER";
}
