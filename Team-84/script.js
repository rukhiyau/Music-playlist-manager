// Accessing the DOM elements
const songInput = document.getElementById('songInput');
const addSongBtn = document.getElementById('addSongBtn');
const playlist = document.getElementById('playlist');
const audioPlayer = document.getElementById('audioPlayer');
const audioSource = document.getElementById('audioSource');

// Array to store the songs (in this case, just song titles)
let songs = [];

// Function to render the playlist
function renderPlaylist() {
  playlist.innerHTML = ''; // Clear the playlist
  songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${song} <button onclick="removeSong(${index})">Remove</button>`;
    li.onclick = () => playSong(song); // Play song on click
    playlist.appendChild(li);
  });
}

// Function to add a new song to the playlist
addSongBtn.addEventListener('click', () => {
  const songTitle = songInput.value.trim();
  if (songTitle && !songs.includes(songTitle)) {
    songs.push(songTitle);
    renderPlaylist();
    songInput.value = ''; // Clear the input field
  }
});

// Function to remove a song from the playlist
function removeSong(index) {
  songs.splice(index, 1);
  renderPlaylist();
}

// Function to play the selected song
function playSong(song) {
  // Here, you can replace with actual audio URLs for your songs
  audioSource.src = `https://www.example.com/audio/${song}.mp3`;
  audioPlayer.load();
  audioPlayer.play();
}
function playSong(song) {
    // Replace with the actual song URL you want to test
    let songUrl = '';
  
    if (song === 'Song 1') {
      songUrl = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
    } else {
      // Fallback: generic placeholder
      songUrl = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3';
    }
  
    audioSource.src = songUrl; // Set the audio source to the song URL
    audioPlayer.load();        // Reload the audio element to load the new song
    audioPlayer.play();        // Play the song
  }
  