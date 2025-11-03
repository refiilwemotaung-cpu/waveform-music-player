import React from "react";
import "./Playlist.css";

const Playlist = ({ songs, currentSong, onSelectSong }) => {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="playlist-container glass-effect">
      <h3 className="playlist-title">Playlist</h3>

      <div className="songs-list">
        {songs.map((song) => (
          <div
            key={song.id}
            className={`song-item ${
              currentSong?.id === song.id ? "active" : ""
            }`}
            onClick={() => onSelectSong(song)}
          >
            <div className="song-info">
              <img
                src={song.coverArt}
                alt={song.title}
                className="song-cover"
              />
              <div className="song-details">
                <h4 className="song-title">{song.title}</h4>
                <p className="song-artist">{song.artist}</p>
              </div>
            </div>

            <div className="song-duration">{formatTime(song.duration)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
