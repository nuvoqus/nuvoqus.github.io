import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Compass,
  ShieldCheck,
  Settings2,
  Database,
  Users,
  LineChart,
  Banknote,
  Sparkles,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NUVOQUS | Data & AI Consultancy for SaaS and FinTech" },
      {
        name: "description",
        content:
          "End-to-end Data & AI consultancy. Specialized in product and growth analytics for SaaS and FinTech & Digital Banking.",
      },
      { property: "og:title", content: "NUVOQUS | Data & AI Consultancy" },
      {
        property: "og:description",
        content:
          "End-to-end Data & AI. Specialized in product and growth analytics for SaaS and FinTech & Digital Banking.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "NUVOQUS",
          description:
            "End-to-end Data & AI consultancy with deep specialization in product and growth analytics for SaaS and FinTech & Digital Banking.",
          email: "info@nuvoqus.com",
          areaServed: ["EMEA", "North America"],
          serviceType: [
            "Data & AI Strategy",
            "AI Governance",
            "MLOps & ModelOps",
            "Data Engineering & Platform",
            "Analytics Engineering",
            "Product Analytics",
            "Growth Analytics",
            "Generative AI",
            "Change Management",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const pillars = [
  {
    icon: Compass,
    title: "Data & AI Strategy",
    desc: "Roadmaps, ROI cases, and operating models that turn AI ambition into measurable business outcomes.",
  },
  {
    icon: ShieldCheck,
    title: "AI Governance & Risk",
    desc: "EU AI Act, GDPR, model risk management, fairness, and explainability, designed in from day one.",
  },
  {
    icon: Database,
    title: "Data Platform & Engineering",
    desc: "Modern warehouses, lakehouses, streaming, semantic layers, and reliable pipelines with data contracts.",
  },
  {
    icon: LineChart,
    title: "Analytics & BI",
    desc: "Metric trees, experimentation, decision dashboards, and self-serve analytics teams actually trust.",
  },
  {
    icon: Sparkles,
    title: "Machine Learning & GenAI",
    desc: "Predictive models, recommender systems, LLM apps, RAG, and agentic workflows, built for production from end to end.",
  },
  {
    icon: Settings2,
    title: "MLOps & ModelOps",
    desc: "CI/CD for models, feature stores, evaluation harnesses, monitoring, and incident response playbooks.",
  },
  {
    icon: Users,
    title: "Org Design & Enablement",
    desc: "Team structures, hiring plans, training, and adoption programs so AI sticks beyond the pilot.",
  },
  {
    icon: Target,
    title: "Product & Growth Analytics",
    desc: "Specialized practice for SaaS and FinTech: activation, retention, monetization, LTV, and growth loops.",
  },
];

const steps = [
  {
    n: "01",
    t: "Discover",
    d: "Audit data, models, processes, and goals to find the highest-leverage opportunities.",
  },
  {
    n: "02",
    t: "Design",
    d: "Co-create a roadmap with prioritized use cases, governance, and success metrics.",
  },
  { n: "03", t: "Deliver", d: "Ship pilots and production systems hands-on with your team." },
  {
    n: "04",
    t: "Operate",
    d: "Establish MLOps, monitoring, and rituals so value compounds over time.",
  },
];

function Index() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-36">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Data &amp; AI Consultancy
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            End-to-end Data &amp; AI, with deep expertise in{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              product &amp; growth analytics
            </span>{" "}
            for SaaS and FinTech.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            NUVOQUS brings strategy, governance, data platforms, machine learning, GenAI, and
            adoption into one integrated practice.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href="mailto:info@nuvoqus.com">
                Start a conversation <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border bg-transparent">
              <Link to="/services">Explore services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">What we do</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            One integrated Data &amp; AI practice.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Most teams stitch together strategy, engineering, governance, and analytics from
            different vendors. NUVOQUS delivers them as one coherent engagement.
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border/60 bg-card/40 p-6 transition-colors hover:border-primary/50 hover:bg-card"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-medium text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Specialized practice</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Product &amp; growth analytics for SaaS, FinTech &amp; Digital Banking.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Two industries where data quality, regulatory pressure, and product velocity collide.
              We bring playbooks built specifically for them.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-background/60 p-8">
              <div className="flex items-center gap-3">
                <LineChart className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">SaaS</h3>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                <li>Event taxonomy, tracking plans, and warehouse-native CDP</li>
                <li>Activation, onboarding funnels, and PQL/PQA scoring</li>
                <li>Retention cohorts, churn prediction, and expansion signals</li>
                <li>Pricing, packaging, and monetization analytics</li>
                <li>Experimentation platforms and causal measurement</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border/60 bg-background/60 p-8">
              <div className="flex items-center gap-3">
                <Banknote className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">FinTech &amp; Digital Banking</h3>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                <li>Onboarding, KYC drop-off, and conversion analytics</li>
                <li>Customer segmentation, LTV, and CAC payback modeling</li>
                <li>Engagement, primary-account, and deposit-growth analytics</li>
                <li>Credit, fraud, and AML model design with audit trail</li>
                <li>Regulatory-ready reporting, lineage, and model documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">How we work</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            A focused four-step engagement.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border/60 bg-card/40 p-6">
              <div className="text-sm font-mono text-primary">{s.n}</div>
              <h3 className="mt-3 text-lg font-medium">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Ready to make Data &amp; AI a real part of your product?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Tell us what you're building. We'll come back with a focused recommendation within one
            business day.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href="mailto:info@nuvoqus.com">info@nuvoqus.com</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
