
export default function CustomInput({
  placeholder,
}) {
  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        placeholder={placeholder}
        className=" w-fill h-16 rounded-[9px] px-3 py-2 bg-[#E8ECF9] focus:outline-none"

      />
    </div>
  );
}
