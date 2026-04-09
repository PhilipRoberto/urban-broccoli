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
    <section id="features" className="py-20 px-10 max-w-6xl mx-auto">
      <div className="text-xs text-gold uppercase tracking-widest font-medium mb-4">Features</div>
      <h2 className="font-serif text-4xl leading-tight mb-4 max-w-2xl">
        Everything a receipt <em className="italic text-gold">needs</em>
      </h2>
      <p className="text-muted text-base leading-relaxed max-w-2xl mb-12">
        No more handwritten notes or generic invoices. Give every sale a professional record your customers keep.
      </p>

      <div className="grid grid-cols-3 gap-px bg-border rounded-lg overflow-hidden">
        {features.map((feature) => (
          <div key={feature.title} className="bg-background p-8 hover:bg-black/30 transition-colors">
            <div className="w-9 h-9 border border-border rounded flex items-center justify-center mb-5">
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 stroke-gold fill-none stroke-1.5 stroke-linecap-round stroke-linejoin-round"
              >
                <path d={feature.icon} />
              </svg>
            </div>
            <h3 className="font-serif text-base text-paper mb-2">{feature.title}</h3>
            <p className="text-xs text-muted leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
