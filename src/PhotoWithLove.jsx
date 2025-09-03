// src/PhotoWithLove.jsx
import React, { useEffect, useState } from "react";
import "./PhotoWithLove.css";

export default function PhotoWithLove({ src, alt, className }) {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now() + Math.random();

      const newHeart = {
        id,
        left: Math.random() * 80 + 10,
        size: Math.random() * 20 + 15,
        duration: Math.random() * 2 + 2,
        drift: Math.random() * 60 - 30,
      };

      setHearts((prev) => [...prev, newHeart]);

      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== id));
      }, newHeart.duration * 1000);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`polaroid ${className}`}>
      {/* Foto */}
      <img src={src} alt={alt || "photo"} />

      {/* Hearts */}
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            "--drift": `${heart.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
