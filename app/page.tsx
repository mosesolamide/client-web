import Image, { getImageProps } from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MapPin } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceGrid } from "@/components/sections/service-grid";
import { CTASection } from "@/components/sections/cta-section";
import { values } from "@/data/site";

function HeroPicture() {
  const common = {
    alt: "A TCMS strategy team in a planning session",
    sizes: "100vw",
    quality: 90,
    loading: "eager" as const,
    fetchPriority: "high" as const,
  };
  const {
    props: { srcSet: desktop },
  } = getImageProps({ ...common, src: "/images/hero-team-latest.png", width: 2001, height: 786 });
  const {
    props: { srcSet: mobile, alt, ...rest },
  } = getImageProps({ ...common, src: "/images/hero-team-mobile-latest.png", width: 941, height: 1672 });

  return (
    <picture className="hero-picture">
      <source media="(min-width: 821px)" srcSet={desktop} />
      <source media="(max-width: 820px)" srcSet={mobile} />
      <img {...rest} alt={alt} />
    </picture>
  );
}

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-background">
          <HeroPicture />
        </div>
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="hero-kicker"><span aria-hidden="true" /><span>Trade &amp; consumer marketing across Nigeria</span></div>
          <h1>Turning market opportunity into <em>measurable growth.</em></h1>
          <div className="hero-bottom">
            <p>We help ambitious brands strengthen channels, engage consumers, and execute with confidence from strategy to the street.</p>
            <div className="hero-actions">
              <ButtonLink href="/contact" variant="light">Discuss your goals</ButtonLink>
              <Link className="text-link-light" href="/services">Explore our services <ArrowRight aria-hidden="true" size={17} /></Link>
            </div>
          </div>
        </div>
        <div className="container hero-proof">
          <div><strong>10+</strong><span>Years of market experience</span></div>
          <div><strong>89%</strong><span>Client satisfaction reported</span></div>
          <div><MapPin aria-hidden="true" /><span>Headquartered in Lagos</span></div>
        </div>
      </section>

      <section className="section services-preview">
        <div className="container">
          <div className="split-heading">
            <SectionHeading eyebrow="What we do" title="One partner from market thinking to market execution." />
            <p>TCMS combines commercial strategy, consumer understanding, field capability, and distribution support to help brands move with focus.</p>
          </div>
          <ServiceGrid limit={6} />
        </div>
      </section>

      <section className="section about-split">
        <div className="container about-split-grid">
          <div className="about-image-wrap">
            <div className="about-image-frame">
              <Image src="/images/about-team-fresh.png" alt="A collaborative TCMS team in Lagos" fill quality={90} sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
          </div>
          <div className="about-copy">
            <SectionHeading eyebrow="About TCMS" title="Local market fluency. Long-term partnership." />
            <p>At Trade and Consumer Marketing Services Limited, we are more than a marketing agency — we are a partner in trade and consumer engagement.</p>
            <p>For over a decade, we have worked with local and international brands to connect strategy, activation, logistics, and market execution.</p>
            <ul className="check-list">
              <li><Check aria-hidden="true" /> Deep understanding of the Nigerian FMCG landscape</li>
              <li><Check aria-hidden="true" /> End-to-end support from planning through delivery</li>
              <li><Check aria-hidden="true" /> Creative thinking informed by practical market insight</li>
            </ul>
            <ButtonLink href="/about-us" variant="secondary">Meet TCMS</ButtonLink>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <SectionHeading eyebrow="How we work" title="Principles you can feel in every engagement." description="Our values shape the way we think, collaborate, and deliver." />
          <div className="values-row">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <article key={value.title} className="value-card">
                  <div><span>0{index + 1}</span><Icon aria-hidden="true" size={21} /></div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container process-grid">
          <div className="process-heading">
            <p className="eyebrow">Our approach</p>
            <h2>Clear thinking.<br />Connected delivery.</h2>
          </div>
          <ol className="process-list">
            <li><span>01</span><div><h3>Understand</h3><p>Get close to the business goal, audience, channel, and market reality.</p></div></li>
            <li><span>02</span><div><h3>Design</h3><p>Shape a focused, practical plan with clear responsibilities and deliverables.</p></div></li>
            <li><span>03</span><div><h3>Deliver</h3><p>Coordinate people, materials, distribution, and consumer touchpoints.</p></div></li>
            <li><span>04</span><div><h3>Learn</h3><p>Review execution, gather insight, and identify the next possible action steps.</p></div></li>
          </ol>
        </div>
      </section>

      <CTASection />
    </>
  );
}
