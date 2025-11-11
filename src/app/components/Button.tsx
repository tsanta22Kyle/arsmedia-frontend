'use client'
import { ButtonHTMLAttributes } from "react";

interface Props {
  label?: string;
  className?: string;
  variant?: string;
  onClick?: () => void;
}

export default function Button({
  label = "label",
  className,
  variant = "default",
  onClick = ()=>{}
}: Props) {
  switch (variant) {
    case "default":
      return <button onClick={onClick} className={` bg-primary text-white px-8 py-2  ${className}  `}> {label} </button>;
  }
}
