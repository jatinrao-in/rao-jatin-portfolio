"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [seconds, setSeconds] = useState(3);
  const phone = "919306018924";
  const text = encodeURIComponent("Hey Rao Jatin, I need a website for my business.");
  const url = `https://wa.me/${phone}?text=${text}`;

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = url;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [url]);

  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
        backgroundColor: "#f1f5f9",
        color: "#334155",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        margin: 0,
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          padding: "40px 32px",
          borderRadius: "8px",
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          maxWidth: "460px",
          width: "100%",
          textAlign: "center",
          borderTop: "4px solid #25D366",
        }}
      >
        <h2
          style={{
            marginTop: 0,
            color: "#0f172a",
            fontSize: "22px",
            fontWeight: 600,
            marginBottom: "12px",
          }}
        >
          Wait, we are redirecting you...
        </h2>
        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.6,
            color: "#475569",
            marginBottom: "20px",
          }}
        >
          Connecting you directly to <strong>Rao Jatin</strong> on WhatsApp.
        </p>

        <div
          style={{
            backgroundColor: "#f8fafc",
            border: "1px solid #e2e8f0",
            padding: "12px 16px",
            borderRadius: "6px",
            fontSize: "14px",
            color: "#1e293b",
            marginBottom: "24px",
            textAlign: "left",
          }}
        >
          <strong
            style={{
              display: "block",
              color: "#64748b",
              fontSize: "12px",
              textTransform: "uppercase",
              marginBottom: "4px",
              letterSpacing: "0.5px",
            }}
          >
            Pre-filled Message:
          </strong>
          &quot;Hey Rao Jatin, I need a website for my business.&quot;
        </div>

        <a
          href={url}
          style={{
            display: "inline-block",
            backgroundColor: "#25D366",
            color: "#ffffff",
            padding: "12px 24px",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: 600,
            fontSize: "15px",
          }}
        >
          Click Here to Open WhatsApp
        </a>

        <p
          style={{
            fontSize: "13px",
            color: "#94a3b8",
            marginTop: "20px",
            marginBottom: 0,
          }}
        >
          Redirecting automatically in {seconds} seconds...
        </p>
      </div>
    </div>
  );
}
