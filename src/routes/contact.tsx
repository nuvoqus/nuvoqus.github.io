import { createFileRoute } from "@tanstack/react-router";
import { Mail, ArrowRight, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | NUVOQUS" },
      {
        name: "description",
        content: "Get in touch with NUVOQUS. Typical reply within one business day.",
      },
      { property: "og:title", content: "Contact | NUVOQUS" },
      { property: "og:description", content: "Email NUVOQUS to start a Data & AI conversation." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
      <div className="relative mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">Contact</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
          Let's build something useful.
        </h1>
        <p className="mt-6 max-w-xl text-muted-foreground md:text-lg">
          Tell me about your product, your data, and where you'd like AI to help. Typical reply
          within one business day.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href="mailto:info@nuvoqus.com?subject=NUVOQUS%20engagement">
              <Mail className="mr-2 h-4 w-4" /> info@nuvoqus.com
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-border bg-transparent">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </a>
          </Button>
        </div>

        <div className="mt-16 grid w-full gap-4 text-left md:grid-cols-3">
          {[
            { t: "Where", d: "Remote-first, working with teams across Europe and North America." },
            { t: "When", d: "Booking engagements approximately 4 weeks out." },
            {
              t: "What to send",
              d: "A few lines on your product, team size, and the problem you're solving.",
            },
          ].map((b) => (
            <div key={b.t} className="rounded-2xl border border-border/60 bg-card/40 p-5">
              <div className="text-xs uppercase tracking-[0.18em] text-primary">{b.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
