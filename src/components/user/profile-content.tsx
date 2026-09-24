"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  experiences,
  extracurriculars,
  insightDays,
  projects,
} from "@/lib/portfolio-data";

type ProfileContentProps = {
  currentState: number;
  selectedProject?: string | null;
  selectedExperience?: string | null;
  projectAction?: (project: string) => void;
  experienceAction?: (experience: string) => void;
};

const baseClassName = "w-2/3 text-base leading-relaxed";

type EntryRowProps = {
  title: string;
  details: string[];
  onClick?: () => void;
};

function EntryRow({ title, details, onClick }: EntryRowProps) {
  return (
    <div className="py-2">
      <button
        type="button"
        onClick={onClick}
        className="text-left transition-opacity hover:opacity-60"
      >
        <h4 className="font-bold">{title}</h4>
        {details.map((detail, index) => (
          <p
            key={detail}
            className={index === details.length - 1 ? "font-extralight" : undefined}
          >
            {detail}
          </p>
        ))}
      </button>
    </div>
  );
}

function ExperienceSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h3 className="border-b pb-3 text-xs uppercase tracking-widest opacity-70">
        {title}
      </h3>
      {children}
    </section>
  );
}

export function ProfileContent({
  currentState,
  selectedProject,
  selectedExperience,
  projectAction,
  experienceAction,
}: ProfileContentProps) {
  if (selectedProject) {
    const project = projects[selectedProject];

    if (!project) return null;

    return (
      <article className="w-full space-y-8 text-base leading-relaxed">
        <header className="flex flex-wrap items-baseline justify-between gap-3 border-b pb-4">
          <div>
            <p className="mb-2 text-xs uppercase tracking-widest opacity-70">
              Project
            </p>
            <h2 className="text-3xl">
              <a
                href={project.repository}
                target="_blank"
                rel="noreferrer"
                className="transition-opacity hover:opacity-60"
              >
                {project.title}
              </a>
            </h2>
          </div>
          <a
            href={project.repository}
            target="_blank"
            rel="noreferrer"
            className="text-sm underline underline-offset-4 transition-opacity hover:opacity-60"
          >
            Repository
          </a>
        </header>

        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {project.images.map((image) => (
              <CarouselItem key={image.src}>
                <div className="aspect-16/7 overflow-hidden border">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="max-w-2xl space-y-4">
          <p>{project.content}</p>
          <p className="font-extralight">{project.technologies}</p>
        </div>
      </article>
    );
  }

  if (selectedExperience) {
    const experience = experiences[selectedExperience];

    if (!experience) return null;

    return (
      <article className="w-full space-y-8 text-base leading-relaxed">
        <header className="border-b pb-4">
          <p className="mb-2 text-xs uppercase tracking-widest opacity-70">
            Experience
          </p>
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <div>
              <h2 className="text-3xl">{experience.company}</h2>
              <p className="mt-1">{experience.role}</p>
            </div>
            <p className="text-sm">{experience.period}</p>
          </div>
        </header>

        <div className="max-w-2xl space-y-4">
          <p>{experience.content}</p>
          <p className="font-extralight">{experience.technologies}</p>
        </div>
      </article>
    );
  }

  switch (currentState) {
    case 1:
      return (
        <div className={baseClassName}>
          Hey! I&apos;m a 2nd year student studying Electronic and Computer
          Engineering at the University of York. I am really interested in C++
          and all things software. Right now I&apos;m interning at Zetron.
        </div>
      );

    case 2:
      return (
        <div className={`${baseClassName} space-y-8`}>
          <ExperienceSection title="Professional experience">
            <div>
              {Object.entries(experiences).map(([experienceId, experience]) => (
                <EntryRow
                  key={experienceId}
                  title={experience.company}
                  details={[experience.role, experience.summary, experience.period]}
                  onClick={() => experienceAction?.(experienceId)}
                />
              ))}
            </div>
          </ExperienceSection>

          <ExperienceSection title="Insight days">
            <ul>
              {insightDays.map((day) => (
                <li key={day} className="py-2">
                  {day}
                </li>
              ))}
            </ul>
          </ExperienceSection>

          <ExperienceSection title="Extra-curriculars">
            <ul>
              {extracurriculars.map((activity) => (
                <li key={activity} className="py-2">
                  {activity}
                </li>
              ))}
            </ul>
          </ExperienceSection>
        </div>
      );

    case 3:
      return (
        <div className={baseClassName}>
          {Object.entries(projects).map(([projectId, project]) => (
            <EntryRow
              key={projectId}
              title={project.title}
              details={[project.summary, project.technologies]}
              onClick={() => projectAction?.(projectId)}
            />
          ))}
        </div>
      );

    default:
      return null;
  }
}
