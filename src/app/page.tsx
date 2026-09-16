"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Shader, FlowingGradient, FilmGrain } from "shaders/react";
import { ScrollArea } from "radix-ui";
import { Navbar } from "@/components/user/navbar";
import { ProfileContent } from "@/components/user/profile-content";
import { InterestSidebar } from "@/components/user/interest-sidebar";
import { PageFooter } from "@/components/user/page-footer";

type colorPalette = {
  textMain: string;
  textSecondary: string;
  primaryAccent: string;
  secondaryAccent: string;
  deepBackground: string;
  tertiaryAccent: string;
};

const colorSettings = {
  themeA: {
    textMain: "#6981d6",
    textSecondary: "#f2f5ff",
    primaryAccent: "#2C5EAD",
    secondaryAccent: "#1591DC",
    deepBackground: "#4BB8FA",
    tertiaryAccent: "#C4E2F5",
  },
};

// Home component (don't edit here)
export default function Home() {
  
  const [currentState, setCurrentState] = useState(1);

  return (
    <div className="relative w-full h-screen overflow-hidden">
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
        className="relative min-h-screen flex flex-col items-center justify-center"
        style={{ color: colorSettings.themeA.textSecondary }}
      >
        <div className="w-2/3 h-3/4">
          {/*Main AREA*/}
          <div className="flex">
            {/* Main content */}

            <div
              id="areaone"
              className="w-3/4 overflow-hidden border flex-auto"
            >
              <div className="flex items-center w-full">
                <p className="text-lg pl-5 pt-5">
                  Mark
                  <br />
                  Imade
                </p>
              </div>
              <div className="h-100 p-5">
                <ProfileContent currentState={currentState} />
              </div>
              {/* Nav Bar */}
              <Navbar
                currentState={currentState}
                setCurrentState={setCurrentState}
              />
            </div>

            <InterestSidebar textSecondary={colorSettings.themeA.textSecondary} />
          </div>

          <PageFooter textSecondary={colorSettings.themeA.textSecondary} />
        </div>
      </div>
    </div>
  );
}
