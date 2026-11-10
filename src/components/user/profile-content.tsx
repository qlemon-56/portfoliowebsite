"use client";

import {
  experiences,
  extracurriculars,
  insightDays,
  projects,
} from "@/lib/portfolio-data";

type ProfileContentProps = {
  currentState: number;
};

const baseClassName = "w-full max-w-2xl text-base leading-relaxed";

type EntryRowProps = {
  title: string;
  details: string[];
  href?: string;
};

function EntryRow({ title, details, href }: EntryRowProps) {
  const content = (
    <>
      <h4 className="font-bold">{title}</h4>
      {details.map((detail, index) => (
        <p
          key={detail}
          className={index === details.length - 1 ? "font-extralight" : undefined}
        >
          {detail}
        </p>
      ))}
    </>
  );

  return (
    <div className="py-2">
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="text-left transition-opacity hover:opacity-60"
        >
          {content}
        </a>
      ) : (
        <div>{content}</div>
      )}
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

export function ProfileContent({ currentState }: ProfileContentProps) {
  switch (currentState) {
    case 1:
      return (
        <div className={baseClassName}>
          Hey! I&apos;m a 2nd year student studying Electronic and Computer
          Engineering at the University of York. I am really interested in C++
          and all things software.
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
                  details={[experience.role, experience.period]}
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

          <ExperienceSection title="Competitions">
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
        <div className={`${baseClassName} space-y-4`}>
          {Object.entries(projects).map(([projectId, project]) => (
            <EntryRow
              key={projectId}
              title={project.title}
              details={[project.summary, project.technologies]}
              href={project.repository}
            />
          ))}
        </div>
      );

    default:
      return null;
  }
}
