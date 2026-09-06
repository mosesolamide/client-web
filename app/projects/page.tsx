import type { Metadata } from "next";
import { ArrowDownRight } from "lucide-react";
import { CTASection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { engagementTypes } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Work",
  description: "See how TCMS structures strategy, activation, market expansion, research, and audit engagements.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Our work" title="Work designed to perform beyond the presentation." description="We build practical engagements around the outcomes our clients need in the market." />
      <section className="section work-section">
        <div className="container">
          <div className="split-heading">
            <SectionHeading eyebrow="Engagements" title="How our capabilities come together." />
            <p>TCMS services by geography, channel, and scale. These are the core ways we help teams turn plans into progress.</p>
          </div>
          <div className="work-grid">
            {engagementTypes.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="work-card">
                  <div className="work-card-top"><span>{item.number}</span><Icon aria-hidden="true" /></div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <ArrowDownRight className="work-arrow" aria-hidden="true" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section proof-process">
        <div className="container proof-process-grid">
          <div>
            <p className="eyebrow">What a good engagement includes</p>
            <h2>Accountable from the brief to the learning.</h2>
          </div>
          <div className="deliverables-list">
            <div><span>01</span><h3>A shared definition of success</h3><p>Clear objectives, audiences, channels, responsibilities, and measures before execution begins.</p></div>
            <div><span>02</span><h3>Market-aware planning</h3><p>An approach grounded in local trade dynamics, distribution realities, and consumer behaviour.</p></div>
            <div><span>03</span><h3>Coordinated delivery</h3><p>Teams, logistics, materials, and reporting connected through one accountable working rhythm.</p></div>
            <div><span>04</span><h3>Useful insight</h3><p>Practical reporting that helps teams understand performance and decide what to do next.</p></div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
