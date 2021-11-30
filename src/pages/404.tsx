import * as React from "react";
import { RiAlarmWarningFill } from "react-icons/ri";

export default function NotFoundPage() {
  return (
    <>
      <main>
        <section className="bg-dark">
          <div className="flex flex-col items-center justify-center min-h-screen text-center text-white layout">
            <RiAlarmWarningFill
              size={60}
              className="text-yellow-300 animate-flicker drop-shadow-glow"
            />
            <h1 className="mt-8">Page Not Found</h1>
            <span className="mt-4">Back to Home</span>
          </div>
        </section>
      </main>
    </>
  );
}
