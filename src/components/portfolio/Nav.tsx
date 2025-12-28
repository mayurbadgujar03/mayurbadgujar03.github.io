export const Nav = () => {
  return (
    <nav className="flex items-center gap-6">
      <a
        href="#skills"
        className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-all"
      >
        Skills
      </a>
      {/* <a
        href="#career"
        className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-all"
      >
        Career
      </a> */}
      <a
        href="#projects"
        className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-all"
      >
        Projects
      </a>
    </nav>
  );
};
