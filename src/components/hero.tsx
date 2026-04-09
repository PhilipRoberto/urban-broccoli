import { ReceiptPreview } from "./receipt-preview";

export function Hero() {
  return (
    <section className="grid grid-cols-2 gap-16 py-20 px-10 max-w-6xl mx-auto items-center">
      {/* Left Column */}
      <div className="flex flex-col gap-8">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold text-xs font-medium px-3 py-2 rounded w-fit uppercase tracking-widest">
          Built for Nigerian businesses
        </div>

        {/* Heading */}
        <h1 className="font-serif text-5xl leading-tight text-balance">
          Receipts your customers will <em className="italic text-gold">actually trust</em>
        </h1>

        {/* Subheading */}
        <p className="text-muted text-base leading-relaxed max-w-lg">
          Create branded, signed receipts in seconds. Share via WhatsApp, email or download — with a QR code your customers can verify.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap">
          <button className="bg-gold text-ink border-none px-7 py-3 rounded font-medium cursor-pointer hover:bg-gold-light transition-colors text-sm">
            Start for free
          </button>
          <button className="bg-transparent text-paper border border-border px-7 py-3 rounded font-medium cursor-pointer hover:border-muted transition-colors text-sm">
            See a sample receipt
          </button>
        </div>

        {/* Stats */}
        <div className="flex gap-10 pt-6 border-t border-border">
          <div>
            <div className="font-serif text-2xl text-paper leading-none mb-1">3 min</div>
            <div className="text-xs text-muted uppercase tracking-widest">First receipt</div>
          </div>
          <div>
            <div className="font-serif text-2xl text-paper leading-none mb-1">100%</div>
            <div className="text-xs text-muted uppercase tracking-widest">Branded</div>
          </div>
          <div>
            <div className="font-serif text-2xl text-paper leading-none mb-1">QR</div>
            <div className="text-xs text-muted uppercase tracking-widest">Verified</div>
          </div>
        </div>
      </div>

      {/* Right Column - Receipt Preview */}
      <div>
        <ReceiptPreview />
      </div>
    </section>
  );
}
