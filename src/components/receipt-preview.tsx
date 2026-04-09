export function ReceiptPreview() {
  return (
    <div className="bg-card-bg border border-border rounded-lg p-8 animate-float-up">
      {/* Header */}
      <div className="flex justify-between items-start mb-6 pb-5 border-b border-border">
        <div>
          <div className="font-serif text-base text-paper mb-1">Zola Fashion House</div>
          <div className="text-xs text-muted">Lagos Island, Nigeria · zolafashion.ng</div>
        </div>
        <div className="w-9 h-9 border border-border rounded flex items-center justify-center font-serif text-sm text-gold bg-gold/10">
          ZF
        </div>
      </div>

      {/* Receipt Number & Status */}
      <div className="flex justify-between items-center mb-4">
        <div className="font-serif text-sm text-paper">Receipt #RCP-0041</div>
        <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/25 text-green-400 text-xs font-medium px-2 py-1 rounded">
          <div className="w-1 h-1 rounded-full bg-green-400"></div>
          Issued
        </div>
      </div>

      {/* Meta Info */}
      <div className="flex gap-6 mb-5">
        <div>
          <div className="text-xs text-muted uppercase tracking-wider mb-1">Date</div>
          <div className="text-sm text-paper font-medium">9 Apr 2026</div>
        </div>
        <div>
          <div className="text-xs text-muted uppercase tracking-wider mb-1">Currency</div>
          <div className="text-sm text-paper font-medium">NGN</div>
        </div>
      </div>

      {/* Customer Info */}
      <div className="bg-white/5 border border-border rounded px-4 py-3 mb-5">
        <div className="text-xs text-muted uppercase tracking-wider mb-2">Billed to</div>
        <div className="text-sm text-paper font-medium mb-1">Adaeze Okonkwo</div>
        <div className="text-xs text-muted">adaeze@email.com · +234 801 234 5678</div>
      </div>

      {/* Items Table */}
      <table className="w-full mb-5 text-xs border-collapse">
        <thead>
          <tr>
            <th className="text-muted font-normal text-left px-0 py-2 border-b border-border uppercase tracking-wider text-xs">Item</th>
            <th className="text-muted font-normal text-center px-0 py-2 border-b border-border uppercase tracking-wider text-xs">Qty</th>
            <th className="text-muted font-normal text-right px-0 py-2 border-b border-border uppercase tracking-wider text-xs">Unit price</th>
            <th className="text-muted font-normal text-right px-0 py-2 border-b border-border uppercase tracking-wider text-xs">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-muted px-0 py-2 border-b border-white/5">Ankara wrap dress</td>
            <td className="text-paper text-center px-0 py-2 border-b border-white/5 font-medium">2</td>
            <td className="text-paper text-right px-0 py-2 border-b border-white/5 font-medium">₦45,000</td>
            <td className="text-paper text-right px-0 py-2 border-b border-white/5 font-medium">₦90,000</td>
          </tr>
          <tr>
            <td className="text-muted px-0 py-2 border-b border-white/5">Beaded clutch bag</td>
            <td className="text-paper text-center px-0 py-2 border-b border-white/5 font-medium">1</td>
            <td className="text-paper text-right px-0 py-2 border-b border-white/5 font-medium">₦18,500</td>
            <td className="text-paper text-right px-0 py-2 border-b border-white/5 font-medium">₦18,500</td>
          </tr>
        </tbody>
      </table>

      {/* Total */}
      <div className="flex justify-between items-center bg-gold/10 border border-gold/20 rounded px-4 py-3 mb-4">
        <div className="text-xs text-gold uppercase tracking-wider font-medium">Total</div>
        <div className="font-serif text-lg text-gold">₦108,500</div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <div className="w-20 h-px bg-border mb-1"></div>
          <div className="text-xs text-muted uppercase tracking-wider">Authorised signature</div>
        </div>
        <svg className="w-10 h-10" viewBox="0 0 5 5" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="2" height="2" fill="#c9973a" opacity="0.7" />
          <rect x="3" y="0" width="2" height="2" fill="#c9973a" opacity="0.7" />
          <rect x="0" y="3" width="2" height="2" fill="#c9973a" opacity="0.7" />
          <rect x="2" y="2" width="1" height="1" fill="#c9973a" opacity="0.7" />
          <rect x="4" y="2" width="1" height="1" fill="#c9973a" opacity="0.5" />
          <rect x="2" y="4" width="1" height="1" fill="#c9973a" opacity="0.5" />
          <rect x="3" y="3" width="1" height="1" fill="#c9973a" opacity="0.4" />
        </svg>
      </div>
    </div>
  );
}
