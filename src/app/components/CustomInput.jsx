
export default function CustomInput({
  placeholder,
  type = "text",
  value,
  onChange,
}) {
  return (
    <div className="flex flex-col gap-2">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full h-14 md:h-16 rounded-[9px] px-3 py-2 bg-[#E8ECF9] focus:outline-none text-[14px] md:text-[16px]"
      />
    </div>
  );
}
