const footerLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mark-imade/",
  },
  {
    label: "Github",
    href: "https://github.com/qlemon-56",
  },
  {
    label: "Resume",
    href: "/Resume_Imade_Mark.pdf",
  },
  {
    label: "markimade01@gmail.com",
    href: "mailto:markimade01@gmail.com",
  },
];

export function PageFooter() {
  return (
    <footer className="bottom-0 mt-2 border h-5%">
      <div className="flex justify-between text-xs">
        <span className="ml-5">© Mark Imade 2026</span>
        <div className="flex space-x-4">
          {footerLinks.map(({ label, href }) => {
            const isExternal = href.startsWith("http");

            return (
              <a
                key={label}
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className="border-b-2 border-transparent transition-all duration-150 ease-in-out hover:text-gray-300 hover:border-white"
              >
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
