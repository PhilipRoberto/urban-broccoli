export function CTASection() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-8 lg:px-10 max-w-6xl mx-auto text-center">
      <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl leading-tight mb-3 sm:mb-4 text-balance">
        Ready to issue your first <em className="italic text-gold">receipt?</em>
      </h2>
      <p className="text-muted text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto">
        Join hundreds of Nigerian businesses creating receipts their customers actually trust.
      </p>
      <button className="bg-gold text-ink border-none px-6 sm:px-8 py-2.5 sm:py-3 rounded font-medium cursor-pointer hover:bg-gold-light transition-colors text-sm sm:text-base">
        Start for free
      </button>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-6 sm:py-8 px-4 sm:px-8 lg:px-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-6">
        <p className="text-xs text-muted">© 2024 Receiptly. All rights reserved.</p>
        <div className="flex gap-4 sm:gap-6 flex-wrap">
          <a href="#" className="text-xs text-muted hover:text-paper transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-xs text-muted hover:text-paper transition-colors">
            Terms of Service
          </a>
          <a href="#" className="text-xs text-muted hover:text-paper transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
