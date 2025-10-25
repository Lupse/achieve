"use client";

export function PrimaryButton({onClick, children}) {
  return (
      <button className=" w-fill h-[50px] rounded-xl px-3 py-2 bg-[#1A43C0] mt-4 text-white" onClick={onClick}>
            {children}
      </button>
  );
}

export function SecondaryButton({onClick, children}) {
  return (
      <button className=" w-fill h-[50px] rounded-xl px-3 py-2 border border-[#1A43C0] mt-4 text-[#1A43C0]" onClick={onClick}>
            {children}
      </button>
  );
}
