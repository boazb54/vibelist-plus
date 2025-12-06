export const MOODS = [
  { id: 'chill', label: 'Chill', emoji: '☕', color: 'from-blue-500 to-cyan-400' },
  { id: 'workout', label: 'Workout', emoji: '💪', color: 'from-red-500 to-orange-400' },
  { id: 'party', label: 'Party', emoji: '🎉', color: 'from-purple-500 to-pink-400' },
  { id: 'focus', label: 'Focus', emoji: '🧠', color: 'from-emerald-500 to-teal-400' },
  { id: 'sad', label: 'Melancholy', emoji: '🌧️', color: 'from-indigo-500 to-blue-600' },
  { id: 'happy', label: 'Feel Good', emoji: '☀️', color: 'from-yellow-400 to-orange-300' },
  { id: 'romantic', label: 'Romantic', emoji: '❤️', color: 'from-rose-500 to-red-400' },
  { id: 'roadtrip', label: 'Road Trip', emoji: '🚗', color: 'from-sky-500 to-indigo-400' },
];

export const SPOTIFY_AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
export const SPOTIFY_SCOPES = [
  "playlist-modify-public",
  "playlist-modify-private",
  "user-read-private",
  "user-read-email"
];

// Pre-configured Developer Credentials
export const DEFAULT_SPOTIFY_CLIENT_ID = "b292c19608a44142990530a7e9595b8a";
export const DEFAULT_REDIRECT_URI = "https://example.com/";