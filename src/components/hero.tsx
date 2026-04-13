import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex justify-center items-center my-16">
      <div className="w-1/4 flex flex-col gap-12">
        <h5 className="text-xl text-[#c9973a] border border-[#c9973a] rounded-md] w-max px-3 py-2">
          BUILT FOR NIGERIAN BUSINESSES
        </h5>
        <h1 className="text-7xl font-serif">
          Receipts your
          <br />
          customers will
          <br />
          <span className="text-[#c9973a] italic">actually trust</span>
        </h1>
        <p className="text-xl text-[#312f26]">
          Create branded, signed receipts in seconds. Share via WhatsApp, email
          or download — with a QR code your customers can verify.
        </p>
        <div className="flex items-center gap-4">
          <Button className="px-8 py-6 hover:bg-[#e8b84b] cursor-pointer text-lg">
            Start for free
          </Button>
          <Button
            variant="outline"
            className="px-8 py-6 cursor-pointer border border-[#312f26] hover:border-white text-lg"
          >
            See a sample receipt
          </Button>
        </div>

        <hr className="font-thin text-[#2a2820]" />

        <div className="flex items-center gap-12">
          <div>
            <h3 className="font-serif text-white text-4xl">3 min</h3>
            <p className="text-[#312f26] text-xl">FRIST RECEIPT</p>
          </div>
          <div>
            <h3 className="font-serif text-white text-4xl">100%</h3>
            <p className="text-[#312f26] text-xl">BRANDED</p>
          </div>
          <div>
            <h3 className="font-serif text-white text-4xl">QR</h3>
            <p className="text-[#312f26] text-xl">VERIFIED</p>
          </div>
        </div>
      </div>
    </section>
  );
}
