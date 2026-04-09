export function CTASection() {
  return (
    <section className="py-16 lg:py-24 xl:py-32 2xl:py-40 px-4 sm:px-8 lg:px-10 xl:px-16 2xl:px-20 max-w-6xl xl:max-w-7xl 2xl:max-w-none 2xl:w-screen 2xl:ml-[-50vw] 2xl:pl-[max(50vw,50%)] mx-auto text-center">
      <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight mb-3 sm:mb-4 xl:mb-6 text-balance">
        Ready to issue your first <em className="italic text-gold">receipt?</em>
      </h2>
      <p className="text-muted text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 xl:mb-10 max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto">
        Join hundreds of Nigerian businesses creating receipts their customers actually trust.
      </p>
      <button className="bg-gold text-ink border-none px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-4 rounded font-medium cursor-pointer hover:bg-gold-light transition-colors text-sm sm:text-base lg:text-lg">
        Start for free
      </button>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-6 sm:py-8 lg:py-10 px-4 sm:px-8 lg:px-10 xl:px-16 2xl:px-20">
      <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-none 2xl:w-screen 2xl:ml-[-50vw] 2xl:pl-[max(50vw,50%)] mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-6">
        <p className="text-xs lg:text-sm text-muted">© 2024 Receiptly. All rights reserved.</p>
        <div className="flex gap-4 sm:gap-6 lg:gap-8 flex-wrap">
          <a href="#" className="text-xs lg:text-sm text-muted hover:text-paper transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-xs lg:text-sm text-muted hover:text-paper transition-colors">
            Terms of Service
          </a>
          <a href="#" className="text-xs lg:text-sm text-muted hover:text-paper transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
