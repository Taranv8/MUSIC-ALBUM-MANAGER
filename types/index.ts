// Album type
export type Album = {
    id: string;
    title: string;
    year: number;
    singers: string[];
  };
  
  // Form state type
  export type AlbumForm = {
    title: string;
    year: number | null;
    singers: string[];
  };
  
  // Validation errors type
  export type AlbumFormErrors = {
    title?: string;
    year?: string;
    singers?: string;
  };
  
  // Redux slice state
  export type AlbumsState = {
    albums: Album[];
    filter: "ALL" | "YEAR" | "SINGER";
  };
  