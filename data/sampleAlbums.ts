export type Album = {
    id: string;
    title: string;
    year: number;
    singers: string[];
  };
  
  export const sampleAlbums: Album[] = [
    {
      id: "1",
      title: "Melody Magic",
      year: 2020,
      singers: ["Sonu Nigam", "Shreya Ghosal"],
    },
    {
      id: "2",
      title: "Rhythm Bliss",
      year: 2018,
      singers: ["Arijit Singh", "Neha Kakkar"],
    },
    {
      id: "3",
      title: "Harmony Tales",
      year: 2022,
      singers: ["Rahat Fateh Ali Khan", "Shreya Ghosal"],
    },
  ];
  