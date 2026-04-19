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
    description:
      "One tap sends the receipt link directly to your customer on WhatsApp.",
    icon: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z",
    color: "#25d166",
    bgColor: "rgba(37,211,102,0.08)",
    borderColor: "rgba(37,211,102,0.2)",
  },
  {
    title: "Email",
    description:
      "Send a professional receipt directly to your customer's inbox.",
    icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7-10-7",
    color: "#c9973a",
    bgColor: "rgba(201,151,58,0.08)",
    borderColor: "rgba(201,151,58,0.2)",
  },
  {
    title: "Download",
    description:
      "Export as a PDF or image file. Print it, save it, share it anywhere.",
    icon: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5m0 0l5-5M12 15V3",
    color: "#85b7eb",
    bgColor: "rgba(133,183,235,0.08)",
    borderColor: "rgba(133,183,235,0.2)",
  },
];

export function SharingSection() {
  return (
    <section className="flex flex-col items-start justify-center px-96 gap-24 border border-[#312f26] py-32 bg-[#181610]">
      <div className="w-2/5 flex flex-col gap-4">
        <h3 className="text-[#c9973a] text-xl font-medium">SHARING</h3>
        <h2 className="text-5xl font-serif">
          Send it <span className="text-[#c9973a] italic">their way</span>
        </h2>
        <p className="text-xl text-[#312f26]">
          PDF, image, WhatsApp, email, or direct download. Your customers
          receive receipts the way they prefer.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {shareOptions.map((option) => (
          <div
            key={option.title}
            className="flex flex-col items-start justify-center gap-2 border border-[#2a2820] px-10 py-10 flex-1 hover:bg-[#14120c] transition-colors rounded-3xl"
          >
            <div
              className="w-8 h-8 lg:w-10 lg:h-10 rounded flex items-center justify-center mb-3 sm:mb-4 xl:mb-6 border"
              style={{
                backgroundColor: option.bgColor,
                borderColor: option.borderColor,
              }}
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 lg:w-5 lg:h-5 fill-none stroke-2 stroke-linecap-round stroke-linejoin-round"
                style={{ stroke: option.color }}
              >
                <path d={option.icon} />
              </svg>
            </div>
            {/* <i className={`ri ${feature.icon} text-2xl text-[#c9973a]`}></i> */}
            <h3 className="text-2xl font-medium font-serif">{option.title}</h3>
            <p className="text-lg text-[#312f26]">{option.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
