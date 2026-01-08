"use client";
import React from "react";

interface Option {
  value: string | number;
  label: string;
}

interface SmartSelectProps {
  options: Option[];
  value: string | number; // Specific type instead of 'any'
  onChange: (value: string) => void; // Returns value directly, not the event
  label?: string;
  hideLabel?: boolean;
  placeholder?: string;
}

export const SmartSelect = ({ 
  options, 
  value, 
  onChange, 
  label, 
  hideLabel,
  placeholder = "Сонгох..." 
}: SmartSelectProps) => {
  
  // Logic to handle change and return the value string
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '6px', 
      width: '100%',
      fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif'
    }}>
      {label && !hideLabel && (
        <label style={{ 
          fontSize: '13px', 
          fontWeight: '500', 
          color: '#334155' 
        }}>
          {label}
        </label>
      )}

      <div style={{ 
        position: 'relative', 
        width: '100%', 
        display: 'flex', 
        alignItems: 'center'
      }}>
        <select 
          value={value}
          onChange={handleChange}
          style={{ 
            width: '100%',
            height: '46px', 
            padding: '0 35px 0 14px', 
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            background: '#ffffff',
            fontSize: '14px', 
            fontWeight: '500',
            color: '#0f172a',
            outline: 'none',
            fontFamily: 'inherit',
            cursor: 'pointer',
            appearance: 'none',
            WebkitAppearance: 'none',
            transition: 'all 0.2s ease',
            boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = '#0f172a';
            e.currentTarget.style.boxShadow = '0 0 0 1px #0f172a';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = '#e2e8f0';
            e.currentTarget.style.boxShadow = '0 1px 2px rgba(0,0,0,0.05)';
          }}
        >
          {/* Default placeholder option */}
          <option value="" disabled>{placeholder}</option>
          
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        
        {/* Custom Arrow Icon */}
        <div style={{ 
          position: 'absolute', 
          right: '14px', 
          pointerEvents: 'none',
          color: '#64748b',
          fontSize: '10px',
          userSelect: 'none'
        }}>
          ▼
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        select:hover { border-color: #cbd5e1; }
      `}} />
    </div>
  );
};