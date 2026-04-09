import { Button } from "./ui/button";
import getSymbolFromCurrency from "currency-symbol-map";

export function Hero(): React.ReactNode {
  const NGN = getSymbolFromCurrency("NGN");
  return (
    <section className="flex justify-center items-center gap-40 mt-40">
      <div className="flex flex-col gap-12">
        <h3>BUILT FOR NIGERIAN BUSINESSES</h3>
        <h1>
          Receipts your customers will <span>actually trust</span>
        </h1>
        <p>
          Create branded, signed receipts in seconds. Share via WhatsApp, email
          or download - with QR code your customers can verify.
        </p>
        <Button
          variant="link"
          className="border border-white px-10 py-6 text-white cursor-pointer hover:opacity-50"
        >
          Start free
        </Button>
        <Button
          variant="link"
          className="border border-white px-10 py-6 text-white cursor-pointer hover:opacity-50"
        >
          See a sample receipt
        </Button>
        <hr />
        <div>
          <div>
            <h4>3 min</h4>
            <h5>FIRST RECEIPT</h5>
          </div>
          <div>
            <h4>100%</h4>
            <h5>BRANDED</h5>
          </div>
          <div>
            <h4>QR</h4>
            <h5>VERIFIED</h5>
          </div>
        </div>
      </div>
      <div className="border border-white">
        <div>
          <div>
            <h3>ZOLA FASHION HOUSE</h3>
            <p>Lagos Island, Nigeria. zolafashion.ng</p>
          </div>
          <h3>ZF</h3>
        </div>
        <hr />

        <div>
          <h4>Receipt #RCP-0041</h4>
          <h4>ISSUED</h4>
        </div>

        <div>
          <div>
            <h5>DATE</h5>
            <p>9 Apr 2026</p>
          </div>
          <div>
            <h5>CURRENCY</h5>
            <p>NGN</p>
          </div>
        </div>

        <div>
          <h3>BILLED TO</h3>
          <p>Adaeze Okonkwo</p>
          <p>adaezeokonkwo@gmail.com - +234 801 234 5678</p>
        </div>

        <table>
          <thead>
            <tr>
              <th>ITEM</th>
              <th>QTY</th>
              <th>UNIT PRICE</th>
              <th>SUBTOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ankara wrap dress</td>
              <td>2</td>
              <td>{NGN}45,000</td>
              <td>{NGN}90,000</td>
            </tr>
            <tr>
              <td>Beaded clutch bag</td>
              <td>1</td>
              <td>{NGN}18,500</td>
              <td>{NGN}18,500</td>
            </tr>
          </tbody>
        </table>

        <div>
          <h3>TOTAL</h3>
          <p>{NGN}108,500</p>
        </div>

        <div>
          <div>
            <span>___________</span>
            <h6>AUTHORISED SIGNATURE</h6>
          </div>
        </div>
      </div>
    </section>
  );
}
