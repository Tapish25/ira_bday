"use client";

import Head from "next/head";
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
    const message = encodeURIComponent("Hi! I will join with family 🎉");
    const phoneNumber = "919820118564"; // Replace with your WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
    setRsvpSent(true);
  };

  return (
    <>
      <Head>
        <title>Ira's 2nd Birthday Invitation</title>
        <meta property="og:title" content="You're Invited to Ira's 2nd Birthday!" />
        <meta property="og:description" content="Join us on 31st August at Prestige Shantiniketan for a fun-filled birthday celebration 🎉" />
        <meta property="og:image" content="https://your-deployment-url.vercel.app/birthday-invit.jpeg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-deployment-url.vercel.app" />
      </Head>
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="animate-float-leaf absolute top-0 left-1/4 text-green-400 text-4xl">🍃</div>
        <div className="animate-float-leaf-delay absolute top-0 left-1/2 text-green-500 text-3xl">🍂</div>
        <div className="animate-float-leaf-slow absolute top-0 left-3/4 text-green-300 text-2xl">🍁</div>
      </div>
      <div
        className="min-h-screen flex flex-col items-center justify-center p-6 text-center font-sans bg-pink-100"
        style={{
          backgroundImage: 'url("/bg.jpg")',
          backgroundSize: 'cover',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
      <h1 className="text-3xl font-bold mb-4 text-pink-700">You're Invited!</h1>

      <Image
        src="/birthday-invit.jpeg"
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
            href="https://www.google.com/maps?q=ABC+Apartments+Bangalore"
            target="_blank"
            className="underline"
          >
            View location on map
          </a>
          {" · "}
          <a
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Ira%27s+Birthday&details=Join+us+for+Ira%27s+birthday+celebration!&location=Clubhouse,+ABC+Apartments,+Bangalore&dates=20250815T113000Z/20250815T150000Z"
            target="_blank"
            className="underline"
          >
            Add to Calendar
          </a>
        </p>
      </div>
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        .animate-float-leaf {
          animation: float 10s linear infinite;
        }
        .animate-float-leaf-delay {
          animation: float 12s linear infinite;
          animation-delay: 3s;
        }
        .animate-float-leaf-slow {
          animation: float 15s linear infinite;
          animation-delay: 6s;
        }
      `}</style>
    </div>
    </>
  );
}
