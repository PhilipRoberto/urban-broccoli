interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: "Line item receipts",
    description: "Add multiple products with quantity and unit price. Totals calculate automatically.",
    icon: "M3 9h18M9 21V9M3 3h18v18H3z"
  },
  {
    title: "Multiple businesses",
    description: "Manage all your businesses from one account. Each gets its own branding and receipts.",
    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
  },
  {
    title: "Signed receipts",
    description: "Upload your signature once. It appears on every receipt you issue — automatically.",
    icon: "M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"
  },
  {
    title: "QR verification",
    description: "Every receipt has a unique QR code. Customers scan to view the authentic hosted version.",
    icon: "M3 11h18v11H3zM7 11V7a5 5 0 0110 0v4"
  },
  {
    title: "Customer directory",
    description: "Save customer info once, reuse on every receipt. Your records, organised by business.",
    icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
  },
  {
    title: "Status tracking",
    description: "Know when a receipt was issued, viewed, and acknowledged. Full audit trail.",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5z"
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-12 lg:py-20 xl:py-28 2xl:py-32 px-4 sm:px-8 lg:px-10 xl:px-16 2xl:px-20 max-w-6xl xl:max-w-7xl 2xl:max-w-none 2xl:w-screen 2xl:ml-[-50vw] 2xl:pl-[max(50vw,50%)] mx-auto">
      <div className="text-xs lg:text-sm text-gold uppercase tracking-widest font-medium mb-3 sm:mb-4 xl:mb-6">Features</div>
      <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-tight mb-3 sm:mb-4 max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
        Everything a receipt <em className="italic text-gold">needs</em>
      </h2>
      <p className="text-muted text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl xl:max-w-3xl mb-8 lg:mb-12 xl:mb-16 2xl:mb-20">
        No more handwritten notes or generic invoices. Give every sale a professional record your customers keep.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden">
        {features.map((feature) => (
          <div key={feature.title} className="bg-background p-5 sm:p-6 lg:p-8 xl:p-10 2xl:p-12 hover:bg-black/30 transition-colors">
            <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 border border-border rounded flex items-center justify-center mb-4 sm:mb-5 xl:mb-6">
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 lg:w-5 lg:h-5 stroke-gold fill-none stroke-1.5 stroke-linecap-round stroke-linejoin-round"
              >
                <path d={feature.icon} />
              </svg>
            </div>
            <h3 className="font-serif text-sm sm:text-base lg:text-lg xl:text-lg text-paper mb-2">{feature.title}</h3>
            <p className="text-xs lg:text-sm text-muted leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
