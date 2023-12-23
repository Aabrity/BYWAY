"use client";
import { ReactNode, useEffect } from "react";

interface ScrollUpProps {
  children: ReactNode;
}

export default function ScrollUp({ children }: ScrollUpProps) {
  useEffect(() => window.document.scrollingElement?.scrollTo(0, 0), []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // Adjust as needed
        overflowY: "scroll", // Add this property for vertical scrollbar
      }}
    >
      {children}
    </div>
  );
}
