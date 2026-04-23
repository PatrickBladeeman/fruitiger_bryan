export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8">
      <div className="container-max text-sm text-slate-600">
        <p>© {new Date().getFullYear()} Bryan Portfolio. Built with Next.js.</p>
      </div>
    </footer>
  );
}
