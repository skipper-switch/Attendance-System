"use client"

import { useRouter, usePathname } from "next/navigation"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar"

const navItems = [
  { label: "Dashboard",  icon: "dashboard",        href: "/student/dashboard" },
  { label: "Check In",   icon: "qr_code_scanner",  href: "/student/check-in" },
  { label: "Attendance", icon: "calendar_today",   href: "/student/attendance" },
  { label: "History",    icon: "history",          href: "/student/history" },
  { label: "Settings",   icon: "settings",         href: "/student/settings" },
]

export function AppSidebar() {
  const router   = useRouter()
  const pathname = usePathname()

  return (
    <Sidebar className="w-[255px] bg-slate-900 border-r border-slate-800">
      <div className="flex flex-col h-full py-6">

        {/* ── Brand ── */}
        <SidebarHeader className="px-8 mb-10 flex flex-col gap-1">
          <span className="text-xl font-bold text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Academy Portal
          </span>
          <span className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">
            Attendance System
          </span>
        </SidebarHeader>

        {/* ── User card ── */}
        <div className="px-6 mb-8">
          <div className="flex items-center gap-3 p-3 bg-slate-800/40 rounded-xl border border-slate-700/50">
            <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold shrink-0">
              AO
            </div>
            <div className="flex flex-col">
              <span className="text-white text-sm font-semibold">Ada Okafor</span>
              <span className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">
                Student · Cohort 3
              </span>
            </div>
          </div>
        </div>

        {/* ── Nav links ── */}
        <SidebarContent className="flex-1 px-0">
          <nav className="flex flex-col gap-0.5">
            {navItems.map(({ label, icon, href }) => {
              const isActive = pathname === href || pathname.startsWith(href + "/")
              return (
                <button
                  key={label}
                  onClick={() => router.push(href)}
                  className={`flex items-center gap-3 px-4 py-3 mx-4 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? "bg-indigo-600 text-white scale-[0.98]"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">{icon}</span>
                  {label}
                </button>
              )
            })}
          </nav>
        </SidebarContent>

        {/* ── Sign out ── */}
        <SidebarFooter className="mt-auto px-4 border-none">
          <button
            onClick={() => router.push("/sign-in")}
            className="flex items-center gap-3 px-4 py-3 w-full text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-all text-sm font-medium cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">logout</span>
            Sign Out
          </button>
        </SidebarFooter>

      </div>
    </Sidebar>
  )
}