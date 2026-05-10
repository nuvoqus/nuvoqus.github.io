import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-primary" />
            <span className="text-sm font-semibold tracking-[0.18em] text-foreground">NUVOQUS</span>
          </div>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            End-to-end Data &amp; AI consultancy. Specialized in product &amp; growth analytics for
            SaaS and FinTech &amp; Digital Banking.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <Link to="/about" className="hover:text-foreground">
            About
          </Link>
          <Link to="/services" className="hover:text-foreground">
            Services
          </Link>
          <Link to="/contact" className="hover:text-foreground">
            Contact
          </Link>
          <a href="mailto:info@nuvoqus.com" className="hover:text-foreground">
            info@nuvoqus.com
          </a>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto w-full max-w-6xl px-6 py-4 text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} NUVOQUS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
