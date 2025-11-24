"use client";
import { useState } from "react";
import { Box, Image as ImageIcon, Video } from "lucide-react";

export default function MediaDashboard() {
  const [open, setOpen] = useState(true);

  return (
    <div className="w-full h-screen flex bg-white text-gray-800">
      {/* Sidebar */}
     

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <h2 className="text-2xl font-bold mb-6">Hello John Doe 👋</h2>
        <p className="text-gray-500 mb-8">
          Choose a media transformation action
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-10 flex items-center justify-center gap-5  border border-[#00000033] rounded-2xl shadow-sm hover:shadow-md transition cursor-pointer bg-white">
            <span className="bg-primary p-3 rounded-full">
              <ImageIcon size={35} className="text-white"></ImageIcon>
            </span>
            <span className="">
              <h3 className="font-semibold mb-2">Convert Image</h3>
              <p className="text-gray-500 text-sm">
                PNG → JPG, resize, compress…
              </p>
            </span>
          </div>

          <div className="p-10 flex items-center justify-center gap-5  border border-[#00000033] rounded-2xl shadow-sm hover:shadow-md transition cursor-pointer bg-white">
            <span className="bg-primary p-3 rounded-full">
              <Video size={35} className="text-white"></Video>
            </span>
            <span className="">
              <h3 className="font-semibold mb-2">Convert Video</h3>
              <p className="text-gray-500 text-sm">
                MP4 → WebM, cut, compress…
              </p>
            </span>
          </div>

          <div className="p-10 flex items-center justify-center gap-5  border border-[#00000033] rounded-2xl shadow-sm hover:shadow-md transition cursor-pointer bg-white">
            <span className="bg-primary p-3 rounded-full">
              <Box size={35} className="text-white"></Box>
            </span>
            <span className="">
              <h3 className="font-semibold mb-2">Audio Tools</h3>
              <p className="text-gray-500 text-sm">
                Extract audio, convert formats…
              </p>
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
