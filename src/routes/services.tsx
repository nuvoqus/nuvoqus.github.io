import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Compass,
  ShieldCheck,
  Settings2,
  Database,
  Users,
  ArrowRight,
  LineChart,
  Sparkles,
  Target,
  Banknote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | NUVOQUS Data & AI Consultancy" },
      {
        name: "description",
        content:
          "Full-spectrum Data & AI services with a specialized product and growth analytics practice for SaaS and FinTech & Digital Banking.",
      },
      { property: "og:title", content: "Services | NUVOQUS" },
      {
        property: "og:description",
        content:
          "Strategy, governance, data platform, ML, GenAI, and MLOps, plus deep product and growth analytics for SaaS and FinTech.",
      },
    ],
  }),
  component: ServicesPage,
});

const core = [
  {
    icon: Compass,
    title: "Data & AI Strategy",
    bullets: [
      "AI maturity assessment and capability benchmarking",
      "Use-case discovery, ROI scoring, and prioritization",
      "Multi-quarter Data & AI roadmap aligned to business goals",
      "Build-vs-buy, vendor selection, and reference architectures",
      "Operating model and target operating-model design",
    ],
  },
  {
    icon: ShieldCheck,
    title: "AI Governance, Risk & Compliance",
    bullets: [
      "EU AI Act readiness, risk classification, and conformity",
      "Model risk management aligned to SR 11-7 / EBA guidelines",
      "GDPR, data residency, consent, and DPIA support",
      "Bias, fairness, explainability, and human-oversight policies",
      "AI policy, acceptable-use, and vendor due-diligence frameworks",
    ],
  },
  {
    icon: Database,
    title: "Data Platform & Engineering",
    bullets: [
      "Warehouse, lakehouse, and streaming architecture",
      "ELT/ETL with dbt, Airflow/Dagster, and Spark",
      "Event modeling, semantic layer, and metric trees",
      "Data contracts, quality testing, and observability",
      "Master data, customer 360, and identity resolution",
    ],
  },
  {
    icon: LineChart,
    title: "Analytics Engineering & BI",
    bullets: [
      "Self-serve BI on Looker, Lightdash, Metabase, or Power BI",
      "KPI frameworks, North Star metric, and metric trees",
      "Experimentation platform and causal inference",
      "Embedded and customer-facing analytics",
      "Reverse ETL and activation into product/marketing tools",
    ],
  },
  {
    icon: Sparkles,
    title: "Machine Learning & Generative AI",
    bullets: [
      "Predictive models: churn, LTV, propensity, forecasting",
      "Recommender systems and personalization",
      "LLM applications, RAG, and agentic workflows",
      "Evaluation harnesses, guardrails, and prompt management",
      "Computer vision and document AI where it fits",
    ],
  },
  {
    icon: Settings2,
    title: "MLOps & ModelOps",
    bullets: [
      "CI/CD for models, feature stores, and registries",
      "Online/offline serving and inference cost optimization",
      "Drift, performance, and quality monitoring",
      "Incident response, rollback, and on-call playbooks",
      "Reproducibility, lineage, and model documentation",
    ],
  },
  {
    icon: Users,
    title: "Organization, Enablement & Change",
    bullets: [
      "Org design, hiring plans, and role definitions",
      "Data and AI literacy programs for product, ops, and exec",
      "Workflow redesign around AI assistance",
      "Adoption metrics, feedback loops, and governance rituals",
      "Fractional Head of Data / AI leadership",
    ],
  },
];

const productGrowthSaas = [
  "Tracking plan, event taxonomy, and warehouse-native CDP (Segment / RudderStack / Snowplow)",
  "Activation and onboarding funnels with time-to-value measurement",
  "Product Qualified Lead (PQL) and Product Qualified Account (PQA) scoring",
  "Retention cohorts, engagement scoring, and feature adoption analytics",
  "Churn and expansion prediction models wired into CS and sales workflows",
  "Pricing, packaging, and monetization analytics; usage-based billing telemetry",
  "Experimentation platform: A/B, holdouts, switchback, and causal uplift",
  "North Star metric, input-metric trees, and exec/board reporting",
  "AI copilots and in-product intelligence with eval-driven release process",
];

