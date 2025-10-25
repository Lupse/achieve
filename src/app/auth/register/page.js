"use client";
import {PrimaryButton,SecondaryButton} from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";


export default function AuthPage() {
  return (
    <>
    {/* Navbar */}
    <div className="h-[76px] border-b border-[#595959] flex items-center pl-[3vw]">
      <img src="../icons/achieve-logo.png" alt="Achieve Logo" className="w-[38.47px] h-[41.61px]"/>
    </div>

    {/* Content */}
    <div className="flex justify-center gap-[18vw] mt-[30px] mx-[45px]">
        {/* Left */}
        <div className="w-[598px] h-[630px] flex flex-col align-center">
            <div className="flex items-center gap-5 ">
                <p className="text-[24px]">Achieve</p>
                <img src="../images/arrow.png" alt="Achieve Logo" className="w-[382px] h-4"/>
            </div>
            <img src="../images/login-image.png" alt="Achieve Logo" className="w-[598px] h-[460px]"/>
            <p className="text-[48px] font-semibold text-[#102873] m-0">Define your Direction</p>
            <p className="text-[48px] font-semibold text-[#1A43C0] m-0">Design your Destiny</p>
        </div>
        {/* Right */}
        <div className=" w-[482px] h-[586px] mt-10 flex flex-col align-center">
            <center>
                <p className=" font-semibold text-[28px]">Daftar Akun </p>
                <p className="  text-[18px] mt-3">Mulai langkah bangun karir di masa depan bersama Achieve</p>
                <div className="flex flex-col gap-6 mt-10">
                    <CustomInput 
                        placeholder="Ketikan Email"
                    />
                    <CustomInput 
                        placeholder="Ketikan Kata Sandi"
                    />
                    <CustomInput
                        placeholder="Ketikan Kembali Kata Sandi"
                    />
                </div>
            </center>
            <div className="flex justify-end mt-5">
            </div>
            <PrimaryButton  onClick={() => alert("Ditekan!")}> Daftar </PrimaryButton>
            <center>
                <p className="  text-[18px] mt-3 text-[#091743] opacity-40">atau</p>
            </center>
            <SecondaryButton onClick={() => alert("Ditekan!")}> 
                <img src="../icons/linkedin.png" alt="Linkedin Icon" className="w-5 h-5 mr-2 inline"/>
                Daftar dengan akun Linkedin
            </SecondaryButton>
            <center>
                <p className="  text-[18px] mt-10">Sudah punya akun? <a href="#" className="hover:text-[#091743] text-[#1A43C0] ">Masuk Sekarang</a></p>
            </center>
        </div>
    </div>
    </>
  );
}
