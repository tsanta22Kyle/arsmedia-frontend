'use client'
import { ButtonHTMLAttributes } from "react";

interface Props {
  children?: string;
  className?: string;
  variant?: string;
  onClick?: () => void;
}

export default function Button({
  children ,
  className,
  variant = "default",
  onClick = ()=>{}
}: Props) {
  switch (variant) {
    case "default":
      return <button  onClick={onClick} className={` ${className} cursor-pointer hover:opacity-90 bg-primary text-white px-8 py-4 rounded-md`}> {children} </button>
  }
}
