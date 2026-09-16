type InterestSidebarProps = {
  textSecondary: string;
};

const interestLinks = [
  { label: "books", href: "https://www.google.com" },
  { label: "podcasts", href: "https://www.google.com" },
  { label: "creators", href: "https://www.google.com" },
];

export function InterestSidebar({ textSecondary }: InterestSidebarProps) {
  return (
    <aside id="areatwo" className="w-1/4 flex-auto overflow-hidden pl-5 ml-2 border">
      <div className="w-full pt-5">
        <span className="font-bold">interests</span>
        <div style={{ color: textSecondary }} className="space-y-1">
          {interestLinks.map(({ label, href }) => (
            <div key={label}>
              <a
                href={href}
                className="transition-all duration-150 ease-in-out hover:text-myGold"
              >
                {label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
