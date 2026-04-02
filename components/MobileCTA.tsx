export default function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-charcoal-200 bg-white p-3 md:hidden">
      <a
        href="#contact"
        className="flex h-14 w-full items-center justify-center rounded-lg bg-green-600 text-base font-bold text-white shadow-lg shadow-green-600/25 transition-colors hover:bg-green-700"
      >
        Book a Demo
      </a>
    </div>
  );
}
