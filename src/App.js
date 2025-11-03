import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header/Header";
import Player from "./components/Player/Player";
import Playlist from "./components/Playlist/Playlist";
import { sampleSongs } from "./utils/sampleData";
import "./styles/global.css";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <div className="app-content">
          <Player />
          <Playlist
            songs={sampleSongs}
            currentSong={sampleSongs[0]}
            onSelectSong={(song) => console.log("Selected:", song)}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
