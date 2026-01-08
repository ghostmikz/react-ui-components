"use client";
import React, { useState } from "react";
import Link from "next/link";
import { SmartInput, SmartButton } from "@repo/ui";

export default function LoginPage() {
  // 1. Setup local state to hold the input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // 2. Setup state to track if the user tried to submit with empty fields
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleLogin = () => {
    // 3. Manual validation logic (replacing DevExtreme validationGroup)
    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!email) {
      newErrors.email = "Имэйл хаяг заавал оруулна уу";
      valid = false;
    }
    if (!password) {
      newErrors.password = "Нууц үг заавал оруулна уу";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      // If all checks pass, redirect
      window.location.href = '/dashboard';
    }
  };

  return (
    <div style={{ 
      minHeight: "100vh", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      background: "#f8fafc",
      fontFamily: "ui-sans-serif, system-ui, sans-serif"
    }}>
      <div style={{ 
        width: "100%", 
        maxWidth: "440px", 
        background: "#ffffff", 
        padding: "48px", 
        borderRadius: "24px", 
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)"
      }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div style={{ 
            width: "48px", height: "48px", background: "#0f172a", borderRadius: "12px", 
            margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center",
            color: "white", fontWeight: "800", fontSize: "20px" 
          }}>
            C
          </div>
          <h1 style={{ fontSize: "24px", fontWeight: "800", color: "#0f172a", letterSpacing: "-0.02em" }}>
            Тавтай морил
          </h1>
          <p style={{ color: "#64748b", fontSize: "14px", marginTop: "8px" }}>
            Админ системд нэвтрэх мэдээллээ оруулна уу
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {/* 4. Connect inputs to state and pass the onChange functions */}
          <SmartInput 
            label="Имэйл хаяг" 
            placeholder="name@domain.com" 
            value={email}
            onChange={(val) => setEmail(val)}
            error={errors.email}
            required 
          />
          
          <SmartInput 
            label="Нууц үг" 
            placeholder="••••••••" 
            mode="password" 
            value={password}
            onChange={(val) => setPassword(val)}
            error={errors.password}
            required 
          />

          <div style={{ marginTop: "16px" }}>
            <SmartButton text="Нэвтрэх" onClick={handleLogin} />
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "32px", fontSize: "14px", color: "#64748b" }}>
          Шинэ хэрэглэгч үү?{" "}
          <Link href="/register" style={{ color: "#3b82f6", fontWeight: "600", textDecoration: "none" }}>
            Бүртгүүлэх
          </Link>
        </div>
      </div>
    </div>
  );
}