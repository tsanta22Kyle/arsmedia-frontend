'use client'
import { Home, ImageIcon, LogOut, Menu, Settings, Upload, Video, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function Sidebar(){
    const [open,setOpen] = useState(true);
    const router = useRouter();
    const logout = ()=>{
       router.push('/auth/login')
    }

    return(
         <aside
        className={`${
          open ? "w-64" : "w-20"
        } bg-white border-r border-gray-200 h-full transition-all duration-300 flex flex-col`}
      >
        {/* Mobile Toggle */}
        <div className="p-4 flex items-center justify-between border-b border-gray-200">
          <h1
            className={`font-semibold text-lg transition-all ease-in-out duration-400 ${
              open ? "opacity-100" : "opacity-0 w-0 hidden"
            }`}
          >
            ArsMedia
          </h1>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 cursor-pointer z-10 rounded hover:bg-gray-100"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4 flex flex-col gap-2">
          {[
            { icon: <Home size={20} />, label: "Dashboard" ,link:"/" },
            { icon: <Upload size={20} />, label: "Upload" ,link:"/(dashboard)/"},
            { icon: <ImageIcon size={20} />, label: "Images" ,link:"/(dashboard)/"},
            { icon: <Video size={20} />, label: "Videos" ,link:"/video"},
            { icon: <Settings size={20} />, label: "Settings" ,link:"/(dashboard)/"},
          ].map((item, i) => (
            <Link
            href={item.link}
              key={i}
              className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-100 transition-all"
            >
              {item.icon}
              <span className={`${open ? "block" : "hidden"}`}>
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Avatar */}
        <div className="p-4 border-t border-gray-200 flex items-center gap-10">
            <div className="flex gap-3 items-center justify-center">

          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          {open && <span className="font-medium">John Doe</span>}
            </div>
          <button onClick={logout} className="cursor-pointer" >
          <LogOut size={30} className="text-[#d60000]" ></LogOut>
          </button>

        </div>
      </aside>
    )
}