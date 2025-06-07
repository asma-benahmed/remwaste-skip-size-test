interface ActionButtonsProps {
  onCancel: () => void;
  onContinue: () => void;
  cancelLabel?: string;
  continueLabel?: string;
  isContinueDisabled?: boolean;
}

export default function ActionButtons({
  onCancel,
  onContinue,
  cancelLabel = "Cancel",
  continueLabel = "Continue",
  isContinueDisabled = false,
}: ActionButtonsProps) {
  return (
    <div className="flex space-x-2 w-full sm:w-auto">
      <button
        onClick={onCancel}
        className="flex-1 sm:flex-none px-4 py-2 rounded-lg text-white border border-slate-600 hover:border-slate-500 hover:bg-slate-800/50 transition-all duration-300 text-sm cursor-pointer"
      >
        {cancelLabel}
      </button>
      <button
        onClick={onContinue}
        disabled={isContinueDisabled}
        className={`flex-1 sm:flex-none px-5 py-2 rounded-lg font-medium text-white shadow-md text-sm cursor-pointer transition-all duration-300 ${
          isContinueDisabled
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-blue-500 to-indigo-600 hover:shadow-blue-500/40 transform hover:-translate-y-0.5 shadow-blue-500/25"
        }`}
      >
        {continueLabel}
      </button>
    </div>
  );
}
