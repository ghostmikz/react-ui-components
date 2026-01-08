"use client";
import React, { useState } from "react";
import { SmartInput, SmartButton, SmartFormField } from "@repo/ui";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    firstName: "Chingunjav",
    lastName: "Ariuntur",
    email: "chingunjav.ariuntur@gmail.com",
    phone: "95186410",
    position: "Developer"
  });

  // Helper to update the user state
  const handleChange = (field: string, value: string) => {
    setUser((prev) => ({ ...prev, [field]: value }));
  };

  // Styling for the text when NOT in edit mode
  const readOnlyValueStyle: React.CSSProperties = {
    padding: '10px 0',
    fontSize: '15px',
    fontWeight: '600',
    color: '#1e293b',
    borderBottom: '1px solid transparent' // Keeps layout stable
  };

  return (
    <div style={{ maxWidth: '850px', margin: '40px auto', padding: '0 20px', fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '32px' 
      }}>
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: '850', color: '#0f172a', margin: 0 }}>Миний бүртгэл</h1>
          <p style={{ color: '#64748b', fontSize: '14px', marginTop: '4px' }}>Хувийн мэдээллээ эндээс удирдана уу</p>
        </div>
        
        <div style={{ width: '120px' }}>
          <SmartButton 
            variant={isEditing ? "outline" : "primary"}
            text={isEditing ? "Цуцлах" : "Засах"} 
            onClick={() => setIsEditing(!isEditing)} 
          />
        </div>
      </div>

      <div style={{ 
        background: isEditing ? '#ffffff' : '#f8fafc', 
        borderRadius: '16px', 
        padding: '32px',
        border: '1px solid #e2e8f0',
        transition: 'all 0.3s ease'
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '24px' 
        }}>
          
          <SmartFormField label="Нэр">
            {isEditing ? (
              <SmartInput value={user.firstName} onChange={(val) => handleChange("firstName", val)} hideLabel />
            ) : (
              <div style={readOnlyValueStyle}>{user.firstName}</div>
            )}
          </SmartFormField>

          <SmartFormField label="Овог">
            {isEditing ? (
              <SmartInput value={user.lastName} onChange={(val) => handleChange("lastName", val)} hideLabel />
            ) : (
              <div style={readOnlyValueStyle}>{user.lastName}</div>
            )}
          </SmartFormField>

          <div style={{ gridColumn: 'span 2' }}>
            <SmartFormField label="Имэйл хаяг">
              {isEditing ? (
                <SmartInput value={user.email} onChange={(val) => handleChange("email", val)} hideLabel />
              ) : (
                <div style={readOnlyValueStyle}>{user.email}</div>
              )}
            </SmartFormField>
          </div>

          <SmartFormField label="Албан тушаал">
            {isEditing ? (
              <SmartInput value={user.position} onChange={(val) => handleChange("position", val)} hideLabel />
            ) : (
              <div style={readOnlyValueStyle}>{user.position}</div>
            )}
          </SmartFormField>

          <SmartFormField label="Холбоо барих">
            {isEditing ? (
              <SmartInput value={user.phone} onChange={(val) => handleChange("phone", val)} hideLabel />
            ) : (
              <div style={readOnlyValueStyle}>{user.phone}</div>
            )}
          </SmartFormField>

        </div>

        {isEditing && (
          <div style={{ 
            marginTop: '32px', 
            paddingTop: '24px', 
            borderTop: '1px solid #f1f5f9',
            display: 'flex',
            justifyContent: 'flex-end'
          }}>
            <div style={{ width: '160px' }}>
              <SmartButton text="Хадгалах" onClick={() => {
                console.log("Updated User:", user);
                setIsEditing(false);
              }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}