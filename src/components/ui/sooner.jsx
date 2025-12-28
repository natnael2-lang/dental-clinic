"use client"; // optional, only for Next.js; safe to keep for React

import { Toaster } from "sonner";

export default function SonnerToaster() {
  return (
    <Toaster 
      position="top-right" // you can change: top-left, bottom-right, bottom-left, top-center
      toastOptions={{
        duration: 4000, // default toast duration
        style: {
          background: "#fff",
          color: "#333",
          border: "1px solid #ccc",
          borderRadius: "8px",
        },
      }}
    />
  );
}
