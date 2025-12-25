# Music Album Manager

A React Native app built with **Expo** to create and manage music albums. The app demonstrates reusable components, state management with **Redux**, and modern mobile UI features.

---
install apk->https://github.com/Taranv8/MUSIC-ALBUM-MANAGER/releases/download/main/music-playlist-manager.apk
## 📌 Project Prompt

The app was developed based on the following requirements:

- Build a React Native mobile app using **Expo**, or a React web app if unfamiliar with React Native.
- Focus on creating **small reusable components** and manage application state via **Redux**.
- **Home Screen**:
  - Displays a list of albums in card view
  - Floating button to create a new album
  - Filter dropdown to filter albums
  - Preload 3 mock albums by default
- **Add New Music Album** page:
  - Album Title: Only alphanumeric characters with special characters [-,'&#()] allowed
  - Publishing Year: Dropdown from 1990 to 2030
  - Singers: Multi-select auto-suggest input
    - Suggestions from a local JSON file of 50–60 singer names
    - Can also add manually
    - Selected singers are displayed as chips
  - Focus on **validation errors** and **page state**
  - Once created, album is added to the current React state

Other requirements included implementing reusable components such as:
- `AlbumCard.tsx`
- `AppButton.tsx`
- `InputField.tsx`
- `SingerMultiSelect.tsx`
- `YearDropdown.tsx`
- `FilterDropdown.tsx`
- `FloatingButton.tsx`
- Chip and validation components

---

## 🖥️ Features

- **Create Albums** with title, year, and singers  
- **Filter Albums** by year or singer  
- **Reusable UI components** for consistency  
- **State management** using Redux  
- **Modern design** with validation and error handling  
- **Offline-ready** with local JSON data for singers  

---

## 🛠️ Tech Stack

- **React Native** + **Expo**
- **Redux Toolkit** for state management
- **TypeScript** for type safety
- **Expo Router** for navigation
- **React Native Paper / Custom UI Components** for UI
- **Local JSON** for singer suggestions

---
**Install dependencies**

`npm install`


**Start the Expo project**

`npx expo start`


Press a to open Android simulator

Press i to open iOS simulator

Or open in web browser

**Build for production (optional)**

`npx expo build:android
npx expo build:ios`

## 📌 AI Prompts Used to Build This Project
The project was developed with guidance from the following AI prompts:

**UI Design Prompt:**
AI for making UI design for the app to manage music albums, with home screen, add album page, filters, floating button, and reusable components.

**File Structure Prompt:** 
Guide me on the complete file structure for this React Native Expo project including app, components, redux, hooks, utils, data, styles, and types folders.

**Recommendation System Prompt:**
How the singer recommendation system works on the Add Album page and the code that it uses.

**Dataset Creation Prompt:**
Create dataset files for singers and albums, with JSON data to be used in the app.
