"use client";
import React, { useState } from "react";

interface SmartInputProps {
  label?: string;
  placeholder?: string;
  mode?: "text" | "password" | "email" | "tel" | "url";
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  hideLabel?: boolean;
  style?: React.CSSProperties;
  error?: string;
}

export const SmartInput = ({
  label,
  placeholder,
  mode = "text",
  required,
  value,
  onChange,
  readOnly,
  hideLabel,
  style,
  error
}: SmartInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value); 
    }
  };

  const isPassword = mode === "password";
  const currentType = isPassword ? (isPasswordVisible ? "text" : "password") : mode;

  return (
    <div style={{ width: '100%', marginBottom: (label && !hideLabel) ? '20px' : '0px' }}>
      {label && !hideLabel && (
        <label style={{ display: 'block', fontSize: '13px', marginBottom: '6px', color: '#475569', fontWeight: '600' }}>
          {label}
        </label>
      )}
      
      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        border: error ? '1px solid #ef4444' : (isFocused ? '1px solid #0f172a' : '1px solid #e2e8f0'),
        borderRadius: '8px',
        height: '46px',
        backgroundColor: '#fff',
        boxShadow: isFocused ? '0 0 0 1px #0f172a' : 'none',
        ...style
      }}>
        <input
          type={currentType}
          value={value || ""} // This must be controlled by the parent
          onChange={handleChange} // This MUST exist for typing to work
          placeholder={placeholder}
          readOnly={readOnly}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{
            width: '100%',
            height: '100%',
            padding: '0 16px',
            border: 'none',
            outline: 'none',
            borderRadius: '8px',
            fontSize: '14px'
          }}
        />
        {isPassword && (
          <button 
            type="button"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            style={{ padding: '0 12px', background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}
          >
            {isPasswordVisible ? "👁️" : "🙈"}
          </button>
        )}
      </div>
      {error && <span style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{error}</span>}
    </div>
  );
};