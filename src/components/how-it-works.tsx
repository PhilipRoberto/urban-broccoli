interface Step {
  number: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Create your business",
    description: "Add your business name, logo, contact details and signature. Takes two minutes."
  },
  {
    number: 2,
    title: "Add your customer",
    description: "Input customer name, email and phone. Save to reuse on every receipt."
  },
  {
    number: 3,
    title: "Create your receipt",
    description: "Add line items with prices. Totals calculate automatically. Takes 90 seconds."
  },
  {
    number: 4,
    title: "Send or download",
    description: "WhatsApp, email, PDF download, or print. Your customer receives it instantly."
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-10 max-w-6xl mx-auto">
      <div className="text-xs text-gold uppercase tracking-widest font-medium mb-4">How it works</div>
      <h2 className="font-serif text-4xl leading-tight mb-4 max-w-2xl">
        Up and running <em className="italic text-gold">fast</em>
      </h2>
      <p className="text-muted text-base leading-relaxed max-w-2xl mb-12">
        From signup to your first issued receipt in under three minutes.
      </p>

      <div className="grid grid-cols-4 gap-0 relative mt-12">
        {steps.map((step, index) => (
          <div key={step.number} className="relative">
            {/* Connector line */}
            {index < steps.length - 1 && (
              <div
                className="absolute top-4.5 -right-2 w-full h-px bg-border"
                style={{ width: "calc(100% + 12px)" }}
              ></div>
            )}
            
            {/* Content */}
            <div className="pr-6 relative z-10">
              <div className="w-9 h-9 border border-border rounded-full flex items-center justify-center font-serif text-xs text-gold bg-background mb-5">
                {step.number}
              </div>
              <h3 className="font-serif text-base text-paper mb-2">{step.title}</h3>
              <p className="text-xs text-muted leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
