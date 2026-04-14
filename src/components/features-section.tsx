import { features } from "@/lib/data/features-data";

export const FeaturesSection = () => {
  return (
    <section className="h-screen flex flex-col items-start justify-center mx-40 px-72 gap-24">
      <div className="w-2/5 flex flex-col gap-4">
        <h3 className="text-[#c9973a] text-xl font-medium">FEATURES</h3>
        <h2 className="text-5xl font-serif">
          Everything a receipt{" "}
          <span className="text-[#c9973a] italic">needs</span>
        </h2>
        <p className="text-xl text-[#312f26]">
          No more handwritten notes or generic invoices. Give every sale a
          professional record your customers keep.
        </p>
      </div>
      <div className="grid grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-start justify-center gap-4 border border-[#2a2820] px-10 py-20 flex-1 hover:bg-[#14120c] transition-colors cursor-pointer"
          >
            {/* <i className={`ri ${feature.icon} text-2xl text-[#c9973a]`}></i> */}
            <h3 className="text-2xl font-medium font-serif">{feature.title}</h3>
            <p className="text-lg text-[#312f26]">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
