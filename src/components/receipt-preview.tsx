export function ReceiptPreview() {
  return (
    <div className="bg-card-bg border border-border rounded-lg p-4 sm:p-6 lg:p-8 animate-float-up max-w-sm sm:max-w-none mx-auto">
      {/* Header */}
      <div className="flex justify-between items-start mb-4 sm:mb-6 pb-3 sm:pb-5 border-b border-border gap-2">
        <div className="min-w-0">
          <div className="font-serif text-sm sm:text-base text-paper mb-1 truncate">Zola Fashion House</div>
          <div className="text-xs text-muted truncate">Lagos Island, Nigeria · zolafashion.ng</div>
        </div>
        <div className="w-8 h-8 sm:w-9 sm:h-9 border border-border rounded flex items-center justify-center font-serif text-xs sm:text-sm text-gold bg-gold/10 shrink-0">
          ZF
        </div>
      </div>

      {/* Receipt Number & Status */}
      <div className="flex justify-between items-center mb-3 sm:mb-4 gap-2 flex-wrap">
        <div className="font-serif text-xs sm:text-sm text-paper">Receipt #RCP-0041</div>
        <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/25 text-green-400 text-xs font-medium px-2 py-1 rounded">
          <div className="w-1 h-1 rounded-full bg-green-400"></div>
          Issued
        </div>
      </div>

      {/* Meta Info */}
      <div className="flex gap-4 sm:gap-6 mb-4 sm:mb-5 text-xs sm:text-sm">
        <div>
          <div className="text-xs text-muted uppercase tracking-wider mb-1">Date</div>
          <div className="text-paper font-medium">9 Apr 2026</div>
        </div>
        <div>
          <div className="text-xs text-muted uppercase tracking-wider mb-1">Currency</div>
          <div className="text-paper font-medium">NGN</div>
        </div>
      </div>

      {/* Customer Info */}
      <div className="bg-white/5 border border-border rounded px-3 sm:px-4 py-2 sm:py-3 mb-4 sm:mb-5">
        <div className="text-xs text-muted uppercase tracking-wider mb-2">Billed to</div>
        <div className="text-xs sm:text-sm text-paper font-medium mb-1">Adaeze Okonkwo</div>
        <div className="text-xs text-muted line-clamp-2">adaeze@email.com · +234 801 234 5678</div>
      </div>

      {/* Items Table */}
      <div className="mb-4 sm:mb-5 overflow-x-auto">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr>
              <th className="text-muted font-normal text-left px-0 py-2 border-b border-border uppercase tracking-wider">Item</th>
              <th className="text-muted font-normal text-center px-0 py-2 border-b border-border uppercase tracking-wider hidden xs:table-cell">Qty</th>
              <th className="text-muted font-normal text-right px-0 py-2 border-b border-border uppercase tracking-wider">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-muted px-0 py-2 border-b border-white/5 text-xs">Ankara wrap dress</td>
              <td className="text-paper text-center px-0 py-2 border-b border-white/5 font-medium hidden xs:table-cell text-xs">2</td>
              <td className="text-paper text-right px-0 py-2 border-b border-white/5 font-medium text-xs">₦90,000</td>
            </tr>
            <tr>
              <td className="text-muted px-0 py-2 border-b border-white/5 text-xs">Beaded clutch bag</td>
              <td className="text-paper text-center px-0 py-2 border-b border-white/5 font-medium hidden xs:table-cell text-xs">1</td>
              <td className="text-paper text-right px-0 py-2 border-b border-white/5 font-medium text-xs">₦18,500</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Total */}
      <div className="flex justify-between items-center bg-gold/10 border border-gold/20 rounded px-3 sm:px-4 py-2 sm:py-3 mb-3 sm:mb-4">
        <div className="text-xs text-gold uppercase tracking-wider font-medium">Total</div>
        <div className="font-serif text-base sm:text-lg text-gold">₦108,500</div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1 min-w-0">
          <div className="w-12 sm:w-20 h-px bg-border mb-1"></div>
          <div className="text-xs text-muted uppercase tracking-wider whitespace-nowrap">Auth. signature</div>
        </div>
        <svg className="w-8 h-8 sm:w-10 sm:h-10 shrink-0" viewBox="0 0 5 5" xmlns="http://www.w3.org/2000/svg">
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
