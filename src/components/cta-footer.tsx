import { Button } from "./ui/button";

export function CTASection() {
  return (
    <section className="text-center py-40">
      <h2 className="sm:text-3xl lg:text-5xl leading-tight mb-3 sm:mb-4 xl:mb-6 text-balance font-serif">
        Ready to issue your first{" "}
        <em className="italic text-[#c9973a]">receipt?</em>
      </h2>
      <p className="text-[#312f26] text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 xl:mb-10 max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto">
        {/* Join hundreds of Nigerian businesses creating receipts their customers
        actually trust. */}
        Free to get started. No credit card required.
      </p>
      <Button
        // onClick={() => router.push("#pricing")}
        className="cursor-pointer hover:bg-[#e8b84b] py-8 px-12 text-xl font-medium rounded-3xl"
      >
        Create your first receipt
      </Button>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-6 sm:py-8 lg:py-10 px-4 sm:px-8 lg:px-10 xl:px-16 2xl:px-20">
      <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-none 2xl:w-screen 2xl:ml-[-50vw] 2xl:pl-[max(50vw,50%)] mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-6">
        <h2 className="text-2xl font-serif">
          urban<span className="text-[#c9973a]">-broccoli</span>
        </h2>
        <div className="flex gap-4 sm:gap-6 lg:gap-8 flex-wrap">
          <a
            href="#"
            className="text-xs lg:text-sm text-[#312f26] hover:opacity-50 transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-xs lg:text-sm text-[#312f26] hover:opacity-50 transition-colors"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-xs lg:text-sm text-[#312f26] hover:opacity-50 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
