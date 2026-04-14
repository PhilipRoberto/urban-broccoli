import { ReceiptTable } from "./receipt-preview";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex justify-center items-center gap-72 mx-40 border-b border-[#2a2820]">
      <div className="w-1/4 flex flex-col gap-12">
        <h5 className="text-xl text-[#c9973a] border border-[#c9973a] bg-[#1f1e19] font-medium rounded-md] w-max px-3 py-2">
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
      <div className="w-1/4 bg-[#14120c] border border-[#312f26] rounded-lg px-10 py-8 flex flex-col gap-9">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-serif text-white text-xl">
              Theodore Fashion House
            </h3>
            <span className="text-[#474333] text-lg">
              Ibadan, Nigeria - theodorefashion.ng
            </span>
          </div>
          <div className="text-[#665c36] text-lg border border-[#dbb367] w-max p-3 rounded-lg bg-[#222016]">
            TF
          </div>
        </div>
        <hr className="font-thin text-[#2a2820]" />
        <div className="flex justify-between items-center">
          <h3 className="font-serif text-white text-xl">Receipt #RCP-0041</h3>
          <div className="flex justify-center items-center gap-2 border-2 bg-teal-950 border-teal-600 py-1 px-2 w-max">
            <div className="w-2 h-2 bg-teal-600 rounded-full" />
            <p className="text-sm text-teal-600 font-semibold">ISSUED</p>
          </div>
        </div>

        <div className="flex m-max items-center gap-12">
          <div>
            <p className="text-[#464232] text-sm">DATE</p>
            <h3 className="text-white text-lg">9 Apr 2026</h3>
          </div>
          <div>
            <p className="text-[#464232] text-sm">CURRENCY</p>
            <h3 className="text-white text-lg">NGN</h3>
          </div>
        </div>
        <div className="bg-[#292821] p-4 rounded-xl">
          <p className="text-[#464232] text-sm">BILLED TO</p>
          <h3 className="text-white text-lg">Christopher Olamide</h3>
          <p className="text-[#464232] text-sm">chriscrevener@gmail.com</p>
        </div>

        <ReceiptTable />

        <div className="flex flex-col gap-4 mt-6">
          <div className="border-b border-b-[#2a2820] w-40" />
          <p className="text-[#464232] text-sm">AUTHORISED SIGNATURE</p>
        </div>
      </div>
    </section>
  );
}
