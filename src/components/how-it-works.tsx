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
    <section id="how-it-works" className="py-12 lg:py-20 xl:py-28 2xl:py-32 px-4 sm:px-8 lg:px-10 xl:px-16 2xl:px-20 max-w-6xl xl:max-w-7xl 2xl:max-w-none 2xl:w-screen 2xl:ml-[-50vw] 2xl:pl-[max(50vw,50%)] mx-auto">
      <div className="text-xs lg:text-sm text-gold uppercase tracking-widest font-medium mb-3 sm:mb-4 xl:mb-6">How it works</div>
      <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-tight mb-3 sm:mb-4 max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
        Up and running <em className="italic text-gold">fast</em>
      </h2>
      <p className="text-muted text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl xl:max-w-3xl mb-8 lg:mb-12 xl:mb-16 2xl:mb-20">
        From signup to your first issued receipt in under three minutes.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 lg:gap-0 relative mt-8 lg:mt-12 xl:mt-16 2xl:mt-20">
        {steps.map((step, index) => (
          <div key={step.number} className="relative">
            {/* Connector line - hidden on mobile and tablet */}
            {index < steps.length - 1 && (
              <div
                className="hidden lg:block absolute top-4.5 -right-2 w-full h-px bg-border"
                style={{ width: "calc(100% + 12px)" }}
              ></div>
            )}
            
            {/* Content */}
            <div className="lg:pr-6 xl:pr-8 relative z-10">
              <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 xl:w-12 xl:h-12 border border-border rounded-full flex items-center justify-center font-serif text-xs lg:text-sm xl:text-base text-gold bg-background mb-3 sm:mb-5 xl:mb-6">
                {step.number}
              </div>
              <h3 className="font-serif text-sm sm:text-base lg:text-lg xl:text-lg text-paper mb-2">{step.title}</h3>
              <p className="text-xs lg:text-sm text-muted leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
