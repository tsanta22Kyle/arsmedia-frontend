'use client'
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const prefixes = [
  { code: "+261", country: "MG" },
  { code: "+33", country: "FR" },
  { code: "+1", country: "US" },
  { code: "+44", country: "UK" },
  { code: "+91", country: "IN" },
];

export default function PhonePrefixDropdown({ value, onChange }:{value : string , onChange : (value :string)=> void}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-14 bg-amber-500">
      {/* Trigger */}
      <button
        onClick={(e) =>  {e.preventDefault() ;setOpen(!open)}}
        className="w-full flex items-center justify-between  bg-white hover:border-gray-400 transition"
      >
        <span className="font-medium text-gray-700">{value}</span>
        <ChevronDown
          size={18}
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute mt-2 w-[112px] bg-white border border-gray-200 rounded-lg shadow-lg z-20 overflow-hidden animate-fade-in">
          {prefixes.map((p) => (
            <button
              key={p.code}
              onClick={() => {
                onChange(p.code);
                setOpen(false);
              }}
              className="w-full px-3 py-2 flex items-center justify-between hover:bg-gray-50 transition text-gray-700"
            >
              <span>{p.code}</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded-md">
                {p.country}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
