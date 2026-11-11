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
        <div className={`${baseClassName} space-y-4`}>
          <p>
            Hey! I&apos;m a second-year Electronic and Computer Engineering student at
            the University of York, interested in circuit design and C++ for high-performance applications.
          </p>
          <p>
            Right now, I&apos;m involved in a few student societies. I volunteer
            as a software developer for YCC, work on electronics as part of York
            Formula Student, and write finance articles for the York Trading
            Society.
          </p>
          <p>
            In the next few years, I&apos;d love to work in a field that blends my
            interests of programming and math and pushes me to keep learning.
          </p>
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
