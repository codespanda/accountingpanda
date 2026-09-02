import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import type { DoubleEntryTransaction, EntryRow } from "@/pages/courses/bookkeepingBasicsLessons"

const dotColor: Record<EntryRow["color"], string> = {
  blue: "bg-blue-400",
  green: "bg-emerald-400",
  amber: "bg-amber-400",
}

function AccountPanel({ title, rows }: { title: string; rows: EntryRow[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/15">
      <p className="border-b border-white/15 bg-white/5 px-3 py-2 text-center text-xs font-semibold text-white">
        {title}
      </p>
      <div className="grid grid-cols-2 divide-x divide-white/15">
        <p className="px-3 py-1.5 text-center text-[11px] font-medium text-white/50">Debit</p>
        <p className="px-3 py-1.5 text-center text-[11px] font-medium text-white/50">Credit</p>
      </div>
      {rows.length === 0 ? (
        <div className="grid grid-cols-2 divide-x divide-white/15 border-t border-white/15">
          <div className="px-3 py-3 text-center text-sm text-white/30">—</div>
          <div className="px-3 py-3 text-center text-sm text-white/30">—</div>
        </div>
      ) : (
        rows.map((row) => (
          <div
            key={row.account}
            className="grid grid-cols-2 divide-x divide-white/15 border-t border-white/15"
          >
            <div
              className={cn(
                "flex items-center justify-center gap-1.5 px-2 py-3 text-sm font-semibold",
                row.side === "debit" ? "bg-white/5" : ""
              )}
            >
              {row.side === "debit" && (
                <>
                  <span className={cn("h-1.5 w-1.5 shrink-0 rounded-full", dotColor[row.color])} />
                  <span className="text-white">
                    {row.account}
                    <br />
                    {row.amount}
                  </span>
                </>
              )}
            </div>
            <div
              className={cn(
                "flex items-center justify-center gap-1.5 px-2 py-3 text-sm font-semibold",
                row.side === "credit" ? "bg-white/5" : ""
              )}
            >
              {row.side === "credit" && (
                <>
                  <span className={cn("h-1.5 w-1.5 shrink-0 rounded-full", dotColor[row.color])} />
                  <span className="text-white">
                    {row.account}
                    <br />
                    {row.amount}
                  </span>
                </>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export function DoubleEntryDemo({ transactions }: { transactions: DoubleEntryTransaction[] }) {
  const [index, setIndex] = useState(0)
  const txn = transactions[index]

  return (
    <div className="mt-4 rounded-2xl bg-brand-navy p-5 sm:p-6">
      {/* Transaction banner */}
      <div className="flex flex-wrap items-center gap-3 rounded-xl border border-white/15 px-4 py-3">
        <span className="text-xs font-semibold uppercase tracking-wide text-blue-300">
          Transaction
        </span>
        <span className="text-sm font-bold text-white">{txn.label}</span>
      </div>

      {/* Account panels */}
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <AccountPanel title="Assets" rows={txn.assets} />
        <AccountPanel title="Liabilities + Owner's equity" rows={txn.liabEquity} />
      </div>

      {/* Equation */}
      <div className="mt-3 flex flex-wrap items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-4 text-center text-sm">
        <span>
          <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-blue-400 align-middle" />
          <span className="font-medium text-white/60">Assets</span>
          <br />
          <span className="font-bold text-blue-300">{txn.equation.assets}</span>
        </span>
        <span className="px-1 text-white/40">=</span>
        <span>
          <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-amber-400 align-middle" />
          <span className="font-medium text-white/60">Liabilities</span>
          <br />
          <span className="font-bold text-amber-300">{txn.equation.liabilities}</span>
        </span>
        <span className="px-1 text-white/40">+</span>
        <span>
          <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 align-middle" />
          <span className="font-medium text-white/60">Owner's equity</span>
          <br />
          <span className="font-bold text-emerald-300">{txn.equation.equity}</span>
        </span>
      </div>

      {/* Transaction selector */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-4">
        <span className="text-sm font-medium text-white/70">Transaction</span>
        <div className="relative">
          <select
            value={index}
            onChange={(e) => setIndex(Number(e.target.value))}
            className="appearance-none rounded-lg border border-white/20 bg-white/5 py-2 pl-3 pr-8 text-sm font-medium text-white focus:outline-none focus:ring-1 focus:ring-brand-green"
          >
            {transactions.map((t, i) => (
              <option key={t.label} value={i} className="text-brand-heading">
                {t.label}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-white/60" />
        </div>
      </div>
    </div>
  )
}
