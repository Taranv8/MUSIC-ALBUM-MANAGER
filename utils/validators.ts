// Validate Album Title
// Only allows alphanumeric + [-,'&#()]
export function isValidAlbumTitle(title: string) {
    const regex = /^[a-zA-Z0-9\s\-\,'&#()]+$/;
    return regex.test(title);
  }
  