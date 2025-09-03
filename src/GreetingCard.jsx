import React, { useState } from "react";
import "./GreetingCard.css";

export default function GreetingCard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="card-scene" onClick={() => setOpen(!open)}>
      <div className={`card ${open ? "is-open" : ""}`}>
        {/* Halaman depan */}
        <div className="card-face card-front">
          <h2>🎉 HAPPY BIRTHDAY 🎉</h2>
          <div className="balloons">
            <div className="balloon red"></div>
            <div className="balloon blue"></div>
            <div className="balloon yellow"></div>
            <div className="balloon green"></div>
          </div>
        </div>

        {/* Halaman dalam */}
        <div className="card-face card-inside">
          <h2>💌 HAPPY BIRTHDAY!</h2>
          <p>Dear Therecia,</p>
          <p>
            Selamat ulang tahun ke-21! 🥳  
            Semoga hari-harimu selalu penuh cinta, kebahagiaan,  
            dan mimpi-mimpi indah yang tercapai.  
            Terima kasih sudah jadi bagian berharga dalam hidupku. ❤️
          </p>
          <p className="signature">— Dari Dion</p>
        </div>
      </div>
    </div>
  );
}
