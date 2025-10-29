"use client";
import Footer from "../../../components/Footer";
import Link from "next/link";
import { useState } from "react";


export default function AuthPage() {
   const [activeButton, setActiveButton] = useState(null);

  return (
    <div className="w-full overflow-x-hidden">
    {/* Navbar */}
    <div className="h-[60px] md:h-[76px] border-b border-[#595959] flex items-center justify-between px-4 md:px-[3vw]">
      <img src="../icons/achieve-logo.png" alt="Achieve Logo" className="w-[30px] h-[32px] md:w-[38.47px] md:h-[41.61px]"/> 
      <div className="flex gap-2 items-center md:gap-5">
        <p>Profil Saya</p>
        <Link href="#" className="w-10 h-10 bg-[#DDE3F6] rounded-full flex items-center justify-center hover:bg-[#B8C5EB] transition-colors">
            <img src="../icons/profile.png" alt="Facebook" className="w-5 h-5" />
        </Link>
      </div>
    </div>

    {/* Content */}
    <div className="w-full flex flex-col items-center pt-[5vh] md:pt-[10vh] px-4 md:px-8">
        <div className="border text-[18px] md:text-[24px] w-[140px] md:w-[168px] h-[28px] md:h-[34px] rounded-4xl flex justify-center items-center mb-5">Achieve</div>
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5 text-center md:text-left">
            <p className="font-semibold text-[28px] md:text-[48px] text-[#102873]">Define your Direction</p>
            <hr className="hidden md:block w-[200px] lg:w-[452px] border-[2px] md:border-[3px] border-[#B8C5EB]" />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5 text-center md:text-left">
            <hr className="hidden md:block w-[200px] lg:w-[481px] border-[2px] md:border-[3px] border-[#B8C5EB]" />
            <p className="font-semibold text-[28px] md:text-[48px] text-[#102873]">Design your Destiny</p>
        </div>
        <p className="text-[16px] md:text-[24px] text-[#091743] pt-6 md:pt-10 text-center px-4">Bantu kamu analisis skill, untuk menjadi talenta muda yang dicari</p>
        
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5 mt-20 md:mt-40 mb-10 px-4">
            <p className="text-[16px] md:text-[21px] text-[#091743] opacity-50 text-center md:text-left">Siap membangun masa depanmu?</p>
            <Link href="../auth/login" className="bg-linear-to-r from-[#1A43C0] to-[#0C1F5A] text-white text-[14px] md:text-[16px] font-semibold w-full md:w-[365px] h-[42px] rounded-4xl flex justify-center items-center">Analisis CV Sekarang</Link>
        </div>
    </div>

    <div className="w-full rounded-t-4xl bg-[#091743] text-white flex flex-col items-center pt-[5vh] px-4 md:px-8">
        <p className="text-[20px] md:text-[28px] font-semibold mb-3 text-center">Bagaimana Achieve Bekerja?</p>
        <p className="text-[14px] md:text-[18px] text-center mb-6 md:mb-0">Pelajari achieve bisa membantu karirmu di masa depan</p>
        <button onClick={() => setActiveButton(activeButton === 1 ? null : 1)} className={`w-full md:w-[85%] bg-white rounded-3xl mt-6 md:mt-10 text-[#091743] px-6 md:px-10 overflow-hidden`}>
          <div className="min-h-[60px] md:h-[77px] flex justify-between items-center gap-4 md:gap-10 py-3 md:py-0">
            <p className="font-semibold text-[14px] md:text-[18px] text-left">Input Skill, Tujuan dan Pekerjaan Impianmu</p>
            <img src="../icons/add.png" alt="Add" className={`transition-all duration-300 flex-shrink-0 w-6 h-6 md:w-8 md:h-8 ${activeButton === 1 ? "rotate-45" : ""}`} />
          </div>
          <p className={`text-start text-[12px] md:text-[16px] transition-all duration-300 ${activeButton === 1 ? "max-h-[200px] opacity-100 translate-y-0 pb-5" : "max-h-0 opacity-0 -translate-y-4"}`}>Mulai dengan memasukkan keterampilan yang anda miliki, tujuan yang ingin dicapai, dan mimpi-mimpi anda.</p>
        </button>
        <button onClick={() => setActiveButton(activeButton === 2 ? null : 2)} className={`w-full md:w-[85%] bg-white rounded-3xl mt-6 md:mt-10 text-[#091743] px-6 md:px-10 mb-10 overflow-hidden`}>
          <div className="min-h-[60px] md:h-[77px] flex justify-between items-center gap-4 md:gap-10 py-3 md:py-0">
            <p className="font-semibold text-[14px] md:text-[18px] text-left">Analisis Gap Skill-mu dengan Kebutuhan Industri saat ini</p>
            <img src="../icons/add.png" alt="Add" className={`transition-all duration-300 flex-shrink-0 w-6 h-6 md:w-8 md:h-8 ${activeButton === 2 ? "rotate-45" : ""}`} />
          </div>
          <p className={`text-start text-[12px] md:text-[16px] transition-all duration-300 ${activeButton === 2 ? "max-h-[200px] opacity-100 translate-y-0 pb-5" : "max-h-0 opacity-0 -translate-y-4"}`}>Mulai dengan memasukkan keterampilan yang anda miliki, tujuan yang ingin dicapai, dan mimpi-mimpi anda.</p>
        </button>
    </div>



    <Footer />
    </div>
  );
}
