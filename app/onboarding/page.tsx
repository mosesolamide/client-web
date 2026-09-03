import type { Metadata } from "next";
import { OnboardingForm } from "@/components/forms/onboarding-form";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = { title: "Staff onboarding", description: "Complete your TCMS Limited staff onboarding form and submit the required documents." };

export default function OnboardingPage() {
  return <><PageHero eyebrow="Staff onboarding" title="Your details, in one place." description="Complete the onboarding form and prepare your information and required documents for the TCMS team." /><section className="section onboarding-section"><div className="container"><div className="form-panel"><div className="form-panel-heading"><p className="eyebrow">Employee information</p><h2>Complete your onboarding details.</h2></div><OnboardingForm /></div></div></section></>;
}
