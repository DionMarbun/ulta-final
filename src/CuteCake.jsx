import React, { useEffect, useState } from "react";
import "./CuteCake.css";

export default function CuteCake() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".cake-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="cake-section">
      <div className={`cake-wrap ${visible ? "show" : ""}`}>
        <svg
          className="cake-svg"
          viewBox="0 0 400 260"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="title"
          role="img"
        >
          <title id="title">Cute Birthday Cake</title>

          {/* BASE KUENYA */}
          <rect
            className="cake-base"
            x="40"
            y="90"
            width="320"
            height="120"
            rx="26"
          />

          {/* TOPPING */}
          <g className="cake-topping">
            <rect x="40" y="55" width="320" height="50" rx="26" />
            <path
              d="
                M40,105
                Q60,130 80,105
                T120,105
                T160,105
                T200,105
                T240,105
                T280,105
                T320,105
                T360,105
                L360,90
                L40,90
                Z"
            />
          </g>

          {/* MATA */}
          <g className="eyes">
            <g transform="translate(160,140)">
              <circle r="18" />
              <circle className="eye-glint" cx="-6" cy="-7" r="5" />
            </g>
            <g transform="translate(240,140)">
              <circle r="18" />
              <circle className="eye-glint" cx="-6" cy="-7" r="5" />
            </g>
          </g>

          {/* MULUT (digeser ke tengah) */}
          <path
            className="mouth"
            d="
              M150,174
              a50,24 0 1 0 100,0
              v10
              a50,24 0 1 1 -100,0
              Z"
          />
          <ellipse className="tongue" cx="200" cy="185" rx="18" ry="9" />

          {/* LILIN */}
          <g className="candles">
            {/* Lilin 1 */}
            <g transform="translate(100,50)">
              <rect width="14" height="40" fill="#ff4d4d" rx="3" />
              <ellipse className="flame" cx="7" cy="-6" rx="6" ry="9" />
            </g>
            {/* Lilin 2 */}
            <g transform="translate(160,50)">
              <rect width="14" height="40" fill="#4da6ff" rx="3" />
              <ellipse className="flame" cx="7" cy="-6" rx="6" ry="9" />
            </g>
            {/* Lilin 3 */}
            <g transform="translate(220,50)">
              <rect width="14" height="40" fill="#66cc66" rx="3" />
              <ellipse className="flame" cx="7" cy="-6" rx="6" ry="9" />
            </g>
            {/* Lilin 4 */}
            <g transform="translate(280,50)">
              <rect width="14" height="40" fill="#ff80df" rx="3" />
              <ellipse className="flame" cx="7" cy="-6" rx="6" ry="9" />
            </g>
          </g>
        </svg>
      </div>
    </section>
  );
}
