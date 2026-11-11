"use client";
import { useEffect, useState } from "react";
import { Shader, FlowingGradient, FilmGrain } from "shaders/react";
import { Navbar } from "@/components/user/navbar";
import { ProfileContent } from "@/components/user/profile-content";
import { InterestSidebar } from "@/components/user/interest-sidebar";
import { PageFooter } from "@/components/user/page-footer";

type ShaderColors = {
  colorA: string;
  colorB: string;
  colorC: string;
  colorD: string;
};

// The gradient slowly cycles through these four-color themes.
const shaderPalettes: ShaderColors[] = [
  // blue theme
  {
    colorA: "#2C5EAD",
    colorB: "#1591DC",
    colorC: "#41abff",
    colorD: "#C4E2F5",
  },
  // purple theme
  {
    colorA: "#8c86ff",
    colorB: "#ede6ff",
    colorC: "#2e059e",
    colorD: "#936bff",
  },
  // red theme
  {
    colorA: "#6f0013",
    colorB: "#dd0026",
    colorC: "#ff4867",
    colorD: "#ffc2cd",
  },
  // yellow/red theme
  {
    colorA: "#ffb30d",
    colorB: "#34979d",
    colorC: "#ff0000",
    colorD: "#fbc854",
  },  
  // sea green/blue theme
  {
    colorA: "#073B4C",
    colorB: "#00C9A7",
    colorC: "#1261A0",
    colorD: "#B7F7E5",
  },
];

const paletteDuration = 10_000; // milliseconds per transition

// Blend directly in RGB for smooth transitions between palette colors.
function interpolateColor(start: string, end: string, progress: number) {
  const startValue = Number.parseInt(start.slice(1), 16);
  const endValue = Number.parseInt(end.slice(1), 16);
  const interpolateChannel = (shift: number) => {
    const startChannel = (startValue >> shift) & 0xff;
    const endChannel = (endValue >> shift) & 0xff;

    return Math.round(startChannel + (endChannel - startChannel) * progress)
      .toString(16)
      .padStart(2, "0");
  };

  return `#${interpolateChannel(16)}${interpolateChannel(8)}${interpolateChannel(0)}`;
}

function interpolatePalette(
  start: ShaderColors,
  end: ShaderColors,
  progress: number,
): ShaderColors {
  return {
    colorA: interpolateColor(start.colorA, end.colorA, progress),
    colorB: interpolateColor(start.colorB, end.colorB, progress),
    colorC: interpolateColor(start.colorC, end.colorC, progress),
    colorD: interpolateColor(start.colorD, end.colorD, progress),
  };
}

function AnimatedShaderBackground() {
  const [colors, setColors] = useState(shaderPalettes[0]);

  useEffect(() => {
    let animationFrame = 0;
    let fromIndex = 0;
    let transitionStart: number | null = null;
    let lastUpdate = 0;

    const animatePalette = (now: number) => {
      transitionStart ??= now;
      const progress = Math.min((now - transitionStart) / paletteDuration, 1);
      const nextIndex = (fromIndex + 1) % shaderPalettes.length;
      const startPalette = shaderPalettes[fromIndex];
      const endPalette = shaderPalettes[nextIndex];

      if (now - lastUpdate >= 1000 / 30 || progress === 1) {
        setColors(interpolatePalette(startPalette, endPalette, progress));
        lastUpdate = now;
      }

      if (progress === 1) {
        fromIndex = nextIndex;
        transitionStart = now;
      }

      animationFrame = requestAnimationFrame(animatePalette);
    };

    animationFrame = requestAnimationFrame(animatePalette);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="fixed z-0 inset-0">
      <Shader className="w-full h-full">
        <FilmGrain strength={0.1} animated={true}>
          <FlowingGradient
            {...colors}
            colorSpace="linear"
            speed={0.5}
            distortion={0.2}
          />
        </FilmGrain>
      </Shader>
    </div>
  );
}

export default function Home() {
  const [currentState, setCurrentState] = useState(1);

  const handleStateChange = (state: number) => {
    setCurrentState(state);
  };

  return (
    <div className="relative min-h-dvh w-full overflow-hidden">
      <AnimatedShaderBackground />
      {/* Content overlay */}
      <div
        className="relative flex min-h-dvh flex-col items-center justify-center py-4 sm:py-6"
        style={{ color: "#f2f5ff" }}
      >
        <div className="flex h-[min(84dvh,52rem)] landscape:h-[min(60dvh,52rem)] min-h-[min(28rem,calc(100dvh-3rem))] w-[min(94vw,72rem)] flex-col">
          {/*Main AREA*/}
          <div className="flex min-h-0 flex-1 flex-col sm:flex-row">
            {/* Main content */}

            <div
              id="areaone"
              className="flex min-h-0 min-w-0 flex-3 flex-col overflow-hidden border"
            >
              <div className="flex w-full shrink-0 items-center justify-between pr-5">
                <p className="text-lg pl-5 pt-5">
                  Mark
                  <br />
                  Imade
                </p>
              </div>
              <div
                className="content-scroll min-h-0 flex-1 overflow-y-auto p-5"
              >
                <ProfileContent currentState={currentState} />
              </div>
              {/* Nav Bar */}
              <div className="shrink-0">
                <Navbar
                  currentState={currentState}
                  setCurrentState={handleStateChange}
                />
              </div>
            </div>

            <InterestSidebar />
          </div>

          <div className="mt-2 shrink-0">
            <PageFooter />
          </div>
        </div>
      </div>
    </div>
  );
}
