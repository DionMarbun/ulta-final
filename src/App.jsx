import { useRef, useState } from "react";
import "./App.css";
import CuteCake from "./CuteCake";
import PhotoWithLove from "./PhotoWithLove";
import GreetingCard from "./GreetingCard";

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    audioRef.current.play().catch(() => {
      console.log("User gesture diperlukan untuk play audio.");
    });
    setIsPlaying(true); // tombol hilang setelah klik
  };

  return (
    <div className="birthday-container">
      {/* Audio Happy Birthday */}
      <audio ref={audioRef} src="/music/happy-birthday.mp3" loop />

      {/* Tombol Play muncul hanya sekali */}
      {!isPlaying && (
        <button onClick={handlePlay} className="music-btn">
          ▶ Play Music
        </button>
      )}

      <h1 className="title">Happy Birthday</h1>
      <h1 className="subtitle">Therecia Vilarecia Gracia Haloho</h1>

      <div className="twenty-one-wrap">
        <h2 className="twenty-one">21 Birthday !</h2>
      </div>

      {/* Foto-foto */}
      <div className="photos-with-love">
        <PhotoWithLove src="/images/gambar_1.jpg" className="rotate-left" />
        <PhotoWithLove src="/images/gambar_2.jpg" className="rotate-right" />
        <PhotoWithLove src="/images/gambar_3.jpg" className="rotate-left" />
        <PhotoWithLove src="/images/gambar_4.jpg" className="rotate-left" />
      </div>

      {/* Balon naik */}
      <div className="balloon-container">
        <div className="balloon pink"></div>
        <div className="balloon blue"></div>
        <div className="balloon yellow"></div>
        <div className="balloon green"></div>
        <div className="balloon purple"></div>
      </div>

      {/* Kue ulang tahun */}
      <div className="cake-section">
        <CuteCake />
      </div>

      {/* Kartu ucapan */}
      <div>
        <GreetingCard />
      </div>
    </div>
  );
}

export default App;
