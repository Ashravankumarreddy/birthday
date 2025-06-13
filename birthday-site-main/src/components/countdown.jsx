"use client";
import React, { useEffect, useState } from "react";

const Countdown = () => {
  const targetDate = new Date("2025-08-29T00:00:00");
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mt-10">
      <h2 className="text-2xl font-semibold mb-4">Countdown to Ammu's Birthday 🎉</h2>
      <div className="flex justify-center space-x-6 text-xl">
        <div><strong>{timeLeft.days}</strong> days</div>
        <div><strong>{timeLeft.hours}</strong> hrs</div>
        <div><strong>{timeLeft.minutes}</strong> min</div>
        <div><strong>{timeLeft.seconds}</strong> sec</div>
      </div>
    </div>
  );
};

export default Countdown;
