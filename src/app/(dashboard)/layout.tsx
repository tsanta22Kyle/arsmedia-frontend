import { ReactNode } from "react";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen w-full flex ">
      <Sidebar></Sidebar>
      <div className="p-4">{children}</div>
    </div>
  );
}
