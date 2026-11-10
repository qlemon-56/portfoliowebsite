const skillGroups = [
  {
    label: "languages",
    skills: ["C++", "C", "Python", "VHDL", "TypeScript", "JavaScript", "C#"],
  },
  {
    label: "systems & embedded",
    skills: ["Embedded C/C++", "STM32", "Digital Logic"],
  },
  {
    label: "tools",
    skills: ["Git", "KiCAD", "Autodesk Fusion", "LTSpice", "Xilinx Vivado", "MATLAB"],
  },
];

export function InterestSidebar() {
  return (
    <aside
      id="areatwo"
      aria-label="Skills"
      className="mt-2 min-h-0 min-w-0 flex-[1] overflow-y-auto border pl-5 sm:ml-2 sm:mt-0"
    >
      <div className="w-full space-y-5 pt-5 pr-4">
        <div className="flex items-center gap-3">
          <h2 className="shrink-0 text-xl font-bold">skills</h2>
          <div className="h-px flex-1 bg-white/40" />
        </div>

        {skillGroups.map((group) => (
          <section
            key={group.label}
            className="space-y-1.5 border-b border-white/15 pb-4 last:border-b-0"
          >
            <h3 className="text-xs uppercase tracking-widest text-white/60">
              {group.label}
            </h3>
            <ul className="flex flex-wrap gap-x-2 text-base leading-relaxed">
              {group.skills.map((skill, index) => (
                <li key={skill} className="whitespace-nowrap">
                  {skill}
                  {index < group.skills.length - 1 && (
                    <span aria-hidden="true" className="pl-2 text-white/40">
                      ·
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </aside>
  );
}
