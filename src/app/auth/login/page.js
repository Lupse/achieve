"use client";
import Link from "next/link";
import {PrimaryButton,SecondaryButton} from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";


export default function AuthPage() {
  return (
    <div className="overflow-x-hidden">
    {/* Navbar */}
    <div className="h-[60px] md:h-[76px] border-b border-[#595959] flex items-center px-4 md:pl-[3vw]">
      <img src="../icons/achieve-logo.png" alt="Achieve Logo" className="w-[30px] h-[32px] md:w-[38.47px] md:h-[41.61px]"/>
    </div>

    {/* Content */}
    <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-[10vw] xl:gap-[18vw] mt-6 md:mt-[30px] mx-4 md:mx-8 lg:mx-[45px] pb-10">
        {/* Left */}
        <div className="hidden lg:flex w-full lg:w-[450px] xl:w-[598px] flex-col">
            <div className="flex items-center gap-3 lg:gap-5">
                <p className="text-[20px] lg:text-[24px]">Achieve</p>
                <img src="../images/arrow.png" alt="Arrow" className="w-[250px] lg:w-[382px] h-3 lg:h-4"/>
            </div>
            <img src="../images/login-image.png" alt="Login illustration" className="w-full h-auto max-w-[598px]"/>
            <p className="text-[32px] lg:text-[40px] xl:text-[48px] font-semibold text-[#102873] m-0 leading-tight">Define your Direction</p>
            <p className="text-[32px] lg:text-[40px] xl:text-[48px] font-semibold text-[#1A43C0] m-0 leading-tight">Design your Destiny</p>
        </div>
        {/* Right */}
        <div className="w-full lg:w-[420px] xl:w-[482px] lg:mt-10 flex flex-col">
            <div className="text-center">
                <p className="font-semibold text-[24px] md:text-[28px]">Masuk Akun</p>
                <p className="text-[16px] md:text-[18px] mt-3 px-2">Nikmati pengalaman yang lebih menyenangkan dengan masuk ke akunmu</p>
                <div className="flex flex-col gap-4 md:gap-6 mt-6 md:mt-10">
                    <CustomInput 
                        placeholder="Email"
                    />
                    <CustomInput
                        placeholder="Kata Sandi"
                    />
                </div>
            </div>
            <div className="flex justify-end mt-4 md:mt-5">
                <Link href="#" className="hover:text-[#091743] text-[#1A43C0] text-[14px] md:text-[16px]">Lupa Kata Sandi?</Link>
            </div>
            <PrimaryButton onClick={() => alert("Ditekan!")}> Masuk </PrimaryButton>
            <div className="text-center">
                <p className="text-[16px] md:text-[18px] mt-3 text-[#091743] opacity-40">atau</p>
            </div>
            <SecondaryButton onClick={() => alert("Ditekan!")}> 
                <img src="../icons/linkedin.png" alt="Linkedin Icon" className="w-5 h-5 mr-2 inline"/>
                <span className="text-[14px] md:text-[16px]">Daftar Dengan Linkedin</span>
            </SecondaryButton>
            <div className="text-center">
                <p className="text-[16px] md:text-[18px] mt-8 md:mt-10">Belum punya akun? <Link href="/auth/register" className="hover:text-[#091743] text-[#1A43C0]">Daftar Sekarang</Link></p>
            </div>
        </div>
    </div>
    </div>
  );
}
