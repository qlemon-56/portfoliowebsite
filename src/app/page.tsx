"use client";
import { useState } from "react";
import { Shader, FlowingGradient, FilmGrain } from "shaders/react";
import { Navbar } from "@/components/user/navbar";
import { ProfileContent } from "@/components/user/profile-content";
import { InterestSidebar } from "@/components/user/interest-sidebar";
import { PageFooter } from "@/components/user/page-footer";

const colorSettings = {
  themeA: {
    textSecondary: "#f2f5ff",
    primaryAccent: "#2C5EAD",
    secondaryAccent: "#1591DC",
    deepBackground: "#4BB8FA",
    tertiaryAccent: "#C4E2F5",
  },
};

export default function Home() {
  const [currentState, setCurrentState] = useState(1);

  const handleStateChange = (state: number) => {
    setCurrentState(state);
  };

  return (
    <div className="relative min-h-dvh w-full overflow-hidden">
      {/* Canvas background */}
      <div className="fixed z-0 inset-0">
        <Shader className="w-full h-full">
          <FilmGrain strength={0.1} animated={true}>
            <FlowingGradient
              colorA={colorSettings.themeA.deepBackground}
              colorB={colorSettings.themeA.primaryAccent}
              colorC={colorSettings.themeA.secondaryAccent}
              colorD={colorSettings.themeA.tertiaryAccent}
              speed={0.5}
              distortion={0.2}
            />
          </FilmGrain>
        </Shader>
      </div>
      {/* Content overlay */}
      <div
        className="relative flex min-h-dvh flex-col items-center justify-center py-4 sm:py-6"
        style={{ color: colorSettings.themeA.textSecondary }}
      >
        <div className="flex h-[min(84dvh,52rem)] landscape:h-[min(50dvh,52rem)] min-h-[min(28rem,calc(100dvh-3rem))] w-[min(94vw,72rem)] flex-col">
          {/*Main AREA*/}
          <div className="flex min-h-0 flex-1 flex-col sm:flex-row">
            {/* Main content */}

            <div
              id="areaone"
              className="flex min-h-0 min-w-0 flex-[3] flex-col overflow-hidden border"
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
