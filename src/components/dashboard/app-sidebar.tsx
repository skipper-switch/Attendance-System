"use client"

import { useRouter, usePathname } from "next/navigation"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar"

const studentNavItems = [
  { label: "Dashboard",  icon: "dashboard",        href: "/student/dashboard" },
  { label: "Check In",   icon: "qr_code_scanner",  href: "/student/check-in" },
  { label: "Attendance", icon: "calendar_today",   href: "/student/attendance" },
  { label: "History",    icon: "history",          href: "/student/history" },
  { label: "Settings",   icon: "settings",         href: "/student/settings" },
]

const adminNavItems = [
  { label: "Dashboard",  icon: "dashboard",        href: "/admin/dashboard" },
  { label: "Attendance", icon: "calendar_today",   href: "/admin/attendance" },
  { label: "Students",   icon: "group",            href: "/admin/students" },
  { label: "Cohorts",    icon: "layers",           href: "/admin/cohorts" },
  { label: "Check In",   icon: "qr_code_scanner",  href: "/admin/check-in" },
  { label: "History",    icon: "history",          href: "/admin/history" },
]

export function AppSidebar() {
  const router   = useRouter()
  const pathname = usePathname()

  const isAdmin = pathname.startsWith("/admin")
  const navItems = isAdmin ? adminNavItems : studentNavItems

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
          {isAdmin ? (
            <div className="flex items-center gap-3 p-3 bg-slate-800/40 rounded-xl border border-slate-700/50">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtqxfw6rYNAOFRmcJheoJwH0HVSk4EoXdONJ8mnVl_8szWNgaQXfD6JBrNZsrhkDWDg22U1ItIej6iZZSqOFOeI63vl4xGb_OV27rPiUdAFH-iv-HqTQBnqqyMVsEezwQmi7Yijg7aIxmj3kvbmLSTkDHuQNuBV4AX_IhpB16cXQixOAz6p-hYUoEJKLAC2GBkOliVE_RyZNXxKfrDvraxUtWbvsyHWBh_jgoAkB9DqjGJRIack9RnGoE7XhMkWu25TSlXjAyM3Q"
                alt="Mr. Ade Coker"
                className="w-10 h-10 rounded-full border-2 border-indigo-500/30 object-cover shrink-0"
              />
              <div className="flex flex-col overflow-hidden">
                <span className="text-white text-sm font-semibold truncate">Mr. Ade Coker</span>
                <span className="text-slate-400 text-[10px] uppercase tracking-widest font-bold truncate">
                  Administrator
                </span>
              </div>
            </div>
          ) : (
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
          )}
        </div>

        {/* ── Nav links ── */}
        <SidebarContent className="flex-1 px-0 overflow-y-auto no-scrollbar">
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

        {/* ── Settings & Sign out ── */}
        <SidebarFooter className="mt-auto px-4 border-none flex flex-col gap-1">
          {isAdmin && (
            <button
              onClick={() => router.push("/admin/settings")}
              className={`flex items-center gap-3 px-4 py-3 w-full rounded-lg transition-all text-sm font-medium cursor-pointer ${
                pathname.startsWith("/admin/settings")
                  ? "bg-indigo-600 text-white scale-[0.98]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">settings</span>
              Settings
            </button>
          )}
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