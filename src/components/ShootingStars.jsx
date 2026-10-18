import React, { useMemo } from "react";
import "../css/shootingStars.css";

// Generate a deterministic list of stars with random positions, sizes, twinkle speeds, and styles
const generateStars = (count) => {
  const animTypes = [
    "twinkle-pulse",
    "twinkle-flicker",
    "twinkle-shimmer",
    "twinkle-bright",
  ];
  const stars = [];

  // Deterministic LCG pseudo-random generator with fixed seed
  let seed = 42;
  const random = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  for (let i = 0; i < count; i++) {
    // Spread evenly across the entire viewport (1% to 99%)
    const x = +(random() * 98 + 1).toFixed(2);
    const y = +(random() * 98 + 1).toFixed(2);

    // Distribution of sizes: 50% tiny, 35% medium, 15% bright
    const sizeRoll = random();
    let size = 1.2;
    let isBright = false;
    let isGold = false;

    if (sizeRoll < 0.45) {
      size = 1.2;
    } else if (sizeRoll < 0.8) {
      size = 1.8;
    } else if (sizeRoll < 0.92) {
      size = 2.4;
      isBright = true;
    } else {
      size = 3.0;
      isBright = true;
      isGold = true;
    }

    // Twinkle durations slowed down by 50% (1.6s to 4.4s)
    const duration = +(1.6 + random() * 2.8).toFixed(2);
    // Negative delay so every star starts already at a random point in its twinkle cycle
    const delay = +(-(random() * 5.0)).toFixed(2);
    const anim = animTypes[Math.floor(random() * animTypes.length)];
    const minOpacity = +(0.15 + random() * 0.25).toFixed(2);
    const maxOpacity = +(0.75 + random() * 0.25).toFixed(2);

    stars.push({
      id: i,
      x,
      y,
      size,
      duration,
      delay,
      anim,
      minOpacity,
      maxOpacity,
      isBright,
      isGold,
    });
  }

  return stars;
};

const SHOOTING_STARS = [
  { id: "s1", top: "6%", left: "82%", angle: "135deg", delay: "0s", duration: "2.4s" },
  { id: "s2", top: "1%", left: "55%", angle: "140deg", delay: "1.8s", duration: "2.5s" },
  { id: "s3", top: "15%", left: "95%", angle: "132deg", delay: "3.6s", duration: "2.3s" },
  { id: "s4", top: "0%", left: "32%", angle: "142deg", delay: "5.4s", duration: "2.6s" },
  { id: "s5", top: "26%", left: "88%", angle: "136deg", delay: "7.2s", duration: "2.4s" },
  { id: "s6", top: "10%", left: "68%", angle: "138deg", delay: "9.0s", duration: "2.5s" },
];

const ShootingStars = () => {
  // 85 stars distributed evenly across the screen
  const stars = useMemo(() => generateStars(85), []);

  return (
    <div className="shooting-stars-bg" aria-hidden="true">
      {/* Individual twinkling stars */}
      {stars.map((star) => (
        <span
          key={star.id}
          className={`twinkling-star ${star.isBright ? "bright" : ""} ${
            star.isGold ? "gold" : ""
          }`}
          style={{
            top: `${star.y}%`,
            left: `${star.x}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationName: star.anim,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            "--min-opacity": star.minOpacity,
            "--max-opacity": star.maxOpacity,
          }}
        />
      ))}

      {/* Dynamic Shooting Stars */}
      {SHOOTING_STARS.map((s) => (
        <div
          key={s.id}
          className="shooting-star"
          style={{
            top: s.top,
            left: s.left,
            "--angle": s.angle,
            "--delay": s.delay,
            "--duration": s.duration,
          }}
        />
      ))}
    </div>
  );
};

export default ShootingStars;
