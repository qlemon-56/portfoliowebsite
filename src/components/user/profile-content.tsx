type ProfileContentProps = {
  currentState: number;
};

const baseClassName = "w-2/3 text-base leading-relaxed";

export function ProfileContent({ currentState }: ProfileContentProps) {
  switch (currentState) {
    case 1:
      return (
        <div className={baseClassName}>
          Hey! I'm a 2nd year student studying Electronic and Computer Engineering
          at the University of York. I am really interested in C++ and all things
          software. Right now I'm interning at Zetron.
        </div>
      );

    case 2:
      return <div className={baseClassName} />;

    case 3:
      return (
        <div className={baseClassName}>
          <div className="border-y h-40 mt-2 pt-2">
            <h4 className="font-bold">Model To Market</h4>
            <p className="h-20">
              Trading hackathon where I built a Z score mean reversion bot.
            </p>
            <div className="font-extralight">
              Python - MT5 API - Claude Agents
            </div>
          </div>
        </div>
      );

    case 4:
      return (
        <div className={baseClassName}>
          <ul className="space-y-1">
            {[
              "@ Meet UBS",
              "Me @AI Engine's Model to Market Hackathon",
              "Me @Deutsche Bank",
              "Me @Manchester Formula Fusion 2026",
              "Me @Silverstone - FSUK 2026",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      );

    default:
      return null;
  }
}
