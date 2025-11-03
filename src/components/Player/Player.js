import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { useAudio } from "../../hooks/useAudio";
import { sampleSongs, getAudioUrl } from "../../utils/sampleData";
import ProgressBar from "../ProgressBar/ProgressBar";
import Controls from "../Controls/Controls";
import Volume from "../Volume/Volume";
import "./Player.css";

const Player = () => {
  const { colors } = useTheme();
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isShuffled, setIsShuffled] = useState(false);
  const [repeatMode, setRepeatMode] = useState("off"); // 'off', 'all', 'one'

  const currentSong = sampleSongs[currentSongIndex];
  const audioUrl = getAudioUrl(currentSong.id);

  const { playing, toggle, currentTime, duration, seek } = useAudio(audioUrl);

  // Update volume when it changes
  useEffect(() => {
    const audioElement = document.querySelector("audio");
    if (audioElement) {
      audioElement.volume = volume;
    }
  }, [volume]);

  const handleNext = () => {
    if (isShuffled) {
      const randomIndex = Math.floor(Math.random() * sampleSongs.length);
      setCurrentSongIndex(randomIndex);
    } else {
      setCurrentSongIndex((prev) => (prev + 1) % sampleSongs.length);
    }
  };

  const handlePrevious = () => {
    if (currentTime > 3) {
      seek(0);
    } else {
      setCurrentSongIndex(
        (prev) => (prev - 1 + sampleSongs.length) % sampleSongs.length
      );
    }
  };

  const handleShuffle = () => {
    setIsShuffled(!isShuffled);
  };

  const handleRepeat = () => {
    setRepeatMode((prev) => {
      if (prev === "off") return "all";
      if (prev === "all") return "one";
      return "off";
    });
  };

  const handleSongEnd = () => {
    if (repeatMode === "one") {
      seek(0);
      toggle();
    } else if (repeatMode === "all" || isShuffled) {
      handleNext();
    } else if (currentSongIndex < sampleSongs.length - 1) {
      handleNext();
    }
  };

  // Add event listener for audio ended
  useEffect(() => {
    const audioElement = document.querySelector("audio");
    if (audioElement) {
      audioElement.addEventListener("ended", handleSongEnd);
      return () => audioElement.removeEventListener("ended", handleSongEnd);
    }
  }, [currentSongIndex, repeatMode, isShuffled]);

  return (
    <div
      className="player-container glass-effect waveform-container"
      style={{
        background: colors.glass,
        borderColor: colors.glassBorder,
      }}
    >
      {/* Hidden audio element */}
      <audio src={audioUrl} />

      <div className="player-content">
        {/* Album Art and Song Info */}
        <div className="song-display">
          <img
            src={currentSong.coverArt}
            alt={currentSong.title}
            className="album-art"
          />
          <div className="song-info">
            <h2 className="song-title" style={{ color: colors.text }}>
              {currentSong.title}
            </h2>
            <p className="artist-name" style={{ color: colors.text }}>
              {currentSong.artist}
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <ProgressBar
          currentTime={currentTime}
          duration={duration}
          onSeek={seek}
        />

        {/* Controls */}
        <Controls
          isPlaying={playing}
          onPlayPause={toggle}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onShuffle={handleShuffle}
          onRepeat={handleRepeat}
          isShuffled={isShuffled}
          repeatMode={repeatMode}
        />

        {/* Volume Control */}
        <div className="volume-section">
          <Volume volume={volume} onVolumeChange={setVolume} />
        </div>
      </div>
    </div>
  );
};

export default Player;
