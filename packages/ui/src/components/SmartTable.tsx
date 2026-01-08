"use client";
import React from "react";

interface Column {
  dataField: string;
  caption: string;
  width?: string | number;
  cellRender?: (data: any) => React.ReactNode;
}

interface SmartTableProps {
  dataSource: any[];
  columns: Column[];
  style?: React.CSSProperties;
}

export const SmartTable = ({ dataSource, columns, style }: SmartTableProps) => {
  return (
    <div
      style={{
        fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
        width: "100%",
        overflowX: "auto", // Handle mobile responsiveness
        borderRadius: "12px",
        border: "1px solid #f1f5f9",
        background: "#ffffff",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.01)",
        ...style,
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "left",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
            {columns.map((col) => (
              <th
                key={col.dataField}
                style={{
                  padding: "16px",
                  color: "#64748b",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  width: col.width,
                }}
              >
                {col.caption}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              style={{
                borderBottom: "1px solid #f1f5f9",
                transition: "background-color 0.2s",
                height: "56px",
              }}
              // Simple hover effect without external CSS
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#fbfcfe")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              {columns.map((col) => (
                <td
                  key={col.dataField}
                  style={{
                    padding: "0 16px",
                    fontSize: "14px",
                    color: "#1e293b",
                    verticalAlign: "middle",
                  }}
                >
                  {/* If a custom cellRender is provided, use it; otherwise, show the dataField value */}
                  {col.cellRender 
                    ? col.cellRender(row) 
                    : row[col.dataField]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer / Pagination Placeholder */}
      <div
        style={{
          padding: "15px 20px",
          borderTop: "1px solid #f1f5f9",
          color: "#64748b",
          fontSize: "12px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>Нийт {dataSource.length}</span>
        <div style={{ display: "flex", gap: "8px" }}>
          {/* You can add pagination buttons here later if needed */}
        </div>
      </div>
    </div>
  );
};