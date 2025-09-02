import React from "react";
import "./App.css";
import CuteCake from "./CuteCake";

function App() {
  return (
    <div className="birthday-container">
      <h1 className="title">Happy Birthday</h1>
      <h1 className="subtitle">Therecia</h1>
      <div className="photos">
        <div className="polaroid rotate-left">
          <img src="/images/gambar_1.jpg" alt="Foto 1" />
        </div>
        <div className="polaroid rotate-right">
          <img src="/images/gambar_2.jpg" alt="Foto 2" />
        </div>
        <div className="polaroid rotate-left">
          <img src="/images/gambar_3.jpg" alt="Foto 3" />
        </div>
      </div>

      {/* Bagian kue */}
      <div className="cake-section">
        <CuteCake />
      </div>
    </div>
  );
}

export default App;
