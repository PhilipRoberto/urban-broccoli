interface Step {
  number: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Create your business",
    description:
      "Add your business name, logo, contact details and signature. Takes two minutes.",
  },
  {
    number: 2,
    title: "Add your customer",
    description:
      "Input customer name, email and phone. Save to reuse on every receipt.",
  },
  {
    number: 3,
    title: "Create your receipt",
    description:
      "Add line items with prices. Totals calculate automatically. Takes 90 seconds.",
  },
  {
    number: 4,
    title: "Send or download",
    description:
      "WhatsApp, email, PDF download, or print. Your customer receives it instantly.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="flex justify-center items-center border border-[#2a2820] py-20"
    >
      <div className="w-2/3 py-20 flex flex-col gap-4">
        <h3 className="text-[#c9973a] text-xl font-medium">HOW IT WORKS</h3>
        <h2 className="text-5xl font-serif">
          Up and running <span className="text-[#c9973a] italic">fast</span>
        </h2>
        <p className="text-xl text-[#312f26]">
          From signup to your first issued receipt in under three minutes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 lg:gap-0 relative mt-8 lg:mt-12 xl:mt-16 2xl:mt-20">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line - hidden on mobile and tablet */}
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-6 -right-2 w-full h-px bg-[#2a2820]"
                  style={{ width: "calc(100% + 12px)" }}
                ></div>
              )}

              {/* Content */}
              <div className="lg:pr-6 xl:pr-8 relative z-10">
                <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 xl:w-12 xl:h-12 border border-[#2a2820] rounded-full flex items-center justify-center font-serif text-xs lg:text-sm xl:text-base text bg-background mb-3 sm:mb-5 xl:mb-6">
                  <span className="text-[#c9973a]">{step.number}</span>
                </div>
                <h3 className="font-serif text-sm sm:text-base lg:text-lg xl:text-lg text-paper mb-2">
                  {step.title}
                </h3>
                <p className="text-xs lg:text-sm leading-relaxed text-[#312f26]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
          {/* <div className="w-full border border-[#2a2820]" /> */}
        </div>
      </div>
    </section>
  );
}
