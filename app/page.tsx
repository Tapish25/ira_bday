"use client";

import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

declare global {
  interface Window {
    confetti?: (options: {
      particleCount: number;
      spread: number;
      origin: { y: number };
    }) => void;
  }
}

export default function Home() {
  const [rsvpSent, setRsvpSent] = useState(false);

  useEffect(() => {
    const confettiScript = document.createElement("script");
    confettiScript.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js";
    confettiScript.async = true;
    confettiScript.onload = () => {
      const interval = setInterval(() => {
        window.confetti && window.confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }, 5000); // every 5 seconds
      return () => clearInterval(interval);
    };
    document.body.appendChild(confettiScript);
  }, []);

  const handleRSVP = () => {
    const message = encodeURIComponent("Hi Akanksha! I will join with family! See you then.");
    const phoneNumber = "918218652024"; // Replace with your WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
    setRsvpSent(true);
  };

  return (
    <>
      <div
        className="min-h-screen flex flex-col items-center justify-center p-6 text-center font-sans bg-pink-100"
        style={{
          backgroundImage: 'url("/bg4.jpg")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >

      <Image
        src="/birthday-invit.webp"
        alt="Birthday Invitation"
        width={800}
        height={800}
        className="rounded-xl mb-6 shadow-md w-full max-w-2xl"
        priority
      />

      <p className="mb-2 text-lg">Join us to celebrate Ira's 2nd Birthday 🎂</p>
      <p className="mb-4 text-md">📅 Date: 31st August 2025 | 🕕 Time: 10 AM onwards</p>
      <p className="mb-4 text-md">📍 Location: 19108, Prestige Shantiniketan, Whitefield, Bangalore</p>

      <button
        onClick={handleRSVP}
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full text-lg transition"
      >
        {rsvpSent ? "RSVP Sent!" : "RSVP via WhatsApp"}
      </button>

      <div className="mt-6 text-sm text-gray-600">
        <p>
          <a
            href="https://maps.app.goo.gl/BJvwZAbocMfe4iVY6"
            target="_blank"
            className="underline"
          >
            View location on map
          </a>
          {" · "}
          <a
            href="/Iras-Birthday.ics"
            download="Iras-Birthday.ics"
            className="underline"
          >
            Add to Calendar (Google / Apple)
          </a>
        </p>
      </div>
    </div>
    </>
  );
}
