"use client";

import { useRef } from "react";

export default function ContactOrbit() {
  const rootRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(
    event: React.PointerEvent<HTMLDivElement>,
  ) {
    const element = rootRef.current;

    if (!element) {
      return;
    }

    const rect = element.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width - 0.5;

    const y =
      (event.clientY - rect.top) / rect.height - 0.5;

    element.style.setProperty("--orbit-x", `${x}`);
    element.style.setProperty("--orbit-y", `${y}`);
  }

  function handlePointerLeave() {
    const element = rootRef.current;

    if (!element) {
      return;
    }

    element.style.setProperty("--orbit-x", "0");
    element.style.setProperty("--orbit-y", "0");
  }

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="
        relative
        hidden
        min-[834px]:flex
        min-[834px]:items-center
        min-[834px]:justify-center
      "
      style={
        {
          "--orbit-x": "0",
          "--orbit-y": "0",
        } as React.CSSProperties
      }
    >
      <div className="relative aspect-square w-full max-w-[260px] min-[1440px]:max-w-[300px]">
        <div
          className="
            absolute
            inset-[5%]
            rounded-full
            border
            border-[var(--color-sand)]/25
            transition-transform
            duration-700
            ease-out
            motion-reduce:transform-none
          "
          style={{
            transform:
              "translate(calc(var(--orbit-x) * 8px), calc(var(--orbit-y) * 8px))",
          }}
        />

        <div
          className="
            absolute
            inset-[18%]
            rounded-full
            border
            border-[var(--color-sand)]/35
            transition-transform
            duration-700
            ease-out
            motion-reduce:transform-none
          "
          style={{
            transform:
              "translate(calc(var(--orbit-x) * -12px), calc(var(--orbit-y) * -12px))",
          }}
        />

        <div
          className="
            absolute
            inset-[31%]
            rounded-full
            border
            border-[var(--color-sand)]/60
            transition-transform
            duration-500
            ease-out
            motion-reduce:transform-none
          "
          style={{
            transform:
              "translate(calc(var(--orbit-x) * 16px), calc(var(--orbit-y) * 16px))",
          }}
        />

        <div
          className="
            absolute
            bottom-[8%]
            left-[16%]
            h-[38%]
            w-[32%]
            rotate-[28deg]
            rounded-[50%]
            border-l
            border-[var(--color-sand)]/30
            transition-transform
            duration-700
            ease-out
            motion-reduce:transform-none
          "
          style={{
            transform:
              "translate(calc(var(--orbit-x) * -10px), calc(var(--orbit-y) * 6px)) rotate(28deg)",
          }}
        />

        <div
          className="
            absolute
            bottom-[8%]
            right-[16%]
            h-[38%]
            w-[32%]
            -rotate-[28deg]
            rounded-[50%]
            border-r
            border-[var(--color-sand)]/30
            transition-transform
            duration-700
            ease-out
            motion-reduce:transform-none
          "
          style={{
            transform:
              "translate(calc(var(--orbit-x) * 10px), calc(var(--orbit-y) * 6px)) rotate(-28deg)",
          }}
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            transition-transform
            duration-300
            ease-out
            motion-reduce:transform-none
          "
          style={{
            transform:
              "translate(calc(-50% + var(--orbit-x) * 20px), calc(-50% + var(--orbit-y) * 20px))",
          }}
        >
          <div className="absolute left-1/2 top-1/2 h-px w-10 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-sand)]/70" />

          <div className="absolute left-1/2 top-1/2 h-10 w-px -translate-x-1/2 -translate-y-1/2 bg-[var(--color-sand)]/70" />

          <div className="h-3 w-3 rotate-45 border border-[var(--color-sand)]/70" />
        </div>
      </div>
    </div>
  );
}