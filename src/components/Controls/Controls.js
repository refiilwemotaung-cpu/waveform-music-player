import React from "react";
import "./Controls.css";

const Controls = ({
  isPlaying,
  onPlayPause,
  onNext,
  onPrevious,
  onShuffle,
  onRepeat,
  isShuffled,
  repeatMode,
}) => {
  return (
    <div className="controls-container">
      <div className="secondary-controls">
        <button
          className={`control-btn ${isShuffled ? "active" : ""}`}
          onClick={onShuffle}
        >
          🔀
        </button>

        <button className="control-btn" onClick={onPrevious}>
          ⏮️
        </button>
      </div>

      <div className="primary-controls">
        <button className="play-pause-btn" onClick={onPlayPause}>
          {isPlaying ? "⏸️" : "▶️"}
        </button>
      </div>

      <div className="secondary-controls">
        <button className="control-btn" onClick={onNext}>
          ⏭️
        </button>

        <button
          className={`control-btn ${repeatMode !== "off" ? "active" : ""}`}
          onClick={onRepeat}
        >
          {repeatMode === "all" ? "🔁" : repeatMode === "one" ? "🔂" : "↩️"}
        </button>
      </div>
    </div>
  );
};

export default Controls;
