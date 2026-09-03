"use client";

import { FormEvent, useRef, useState } from "react";
import { ArrowUpRight, CheckCircle2, Upload } from "lucide-react";
const onboardingEmail = "info@tcmslimited.com";

const uploads = [
  ["passportPhotos", "4 passport photographs", true],
  ["driversLicense", "Current driver's license (Van Sales Reps only)", false],
  ["updatedCv", "Updated CV (if different from the attached CV)", false],
  ["ninSlip", "National Identity Slip (NIN slip)", true],
  ["identityCard", "Voter's Card or National ID Card", true],
  ["guarantorPassport", "Guarantor passport photograph", true],
  ["guarantorId", "Guarantor government ID card", true],
  ["manualGuarantorPages", "Completed and scanned guarantor forms (pages 3-5)", true],
] as const;

export function OnboardingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const [signatures, setSignatures] = useState<Record<string, string>>({});
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const entries = Array.from(form.entries()).map(([key, value]) => `${key}: ${typeof value === "string" ? value : value.name || "Attached"}`).join("\n");
    const signatureLines = Object.keys(signatures).map((key) => `${key}: ${signatures[key] ? "Captured signature image" : "Not signed"}`).join("\n");
    const subject = encodeURIComponent(`Employee onboarding submission - ${form.get("fullName") || "New staff member"}`);
    const body = encodeURIComponent(`${entries}\n${signatureLines}\n\nPlease attach the selected documents and signature images before sending this email.`);
    setSubmitted(true);
    window.location.href = `mailto:${onboardingEmail}?subject=${subject}&body=${body}`;
  }

  if (submitted) return <div className="form-success" role="status"><CheckCircle2 aria-hidden="true" size={32} /><h3>Your onboarding email is ready.</h3><p>Review the prepared message, add the selected files to your email, and press send.</p><button type="button" onClick={() => setSubmitted(false)}>Back to the form</button></div>;

  return <form className="onboarding-form" data-step={step} onSubmit={handleSubmit}>
    <div className="manual-form-download"><strong>Manual guarantor form</strong><ol><li>Download the official guarantor form below.</li><li>Print it or open it on a device, then complete every applicable field by hand.</li><li>Sign where required and scan all completed pages in the original order.</li><li>Combine the scans into one clear PDF and upload that single file below.</li></ol><a href="/tcms-onboarding-pages-3-5.pdf" download>Download the manual form <ArrowUpRight aria-hidden="true" size={16} /></a></div>
    <div className="onboarding-progress" aria-label={`Step ${step} of 4`}><span>Step {step} of 4</span><div><i style={{ width: `${step * 25}%` }} /></div></div>
    <div className="form-section"><p className="eyebrow">Personal details</p><div className="form-grid">
      <Field label="Full names" name="fullName" required /><Field label="Date of completion" name="completionDate" type="date" required />
      <Field label="Residential address" name="address" required /><Field label="Nearest bus stop" name="nearestBusStop" required />
      <Field label="Mobile phone number" name="phone" type="tel" required /><Field label="Email address" name="email" type="email" required />
      <Field label="Date of birth" name="dateOfBirth" type="date" required /><Field label="Gender" name="gender" placeholder="Male / Female" required />
      <Field label="Marital status" name="maritalStatus" required /><Field label="Spouse name" name="spouseName" />
      <Field label="Spouse phone number" name="spousePhone" type="tel" /><Field label="Nationality" name="nationality" required />
      <Field label="State of origin" name="stateOfOrigin" required /><Field label="Local government area" name="lga" required />
    </div></div>
    <div className="form-section"><p className="eyebrow">Role and experience</p><div className="form-grid"><Field label="Position / role" name="position" required /><Field label="Town / location" name="location" required /><Field label="TCMS client interviewed for" name="client" /><Field label="Last company worked for" name="lastCompany" /><Field label="Last company address" name="lastCompanyAddress" /><Field label="Period (from / to)" name="lastCompanyPeriod" /><Field label="Role at last company" name="lastCompanyRole" /><Field label="Reason for leaving" name="reasonForLeaving" /><Field label="Last employer contact name" name="employerContactName" /><Field label="Contact designation" name="employerContactDesignation" /><Field label="Contact phone number" name="employerContactPhone" /><Field label="Contact email" name="employerContactEmail" /></div><Field label="Work experience (last 3 employments)" name="workExperience" as="textarea" placeholder="Company name, year, job title, and roles" /></div>
    <div className="form-section"><p className="eyebrow">Education and contacts</p><div className="form-grid"><Field label="Education background" name="education" as="textarea" placeholder="School attended, year, qualification" /><Field label="Next of kin details" name="nextOfKin" as="textarea" placeholder="Name, relationship, address, phone, email" /><div className="form-field"><SignaturePad label="Next-of-kin signature" name="nextOfKinSignature" onChange={(value) => setSignatures((current) => ({ ...current, nextOfKinSignature: value }))} /></div><Field label="Referees / guarantors" name="referees" as="textarea" placeholder="Name, address, profession, relationship, phone" /><Field label="Emergency contact" name="emergencyContact" /><Field label="Guarantor title and full name" name="guarantorName" placeholder="Mr / Mrs / Alh. / Dr. / Chief" /><Field label="Guarantor residential address" name="guarantorAddress" /><Field label="Guarantor nearest bus stop" name="guarantorBusStop" /><Field label="Guarantor occupation" name="guarantorOccupation" /><Field label="Guarantor office address" name="guarantorOfficeAddress" /><Field label="Guarantor nearest office bus stop" name="guarantorOfficeBusStop" /><Field label="Guarantor phone number(s)" name="guarantorPhone" /><Field label="Guarantor email" name="guarantorEmail" /><Field label="Relationship to employee" name="guarantorRelationship" /><Field label="Applicant name (for guarantee)" name="guaranteeApplicantName" /><Field label="Applicant contact address" name="guaranteeApplicantAddress" /><Field label="Applicant mobile number" name="guaranteeApplicantPhone" /><Field label="Employment capacity / position" name="guaranteeCapacity" /><Field label="Guaranteed amount (N)" name="guaranteedAmount" /><Field label="Guarantor cheque number" name="guarantorChequeNumber" /><Field label="Guarantor bank" name="guarantorBank" /><Field label="Guarantor witness details" name="guarantorWitness" as="textarea" placeholder="Name, address, occupation, phone, email" /></div></div>
    <div className="form-section"><p className="eyebrow">Required uploads</p><div className="upload-grid">{uploads.map(([name, label, required]) => <label className="upload-field" key={name}><span><Upload aria-hidden="true" size={17} />{label}{required ? " *" : ""}</span><input type="file" name={name} required={required} multiple={name === "passportPhotos"} /></label>)}</div><p className="upload-note">Upload clear scans or photographs. The driver&apos;s license field applies only to Van Sales Representatives.</p></div>
    <div className="form-section confirmation-section"><p className="eyebrow">Confirmation and signatures</p><div className="form-grid"><div className="form-field"><SignaturePad label="Employee signature" name="employeeSignature" onChange={(value) => setSignatures((current) => ({ ...current, employeeSignature: value }))} /></div><Field label="Employee signature date" name="employeeSignatureDate" type="date" /><div className="form-field"><SignaturePad label="Guarantor regular signature" name="guarantorSignature" onChange={(value) => setSignatures((current) => ({ ...current, guarantorSignature: value }))} /></div><div className="form-field"><SignaturePad label="TCMS staff verification signature" name="tcmsVerification" onChange={(value) => setSignatures((current) => ({ ...current, tcmsVerification: value }))} /></div><Field label="TCMS verification date" name="tcmsVerificationDate" type="date" /><Field label="Deed of guarantee date" name="guaranteeDate" type="date" /><div className="form-field"><SignaturePad label="Guarantor witness signature" name="witnessSignature" onChange={(value) => setSignatures((current) => ({ ...current, witnessSignature: value }))} /></div><Field label="Witness name in block letters" name="witnessName" /><Field label="Witness occupation" name="witnessOccupation" /><Field label="Witness phone number" name="witnessPhone" /><Field label="Witness address" name="witnessAddress" /><Field label="Witness date" name="witnessDate" type="date" /></div></div><label className="confirmation"><input type="checkbox" name="confirmation" required /> <span>I confirm that the information provided is correct and accurate, and I will notify TCMS promptly if any information changes.</span></label>
    <div className="form-submit-row"><p>Submitting prepares an email in your device&apos;s email app. Add the selected files before sending.</p><div className="onboarding-actions">{step > 1 ? <button className="button button-secondary" type="button" onClick={() => setStep((current) => current - 1)}>Back</button> : null}{step < 4 ? <button className="submit-button" type="button" onClick={() => setStep((current) => current + 1)}>Continue <ArrowUpRight aria-hidden="true" size={17} /></button> : <button className="submit-button" type="submit">Prepare onboarding email <ArrowUpRight aria-hidden="true" size={17} /></button>}</div></div>
  </form>;
}

