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
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<string | null>(null);

  const clearSelection = () => {
    setSelectedProject(null);
    setSelectedExperience(null);
  };

  const handleStateChange = (state: number) => {
    clearSelection();
    setCurrentState(state);
  };

  const isDetailOpen = selectedProject !== null || selectedExperience !== null;

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

            <div id="areaone" className="w-3/4 overflow-hidden border flex-auto">
              <div className="flex w-full items-center justify-between pr-5">
                <p className="text-lg pl-5 pt-5">
                  Mark
                  <br />
                  Imade
                </p>
                {isDetailOpen && (
                  <button
                    type="button"
                    onClick={clearSelection}
                    className="pt-5 text-sm transition-opacity hover:opacity-60"
                  >
                    Back to projects
                  </button>
                )}
              </div>
              {isDetailOpen ? (
                <div className="min-h-200 p-5">
                  <div className="pt-10">
                    <ProfileContent
                      currentState={currentState}
                      selectedProject={selectedProject}
                      selectedExperience={selectedExperience}
                    />
                  </div>
                </div>
              ) : (
                <>
                  <div
                    className={`h-100 p-5 ${
                      currentState === 2
                        ? "experience-scroll overflow-y-auto"
                        : ""
                    }`}
                  >
                    <ProfileContent
                      currentState={currentState}
                      projectAction={setSelectedProject}
                      experienceAction={setSelectedExperience}
                    />
                  </div>
                  {/* Nav Bar */}
                  <Navbar
                    currentState={currentState}
                    setCurrentState={handleStateChange}
                  />
                </>
              )}
            </div>

            {!isDetailOpen && (
              <InterestSidebar />
            )}
          </div>

          {!isDetailOpen && (
            <PageFooter />
          )}
        </div>
      </div>
    </div>
  );
}
