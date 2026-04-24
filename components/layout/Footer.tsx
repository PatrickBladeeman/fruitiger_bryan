export function Footer() {
  return (
    <footer className="border-t border-glass-border/70 py-8">
      <div className="container-max text-sm text-navy-deep/70">
        <p>© {new Date().getFullYear()} Bryan Portfolio. Built with Next.js.</p>
      </div>
    </footer>
  );
}
