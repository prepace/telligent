import type React from "react";
import { Inter } from "next/font/google";
import "../globals.css";
import Sidebar from "@/components/Admin/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "News Admin Dashboard",
  description: "Admin dashboard for managing news articles",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar />
      {/* Main content */}
      <div className="flex-1 md:ml-16">
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
