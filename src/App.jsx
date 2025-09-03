import "./App.css";
import CuteCake from "./CuteCake";
import PhotoWithLove from "./PhotoWithLove";
import GreetingCard from "./GreetingCard";

function App() {
  return (
    <div className="birthday-container">
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
      <GreetingCard />
    </div>
  );
}

export default App;
