
import Link from "next/link";


export default function Footer({
}) {
  return (
    <>
    <div className="w-full px-6 md:px-12 lg:px-20">
      {/* Baris Pertama - Logo Section (Full width di mobile) */}
      <div className="py-10 md:py-16 lg:py-20 px-0 md:px-5 lg:px-10 md:col-span-2 lg:col-span-1">
        <img src="../icons/achieve-brand.png" alt="" className="w-32 md:w-40 lg:w-auto" />
        <p className="text-[16px] md:text-[18px] font-semibold mt-4 md:mt-5">Tetap terhubung dengan kami</p>
        <div className="flex gap-3 mt-4 md:mt-5">
            <Link href="#" className="w-10 h-10 bg-[#DDE3F6] rounded-full flex items-center justify-center hover:bg-[#B8C5EB] transition-colors">
                <img src="../icons/facebook.png" alt="Facebook" className="w-5 h-5" />
            </Link>
            <Link href="#" className="w-10 h-10 bg-[#DDE3F6] rounded-full flex items-center justify-center hover:bg-[#B8C5EB] transition-colors">
                <img src="../icons/instagram.png" alt="Instagram" className="w-5 h-5" />
            </Link>
            <Link href="#" className="w-10 h-10 bg-[#DDE3F6] rounded-full flex items-center justify-center hover:bg-[#B8C5EB] transition-colors">
                <img src="../icons/mail.png" alt="Email" className="w-5 h-5" />
            </Link>
        </div>
      </div>
      
      {/* Baris Kedua - 3 Kolom Links di Mobile */}
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8 pb-10 md:pb-16 lg:pb-20">
        <div className="px-0 md:px-10 lg:px-20 flex flex-col gap-2 md:gap-1">
          <p className="text-[16px] md:text-[18px] font-semibold mb-2 md:mb-3">Informasi</p>
          <Link href="#" className="text-[13px] md:text-[14px] hover:text-[#1A43C0] transition-colors">Informasi Umum</Link>
          <Link href="#" className="text-[13px] md:text-[14px] hover:text-[#1A43C0] transition-colors">Syarat dan Kondisi</Link>
        </div>
        <div className="px-0 md:px-10 lg:px-20 flex flex-col gap-2 md:gap-1">
          <p className="text-[16px] md:text-[18px] font-semibold mb-2 md:mb-3">Layanan Kami</p>
          <Link href="#" className="text-[13px] md:text-[14px] hover:text-[#1A43C0] transition-colors">Analisis Skill Gap</Link>
        </div>
        <div className="px-0 md:px-10 lg:px-20 flex flex-col gap-2 md:gap-1">
          <p className="text-[16px] md:text-[18px] font-semibold mb-2 md:mb-3">Butuh Bantuan</p>
          <Link href="#" className="text-[13px] md:text-[14px] hover:text-[#1A43C0] transition-colors">Frequently Ask Questions (FAQ)</Link>
        </div>
      </div>
    </div>  
    <div className="border-t border-[#989898] w-full h-12 md:h-10 flex items-center justify-center px-4">
        <p className="text-[#989898] text-[12px] md:text-[14px] text-center">Copyright Achieve 2025</p>
    </div>
    </>
  );
}
