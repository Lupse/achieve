"use client";

export function PrimaryButton({onClick, children, disabled}) {
  return (
      <button
        className={`w-full h-12 md:h-[50px] rounded-xl px-3 py-2 bg-[#1A43C0] mt-4 text-white text-[14px] md:text-[16px] font-medium transition-colors ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-[#0C1F5A]"}`}
        onClick={onClick}
        disabled={disabled}
      >
            {children}
      </button>
  );
}

export function SecondaryButton({onClick, children, disabled}) {
  return (
      <button
        className={`w-full h-12 md:h-[50px] rounded-xl px-3 py-2 border border-[#1A43C0] mt-4 text-[#1A43C0] transition-colors flex items-center justify-center ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-[#E8ECF9]"}`}
        onClick={onClick}
        disabled={disabled}
      >
            {children}
      </button>
  );
}
