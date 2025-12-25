import { useState, useEffect } from "react";
import { isValidAlbumTitle } from "../utils/validators";

type AlbumForm = {
  title: string;
  year: number | null;
  singers: string[];
};

type Errors = {
  title?: string;
  year?: string;
  singers?: string;
};

export function useAlbumForm(initial?: Partial<AlbumForm>) {
  const [title, setTitle] = useState(initial?.title || "");
  const [year, setYear] = useState<number | null>(initial?.year || null);
  const [singers, setSingers] = useState<string[]>(initial?.singers || []);
  const [errors, setErrors] = useState<Errors>({});
  const [isValid, setIsValid] = useState(false);

  // Validate fields whenever state changes
  useEffect(() => {
    const newErrors: Errors = {};

    if (!title.trim()) newErrors.title = "Title is required";
    else if (!isValidAlbumTitle(title)) newErrors.title = "Invalid characters";

    if (!year) newErrors.year = "Year is required";

    if (singers.length === 0) newErrors.singers = "Add at least one singer";

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  }, [title, year, singers]);

  return {
    title,
    setTitle,
    year,
    setYear,
    singers,
    setSingers,
    errors,
    isValid,
  };
}
