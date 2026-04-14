import { ReceiptItemSample } from "@/lib/types/receipt-sample";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { receiptData } from "@/lib/data/receipt-data";
import getSymbolFromCurrency from "currency-symbol-map";

export const receiptMap = async (items: ReceiptItemSample[]) => {
  return items.map((i) => {
    const { item, quantity, unitPrice, id } = i;
    return (
      <TableRow key={id} className="border-b border-[#2a2820]">
        <TableCell className="text-[#a8a38c] text-sm">{item}</TableCell>
        <TableCell>{quantity}</TableCell>
        <TableCell>
          {getSymbolFromCurrency("NGN")}
          {unitPrice.toLocaleString()}
        </TableCell>
        <TableCell>
          {getSymbolFromCurrency("NGN")}
          {(quantity * unitPrice).toLocaleString()}
        </TableCell>
      </TableRow>
    );
  });
};

export const ReceiptTable = () => {
  return (
    <div className="flex flex-col gap-10">
      <Table>
        <TableHeader>
          <TableRow className="border-b border-[#2a2820]">
            <TableHead className="text-[#464232] text-sm">ITEM</TableHead>
            <TableHead className="text-[#464232] text-sm">QUANTITY</TableHead>
            <TableHead className="text-[#464232] text-sm">UNIT PRICE</TableHead>
            <TableHead className="text-[#464232] text-sm">SUBTOTAL</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="border-b border-[#2a2820]">
          {receiptMap(receiptData)}
        </TableBody>
      </Table>
      <div className="flex justify-between items-center border border-[#c9973a] px-4 py-3 bg-[#1f1e19] rounded-2xl">
        <p className="text-[#c9973a] text-lg">TOTAL</p>
        <h3 className="text-3xl text-[#c9973a] font-serif">
          {getSymbolFromCurrency("NGN")}
          {receiptData
            .reduce((acc, cur) => acc + cur.quantity * cur.unitPrice, 0)
            .toLocaleString()}
        </h3>
      </div>
    </div>
  );
};