const productGrowthFintech = [
  "Acquisition and onboarding analytics: KYC/KYB drop-off, time-to-fund, conversion",
  "Segmentation, LTV, CAC payback, and unit economics modeling",
  "Engagement, primary-account, deposit, transaction, and interchange analytics",
  "Credit risk, application/behavioral scorecards, and limit-management models",
  "Fraud, AML, and transaction-monitoring models with explainability and audit trail",
  "Regulatory-grade lineage, model documentation, and challenger-model governance",
  "Customer-facing financial insights and personalized money-management features",
  "Open-banking and PSD2 data ingestion, enrichment, and categorization",
  "Marketing-mix and incrementality measurement under privacy constraints",
];

const formats = [
  {
    t: "Advisory sprint",
    d: "2 to 4 weeks. Diagnose a specific problem and deliver a clear recommendation.",
  },
  {
    t: "Strategy & roadmap",
    d: "6 to 8 weeks. Full assessment, prioritized roadmap, and execution plan.",
  },
  {
    t: "Hands-on build",
    d: "8 to 16 weeks. Embedded delivery of a flagship use case with your team.",
  },
  {
    t: "Fractional Head of Data/AI",
    d: "Ongoing. Senior leadership coverage at a fraction of the cost.",
  },
];

function ServicesPage() {
  return (
    <div>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Services</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Full-spectrum Data &amp; AI. Specialized where it matters most.
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground md:text-lg">
            NUVOQUS covers the entire Data &amp; AI value chain, including strategy, governance,
            platform, ML, GenAI, MLOps, and enablement. Our deepest specialization is product and
            growth analytics for SaaS and FinTech &amp; Digital Banking.
          </p>
        </div>
      </section>

      {/* Core services */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">Core practice</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Everything you need across Data &amp; AI.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {core.map(({ icon: Icon, title, bullets }) => (
            <div key={title} className="rounded-2xl border border-border/60 bg-card/40 p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <ul className="mt-4 space-y-2">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 inline-block h-1 w-1 flex-none rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Specialized */}
      <section className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="flex items-center gap-3">
            <Target className="h-5 w-5 text-primary" />
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Specialized practice</p>
          </div>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
            Product &amp; Growth Analytics, built for SaaS and FinTech &amp; Digital Banking.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            This is where NUVOQUS goes deepest: industry-specific playbooks, models, and metric
            frameworks that move activation, retention, monetization, and unit economics.
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-background/60 p-8">
              <div className="flex items-center gap-3">
                <LineChart className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">SaaS product &amp; growth analytics</h3>
              </div>
              <ul className="mt-4 space-y-2">
                {productGrowthSaas.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 inline-block h-1 w-1 flex-none rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border/60 bg-background/60 p-8">
              <div className="flex items-center gap-3">
                <Banknote className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">
                  FinTech &amp; Digital Banking product &amp; growth analytics
                </h3>
              </div>
              <ul className="mt-4 space-y-2">
                {productGrowthFintech.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 inline-block h-1 w-1 flex-none rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">Engagement formats</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Flexible ways to work together.
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {formats.map((f) => (
            <div key={f.t} className="rounded-2xl border border-border/60 bg-card/40 p-6">
              <h3 className="text-lg font-medium">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-20 md:py-24">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">FAQ</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Common questions.
        </h2>
        <Accordion type="single" collapsible className="mt-8">
          <AccordionItem value="ai-act">
            <AccordionTrigger>How do you handle EU AI Act compliance?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Each use case is classified by risk tier, mapped to required controls (documentation,
              human oversight, monitoring), and reviewed against your existing privacy and security
              posture.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="bias">
            <AccordionTrigger>What about bias and model risk?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              We define evaluation datasets, fairness metrics, and review gates proportionate to the
              decision the model influences, aligned to model-risk frameworks like SR 11-7 and EBA
              guidelines for FinTech.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="mlops">
            <AccordionTrigger>
              Do you build MLOps from scratch or use existing stacks?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Both. The right answer depends on your scale and team. We pick boring, proven tools
              first and only build custom where there's a clear reason.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="genai">
            <AccordionTrigger>Where does GenAI actually pay off?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              In SaaS: in-product copilots, support deflection, and content generation. In FinTech:
              customer support, document processing, KYC/KYB enrichment, and analyst productivity.
              We size each opportunity against measurable ROI before building.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-16 flex flex-wrap justify-center gap-3">
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
            <Link to="/about">About NUVOQUS</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
