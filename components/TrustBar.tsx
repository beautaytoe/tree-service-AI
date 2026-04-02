import { CheckCircle } from "lucide-react";

const signals = [
  "Setup in Under 24 Hours",
  "No Long-Term Contracts",
  "Pays for Itself in 1 Week",
  "Built for Tree Contractors",
];

export default function TrustBar() {
  return (
    <section className="border-y border-charcoal-200 bg-charcoal-50 py-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:flex sm:items-center sm:justify-center sm:gap-8">
          {signals.map((s) => (
            <div
              key={s}
              className="flex items-center gap-1.5 text-sm font-medium text-charcoal-600"
            >
              <CheckCircle className="h-4 w-4 shrink-0 text-green-500" />
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
