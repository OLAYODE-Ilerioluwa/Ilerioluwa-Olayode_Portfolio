
import { cn } from "../lib/utils";
import { useEffect, useState } from "react";

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  animationSpeed = 15,
  ...props
}) => {
  return (
    <div
      className={cn(
        "transition-bg relative flex min-h-screen flex-col items-center justify-center bg-zinc-50 text-slate-950 dark:bg-zinc-900",
        className
      )}
      {...props}
    >
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{
          "--aurora":
            "repeating-linear-gradient(100deg,#2563eb_10%,#3b82f6_15%,#60a5fa_20%,#93c5fd_25%,#1d4ed8_30%)",
          "--dark-gradient":
            "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
          "--white-gradient":
            "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",
          "--color-1": "#2563eb",
          "--color-2": "#3b82f6",
          "--color-3": "#60a5fa",
          "--color-4": "#93c5fd",
          "--color-5": "#1d4ed8",
          "--black": "#000",
          "--white": "#fff",
          "--transparent": "transparent",
          "--animation-speed": `${animationSpeed}s`,
        }}
      >
        <div
          className={cn(
            `pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-50 blur-[10px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--color-1)_10%,var(--color-2)_15%,var(--color-3)_20%,var(--color-4)_25%,var(--color-5)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[""] dark:[background-image:var(--dark-gradient),var(--aurora)] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,
            "after:[animation:aurora_var(--animation-speed)_linear_infinite]",
            showRadialGradient &&
              "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]"
          )}
        />
      </div>
      {children}
    </div>
  );
};