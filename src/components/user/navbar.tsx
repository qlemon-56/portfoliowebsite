type NavbarProps = {
  currentState: number;
  setCurrentState: (state: number) => void;
};

const navItems = [
  { label: "About me", state: 1 },
  { label: "Experience", state: 2 },
  { label: "Projects", state: 3 },
];

export function Navbar({ currentState, setCurrentState }: NavbarProps) {
  return (
    <nav className="w-full flex items-center space-x-5 pl-5 border-gray-200">
      {navItems.map(({ label, state }) => {
        const isActive = currentState === state;

        return (
          <button
            key={state}
            type="button"
            onClick={() => setCurrentState(state)}
            className={`cursor-pointer p-2 transition-all duration-150 ease-in-out ${
              isActive ? "opacity-100 border-b-3" : "hover:opacity-60"
            }`}
          >
            {label}
          </button>
        );
      })}
    </nav>
  );
}
