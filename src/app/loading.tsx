export default function GlobalLoading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="h-16 w-16 border-4 border-[#0D4D4D] border-t-transparent rounded-full animate-spin"></div>
        <h2 className="text-[#0D4D4D] font-black tracking-tighter text-xl animate-pulse">
          Health Healing HomeCare
        </h2>

        <p className="text-sm text-gray-500 mb-8">Please Wait...</p>
      </div>
    </div>
  );
}
