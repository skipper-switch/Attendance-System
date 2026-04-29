"use client";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <SidebarProvider>
      <main className="flex w-screen h-screen">

        <div className="h-full sticky top-0">
          <AppSidebar />
        </div>


        <div className="flex-1 flex flex-col overflow-hidden bg-slate-50">

          <header className="flex items-center justify-between px-18 h-16 bg-white border-b border-slate-200 sticky top-0 z-40 shrink-0">

            <div className="flex items-center gap-4 flex-1">
              <div className="relative w-full max-w-md">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg select-none">
                  search
                </span>
                <input
                  type="text"
                  placeholder="Search attendance records..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
                />
              </div>
            </div>


            <div className="flex items-center gap-3 ml-6">
              <button className="p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-all">
                <span className="material-symbols-outlined text-[22px]">notifications</span>
              </button>
              <button className="p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-all">
                <span className="material-symbols-outlined text-[22px]">help_outline</span>
              </button>

              <div className="h-8 w-px bg-slate-200 mx-1" />


              {isAdmin ? (
                <div className="flex items-center gap-2">
                  <div className="flex flex-col items-end hidden sm:flex">
                    <span className="text-xs font-bold text-slate-900">Mr. Ade Coker</span>
                    <span className="text-[10px] text-slate-500 font-medium">Administrator</span>
                  </div>
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtqxfw6rYNAOFRmcJheoJwH0HVSk4EoXdONJ8mnVl_8szWNgaQXfD6JBrNZsrhkDWDg22U1ItIej6iZZSqOFOeI63vl4xGb_OV27rPiUdAFH-iv-HqTQBnqqyMVsEezwQmi7Yijg7aIxmj3kvbmLSTkDHuQNuBV4AX_IhpB16cXQixOAz6p-hYUoEJKLAC2GBkOliVE_RyZNXxKfrDvraxUtWbvsyHWBh_jgoAkB9DqjGJRIack9RnGoE7XhMkWu25TSlXjAyM3Q"
                    alt="Mr. Ade Coker"
                    className="h-8 w-8 rounded-full border border-indigo-500/30 object-cover shrink-0"
                  />
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-900 hidden sm:block">Ada Okafor</span>
                  <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                    AO
                  </div>
                </div>
              )}
            </div>
          </header>


          <div className="flex-1 overflow-auto no-scrollbar px-8 py-6">
            {children}
          </div>
        </div>
      </main>
    </SidebarProvider>
  );
}
