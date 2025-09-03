import React, { useState } from "react";
import "./GreetingCard.css";

export default function GreetingCard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="card-scene" onClick={() => setOpen(!open)}>
      <div className={`card-book ${open ? "open" : ""}`}>
        {/* Cover kiri */}
        <div className="card-page card-cover">
          <h2>🎉 HAPPY BIRTHDAY 🎉</h2>
          <div className="balloons">
            <div className="balloon red"></div>
            <div className="balloon blue"></div>
            <div className="balloon yellow"></div>
            <div className="balloon green"></div>
          </div>
        </div>

        {/* Halaman kanan dalam */}
        <div className="card-page card-inside">
          <h2>💌 HAPPY BIRTHDAY!</h2>
          <p>Dear Therecia,</p>
          <p>
            Selamat ulang tahun ke-21! 🥳  
            Happy Birthday! 🥳
Maaf ya kalau aku kadang bikin kamu kesel, padahal aslinya aku cuma pengen bikin kamu senyum. Aku seneng banget bisa deket sama kamu, rasanya hidup jadi lebih rame.

Semoga ulang tahun ini jadi awal yang indah buat banyak hal baik datang ke hidupmu.|
          </p>
          <p className="signature">— Dari Dion</p>
        </div>
      </div>
    </div>
  );
}
