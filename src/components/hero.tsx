import { ReceiptPreview } from "./receipt-preview";

export function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 2xl:gap-24 py-12 lg:py-20 xl:py-24 2xl:py-32 px-4 sm:px-8 lg:px-10 xl:px-16 2xl:px-20 max-w-6xl xl:max-w-7xl 2xl:max-w-full 2xl:w-screen 2xl:ml-[-50vw] 2xl:pl-[max(50vw,50%)] mx-auto items-center">
      {/* Left Column */}
      <div className="flex flex-col gap-6 lg:gap-8">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold text-xs font-medium px-3 py-2 rounded w-fit uppercase tracking-widest">
          Built for Nigerian businesses
        </div>

        {/* Heading */}
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight text-balance">
          Receipts your customers will <em className="italic text-gold">actually trust</em>
        </h1>

        {/* Subheading */}
        <p className="text-muted text-sm sm:text-base lg:text-lg xl:text-lg leading-relaxed max-w-lg xl:max-w-2xl 2xl:max-w-3xl">
          Create branded, signed receipts in seconds. Share via WhatsApp, email or download — with a QR code your customers can verify.
        </p>

        {/* Buttons */}
        <div className="flex gap-3 sm:gap-4 flex-wrap">
          <button className="bg-gold text-ink border-none px-5 sm:px-7 lg:px-8 py-2.5 sm:py-3 lg:py-3.5 rounded font-medium cursor-pointer hover:bg-gold-light transition-colors text-xs sm:text-sm lg:text-base">
            Start for free
          </button>
          <button className="bg-transparent text-paper border border-border px-5 sm:px-7 lg:px-8 py-2.5 sm:py-3 lg:py-3.5 rounded font-medium cursor-pointer hover:border-muted transition-colors text-xs sm:text-sm lg:text-base">
            See a sample receipt
          </button>
        </div>

        {/* Stats */}
        <div className="flex gap-6 sm:gap-10 lg:gap-16 xl:gap-20 2xl:gap-24 pt-6 lg:pt-8 border-t border-border">
          <div>
            <div className="font-serif text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-paper leading-none mb-1">3 min</div>
            <div className="text-xs lg:text-sm text-muted uppercase tracking-widest">First receipt</div>
          </div>
          <div>
            <div className="font-serif text-xl sm:text-2xl text-paper leading-none mb-1">100%</div>
            <div className="text-xs text-muted uppercase tracking-widest">Branded</div>
          </div>
          <div>
            <div className="font-serif text-xl sm:text-2xl text-paper leading-none mb-1">QR</div>
            <div className="text-xs text-muted uppercase tracking-widest">Verified</div>
          </div>
        </div>
      </div>

      {/* Right Column - Receipt Preview */}
      <div className="order-first lg:order-last">
        <ReceiptPreview />
      </div>
    </section>
  );
}
