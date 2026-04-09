export function CTASection() {
  return (
    <section className="py-24 px-10 max-w-6xl mx-auto text-center">
      <h2 className="font-serif text-5xl leading-tight mb-4 text-balance">
        Ready to issue your first <em className="italic text-gold">receipt?</em>
      </h2>
      <p className="text-muted text-base mb-8 max-w-2xl mx-auto">
        Join hundreds of Nigerian businesses creating receipts their customers actually trust.
      </p>
      <button className="bg-gold text-ink border-none px-8 py-3 rounded font-medium cursor-pointer hover:bg-gold-light transition-colors">
        Start for free
      </button>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <p className="text-xs text-muted">© 2024 Receiptly. All rights reserved.</p>
        <div className="flex gap-6">
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