function SignaturePad({ label, name, onChange }: { label: string; name: string; onChange: (value: string) => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);
  function point(event: React.PointerEvent<HTMLCanvasElement>) { const canvas = canvasRef.current; if (!canvas) return null; const rect = canvas.getBoundingClientRect(); return { x: (event.clientX - rect.left) * (canvas.width / rect.width), y: (event.clientY - rect.top) * (canvas.height / rect.height) }; }
  function start(event: React.PointerEvent<HTMLCanvasElement>) { const canvas = canvasRef.current; const p = point(event); if (!canvas || !p) return; drawing.current = true; canvas.setPointerCapture(event.pointerId); const ctx = canvas.getContext("2d"); if (ctx) { ctx.beginPath(); ctx.moveTo(p.x, p.y); } }
  function move(event: React.PointerEvent<HTMLCanvasElement>) { if (!drawing.current) return; const canvas = canvasRef.current; const p = point(event); const ctx = canvas?.getContext("2d"); if (!canvas || !p || !ctx) return; ctx.lineTo(p.x, p.y); ctx.stroke(); }
  function end() { if (!drawing.current) return; drawing.current = false; onChange(canvasRef.current?.toDataURL("image/png") || ""); }
  function clear() { const canvas = canvasRef.current; const ctx = canvas?.getContext("2d"); if (!canvas || !ctx) return; ctx.clearRect(0, 0, canvas.width, canvas.height); onChange(""); }
  return <div className="signature-pad"><label htmlFor={name}>{label}</label><canvas id={name} ref={canvasRef} width={700} height={180} onPointerDown={start} onPointerMove={move} onPointerUp={end} onPointerCancel={end} /><button type="button" onClick={clear}>Clear signature</button></div>;
}

function Field({ label, name, type = "text", placeholder, required, as }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean; as?: "textarea" }) {
  return <div className={`form-field${as ? " form-field-wide" : ""}`}><label htmlFor={name}>{label}{required ? <span aria-hidden="true"> *</span> : null}</label>{as ? <textarea id={name} name={name} rows={4} placeholder={placeholder} required={required} /> : <input id={name} name={name} type={type} placeholder={placeholder} required={required} />}</div>;
}
