interface ShareOption {
  title: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

const shareOptions: ShareOption[] = [
  {
    title: "WhatsApp",
    description: "One tap sends the receipt link directly to your customer on WhatsApp.",
    icon: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z",
    color: "#25d166",
    bgColor: "rgba(37,211,102,0.08)",
    borderColor: "rgba(37,211,102,0.2)"
  },
  {
    title: "Email",
    description: "Send a professional receipt directly to your customer's inbox.",
    icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7-10-7",
    color: "#c9973a",
    bgColor: "rgba(201,151,58,0.08)",
    borderColor: "rgba(201,151,58,0.2)"
  },
  {
    title: "Download",
    description: "Export as a PDF or image file. Print it, save it, share it anywhere.",
    icon: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5m0 0l5-5M12 15V3",
    color: "#85b7eb",
    bgColor: "rgba(133,183,235,0.08)",
    borderColor: "rgba(133,183,235,0.2)"
  },
];

export function SharingSection() {
  return (
    <section className="bg-card-bg border-t border-b border-border py-12 lg:py-20 px-4 sm:px-8 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-xs text-gold uppercase tracking-widest font-medium mb-3 sm:mb-4">Sharing</div>
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3 sm:mb-4 max-w-2xl">
          Send it <em className="italic text-gold">their way</em>
        </h2>
        <p className="text-muted text-sm sm:text-base leading-relaxed max-w-2xl mb-8 lg:mb-12">
          PDF, image, WhatsApp, email, or direct download. Your customers receive receipts the way they prefer.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {shareOptions.map((option) => (
            <div
              key={option.title}
              className="border border-border rounded-lg p-4 sm:p-5 lg:p-6 hover:border-gold/30 transition-colors"
            >
              <div
                className="w-8 h-8 rounded flex items-center justify-center mb-3 sm:mb-4 border"
                style={{
                  backgroundColor: option.bgColor,
                  borderColor: option.borderColor
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-none stroke-2 stroke-linecap-round stroke-linejoin-round"
                  style={{ stroke: option.color }}
                >
                  <path d={option.icon} />
                </svg>
              </div>
              <h3 className="font-serif text-sm sm:text-base text-paper mb-2">{option.title}</h3>
              <p className="text-xs text-muted leading-relaxed">{option.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
