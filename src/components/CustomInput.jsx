export default function CustomInput({
  placeholder,
  type = "text",
  value,
  onChange,
  name,
}) {
  return (
    <div className="flex flex-col gap-2">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full h-14 md:h-16 rounded-[9px] px-3 py-2 bg-[#E8ECF9] focus:outline-none text-[14px] md:text-[16px] placeholder:text-[#757575]"
      />
    </div>
  );
}
