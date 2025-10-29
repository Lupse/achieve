"use client";

export function PrimaryButton({onClick, children}) {
  return (
      <button className="w-full h-[48px] md:h-[50px] rounded-xl px-3 py-2 bg-[#1A43C0] mt-4 text-white text-[14px] md:text-[16px] font-medium hover:bg-[#0C1F5A] transition-colors" onClick={onClick}>
            {children}
      </button>
  );
}

export function SecondaryButton({onClick, children}) {
  return (
      <button className="w-full h-[48px] md:h-[50px] rounded-xl px-3 py-2 border border-[#1A43C0] mt-4 text-[#1A43C0] hover:bg-[#E8ECF9] transition-colors flex items-center justify-center" onClick={onClick}>
            {children}
      </button>
  );
}
