import React, { useState, useEffect } from 'react';

const App = () => {
  const [musicPlaying, setMusicPlaying] = useState(true);

  // Function to stop the music
  const stopMusic = () => {
    setMusicPlaying(false);
  };

  useEffect(() => {
    // Play music when the component mounts
    const audio = new Audio('path_to_your_audio_file.mp3');
    audio.loop = true;
    audio.play();

    // Stop the music when the state changes
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <div>
      {musicPlaying ? (
        <button onClick={stopMusic}>Stop Music</button>
      ) : (
        <p>Music stopped</p>
      )}
      {/* Rest of your app */}
    </div>
  );
};

export default App;
