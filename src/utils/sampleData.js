export const sampleSongs = [
  {
    id: 1,
    title: "Blinding Lights",
    artist: "The Weeknd",
    duration: 200,
    audioUrl: "/audio/sample1.mp3",
    coverArt:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300",
  },
  {
    id: 2,
    title: "Levitating",
    artist: "Dua Lipa",
    duration: 203,
    audioUrl: "/audio/sample2.mp3",
    coverArt:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300",
  },
  {
    id: 3,
    title: "Stay",
    artist: "The Kid LAROI, Justin Bieber",
    duration: 141,
    audioUrl: "/audio/sample3.mp3",
    coverArt:
      "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=300",
  },
];

// For demo purposes, we'll use placeholder audio
export const getAudioUrl = (songId) => {
  // In a real app, this would be your actual audio files
  return `https://www.soundjay.com/button/beep-07.wav`; // Placeholder
};
