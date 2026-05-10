import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — NUVOQUS" },
      {
        name: "description",
        content:
          "NUVOQUS is a Data & AI consultancy specialized in product and growth analytics for SaaS and FinTech & Digital Banking.",
      },
      { property: "og:title", content: "About — NUVOQUS" },
      {
        property: "og:description",
        content: "Pragmatic, ROI-led, governance-first Data & AI consulting.",
      },
    ],
  }),
  component: AboutPage,
});

const principles = [
  {
    t: "Pragmatic",
    d: "Working systems beat polished decks. We ship the smallest thing that proves value, then scale.",
  },
  {
    t: "ROI-led",
    d: "Every initiative is tied to a business metric you'd defend in a board meeting.",
  },
  {
    t: "Governance-first",
    d: "Compliance, ethics, and risk are designed in from day one — not bolted on after launch.",
  },
];

function AboutPage() {
  return (
    <div>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">About</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
            Senior Data &amp; AI counsel, focused on outcomes.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            NUVOQUS is a Data &amp; AI consultancy. We cover the full stack — strategy, governance,
            platform, ML, GenAI, and MLOps — and go deepest where it moves the needle most: product
            and growth analytics for SaaS and FinTech &amp; Digital Banking.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-semibold tracking-tight">
            Why product &amp; growth analytics for SaaS and FinTech?
          </h2>
          <p className="mt-4 text-muted-foreground">
            These industries share something rare: customers who care about data quality, regulators
            who care about model behavior, and product teams who can move quickly. That's where Data
            &amp; AI investment compounds — and where shallow advice fails fastest.
          </p>
          <p className="mt-4 text-muted-foreground">
            For SaaS, that means activation, retention, monetization, and AI features your customers
            actually trust. For FinTech &amp; Digital Banking, it means analytics and models that
            survive audit, regulators, and adversarial users.
          </p>
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Principles</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">How we work.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {principles.map((p) => (
              <div key={p.t} className="rounded-2xl border border-border/60 bg-background/60 p-6">
                <h3 className="text-lg font-medium">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Let's talk.</h2>
        <p className="mt-4 text-muted-foreground">
          A 30-minute conversation is the fastest way to know if we should work together.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href="mailto:info@nuvoqus.com">Email NUVOQUS</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-border bg-transparent">
            <Link to="/services">See services</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
