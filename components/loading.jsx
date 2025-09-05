export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-20 h-20 border-8 border-gray-400 border-t-white rounded-full animate-spin"></div>
        <p className="text-white text-lg font-medium">
          Confirmando disponibilidad
        </p>
      </div>
    </div>
  );
}
