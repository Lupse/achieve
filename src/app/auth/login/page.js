"use client";
import Link from "next/link";
import { useState } from "react";
import { PrimaryButton, SecondaryButton } from "../../../components/CustomButton";
import CustomInput from "../../../components/CustomInput";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://achieve-backend-916874812181.asia-southeast1.run.app";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      setMessage("Email dan kata sandi wajib diisi!");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const res = await fetch(`${BASE_URL}/auth/masuk`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        // langsung lempar seluruh data biar bisa dibaca di catch
        throw data;
      }

      // Simpan token ke localStorage
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("user", JSON.stringify(data.user));


      // Contoh redirect ke dashboard (nanti bisa ganti path sesuai kebutuhan)
      window.location.href = "/landing_page/registered";

    } catch (err) {
      console.log("Error response:", err);

      // ambil pesan dari struktur nested
      const detailError =
        err?.errors?.[0]?.errors?.[0] ||
        err?.message ||
        "Terjadi kesalahan, coba lagi nanti.";

      setMessage(detailError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Navbar */}
      <div className="h-[60px] md:h-[76px] border-b border-[#595959] flex items-center px-4 md:pl-[3vw]">
        <img
          src="../icons/achieve-logo.png"
          alt="Achieve Logo"
          className="w-[30px] h-[32px] md:w-[38.47px] md:h-[41.61px]"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-[10vw] xl:gap-[18vw] mt-6 md:mt-[30px] mx-4 md:mx-8 lg:mx-[45px] pb-10">
        {/* Left */}
        <div className="hidden lg:flex w-full lg:w-[450px] xl:w-[598px] flex-col">
          <div className="flex items-center gap-3 lg:gap-5">
            <p className="text-[20px] lg:text-[24px]">Achieve</p>
            <img
              src="../images/arrow.png"
              alt="Arrow"
              className="w-[250px] lg:w-[382px] h-3 lg:h-4"
            />
          </div>
          <img
            src="../images/login-image.png"
            alt="Login illustration"
            className="w-full h-auto max-w-[598px]"
          />
          <p className="text-[32px] lg:text-[40px] xl:text-[48px] font-semibold text-[#102873] m-0 leading-tight">
            Define your Direction
          </p>
          <p className="text-[32px] lg:text-[40px] xl:text-[48px] font-semibold text-[#1A43C0] m-0 leading-tight">
            Design your Destiny
          </p>
        </div>

        {/* Right */}
        <div className="w-full lg:w-[420px] xl:w-[482px] lg:mt-10 flex flex-col">
          <div className="text-center">
            <p className="font-semibold text-[24px] md:text-[28px]">
              Masuk Akun
            </p>
            <p className="text-[16px] md:text-[18px] mt-3 px-2">
              Nikmati pengalaman yang lebih menyenangkan dengan masuk ke akunmu
            </p>

            <div className="flex flex-col gap-4 md:gap-6 mt-6 md:mt-10">
              <CustomInput
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <CustomInput
                placeholder="Kata Sandi"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-end mt-4 md:mt-5">
            <Link
              href="#"
              className="hover:text-[#091743] text-[#1A43C0] text-[14px] md:text-[16px]"
            >
              Lupa Kata Sandi?
            </Link>
          </div>

          <PrimaryButton onClick={handleLogin} disabled={loading}>
            {loading ? "Memproses..." : "Masuk"}
          </PrimaryButton>

          {message && (
            <p className="text-center text-red-600 mt-3">{message}</p>
          )}

          <div className="text-center">
            <p className="text-[16px] md:text-[18px] mt-3 text-[#091743] opacity-40">
              atau
            </p>
          </div>

          <SecondaryButton
            onClick={() =>
              (window.location.href = `${BASE_URL}/auth/linkedin`)
            }
          >
            <img
              src="../icons/linkedin.png"
              alt="Linkedin Icon"
              className="w-5 h-5 mr-2 inline"
            />
            <span className="text-[14px] md:text-[16px]">
              Masuk dengan akun LinkedIn
            </span>
          </SecondaryButton>

          <div className="text-center">
            <p className="text-[16px] md:text-[18px] mt-8 md:mt-10">
              Belum punya akun?{" "}
              <Link
                href="/auth/register"
                className="hover:text-[#091743] text-[#1A43C0]"
              >
                Daftar Sekarang
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
