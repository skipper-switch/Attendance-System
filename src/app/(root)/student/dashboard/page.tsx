"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getUser } from "@/lib/auth";
import { useGetAttendanceQuery } from "@/redux/features/api/apiSlice";
import { AttendanceRecord } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";

export default function StudentDashboardPage() {
  const router = useRouter();

  // FIX 1: Don't call getUser() at module/render scope.
  // It reads localStorage/cookies which don't exist on the server.
  // Instead, hold it in state and populate it after mount.
  const [user, setUser] = useState<ReturnType<typeof getUser> | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const u = getUser();
    setUser(u);
    setMounted(true);
    if (!u || u.role !== "student") {
      router.push("/sign-in");
    }
  }, [router]);

  const { data: attendance, isLoading, error } = useGetAttendanceQuery(
    {},
    // FIX 2: Skip the query until we know the user exists client-side,
    // avoids a flash of unauthenticated requests too.
    { skip: !mounted || !user }
  );

  // FIX 3: While not yet mounted (SSR / first paint), return null.
  // This ensures the server and client render the exact same tree
  // (both render null), eliminating the hydration mismatch.
  if (!mounted) return null;

  if (!user || user.role !== "student") return null;

  if (isLoading) {
    return (
      <div className="space-y-4 p-8">
        <Skeleton className="h-10 w-64" />
        <div className="grid grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-32 w-full rounded-xl" />
          ))}
        </div>
        <Skeleton className="h-72 w-full rounded-xl" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 space-y-2">
        <h1 className="text-2xl font-bold text-slate-900">Student Dashboard</h1>
        <p className="text-red-500">
          Error loading attendance: {JSON.stringify(error)}
        </p>
      </div>
    );
  }

  const studentAttendance =
    attendance?.filter(
      (record: AttendanceRecord) => record.studentId === user?.id
    ) || [];

  const totalDays = studentAttendance.length;
  const presentDays = studentAttendance.filter(
    (r: AttendanceRecord) => r.status === "present"
  ).length;
  const lateDays = studentAttendance.filter(
    (r: AttendanceRecord) => r.status === "late"
  ).length;
  const absentDays = studentAttendance.filter(
    (r: AttendanceRecord) => r.status === "absent"
  ).length;
  const attendancePct =
    totalDays > 0 ? Math.round((presentDays / totalDays) * 100) : 0;

  const recentActivity = [...studentAttendance]
    .sort(
      (a: AttendanceRecord, b: AttendanceRecord) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    .slice(0, 5);

  const statusStyle = (status: string) => {
    if (status === "present")
      return {
        bg: "bg-emerald-50", text: "text-emerald-600",
        badge: "bg-emerald-50 text-emerald-700", icon: "check_circle",
      };
    if (status === "late")
      return {
        bg: "bg-amber-50", text: "text-amber-600",
        badge: "bg-amber-50 text-amber-700", icon: "schedule",
      };
    return {
      bg: "bg-rose-50", text: "text-rose-600",
      badge: "bg-rose-50 text-rose-700", icon: "cancel",
    };
  };

  return (
    <div className="max-w-[1440px] mx-auto space-y-8">

      {/* ── Header ── */}
      <div className="flex items-end justify-between">
        <div>
          <h1
            className="text-[36px] font-bold leading-[1.1] tracking-[-0.02em] text-slate-900"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Good morning, {user?.name ?? "Ada"} 👋
          </h1>
          <p className="text-slate-500 mt-1 text-base">
            Frontend Engineering · Cohort 3
          </p>
        </div>
        <button
          onClick={() => router.push("/student/check-in")}
          className="flex items-center cursor-pointer gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20"
        >
          <span className="material-symbols-outlined text-lg">qr_code_scanner</span>
          Scan Check In
        </button>
      </div>

      {/* ── Stats Row ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-[0px_4px_6px_-1px_rgba(15,23,42,0.05)]">
          <div className="flex justify-between items-start mb-4">
            <div className="h-10 w-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
              <span className="material-symbols-outlined">monitoring</span>
            </div>
            <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded text-[10px] font-bold uppercase">
              +2.4%
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-slate-500 text-[11px] tracking-widest uppercase font-bold">Overall Attendance</span>
            <span className="text-[28px] font-bold text-slate-900 mt-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {attendancePct}%
            </span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-[0px_4px_6px_-1px_rgba(15,23,42,0.05)]">
          <div className="flex justify-between items-start mb-4">
            <div className="h-10 w-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
              <span className="material-symbols-outlined">check_circle</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-slate-500 text-[11px] tracking-widest uppercase font-bold">Days Present</span>
            <span className="text-[28px] font-bold text-slate-900 mt-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {presentDays}
            </span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-[0px_4px_6px_-1px_rgba(15,23,42,0.05)]">
          <div className="flex justify-between items-start mb-4">
            <div className="h-10 w-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
              <span className="material-symbols-outlined">schedule</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-slate-500 text-[11px] tracking-widest uppercase font-bold">Late Arrivals</span>
            <span className="text-[28px] font-bold text-slate-900 mt-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {lateDays}
            </span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-[0px_4px_6px_-1px_rgba(15,23,42,0.05)]">
          <div className="flex justify-between items-start mb-4">
            <div className="h-10 w-10 rounded-lg bg-rose-50 flex items-center justify-center text-rose-600">
              <span className="material-symbols-outlined">cancel</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-slate-500 text-[11px] tracking-widest uppercase font-bold">Absent Days</span>
            <span className="text-[28px] font-bold text-slate-900 mt-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {absentDays}
            </span>
          </div>
        </div>
      </div>

      {/* ── Bento Grid ── */}
      <div className="grid grid-cols-12 gap-6 items-start">
        <div className="col-span-12 lg:col-span-8 bg-white p-8 rounded-xl border border-slate-200 shadow-[0px_4px_6px_-1px_rgba(15,23,42,0.05)]">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-[20px] font-semibold text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Monthly Attendance
              </h3>
              <p className="text-slate-500 text-sm">Performance tracking for the last 3 months</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 border border-slate-200 rounded-lg text-slate-400 hover:bg-slate-50">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="p-2 border border-slate-200 rounded-lg text-slate-400 hover:bg-slate-50">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="flex items-end justify-between h-64 pt-8 px-12 border-b border-slate-100">
            <div className="group relative flex flex-col items-center w-24">
              <div className="w-full bg-emerald-500 rounded-t-lg transition-all hover:brightness-110" style={{ height: "88%" }} />
              <span className="absolute -top-8 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">88%</span>
              <span className="mt-4 font-bold text-sm text-slate-500">Feb</span>
            </div>
            <div className="group relative flex flex-col items-center w-24">
              <div className="w-full bg-amber-400 rounded-t-lg transition-all hover:brightness-110" style={{ height: "72%" }} />
              <span className="absolute -top-8 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">72%</span>
              <span className="mt-4 font-bold text-sm text-slate-500">Mar</span>
            </div>
            <div className="group relative flex flex-col items-center w-24">
              <div className="w-full bg-emerald-500 rounded-t-lg transition-all hover:brightness-110" style={{ height: `${attendancePct}%` }} />
              <span className="absolute -top-8 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">{attendancePct}%</span>
              <span className="mt-4 font-bold text-sm text-slate-500">Apr</span>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 bg-white p-8 rounded-xl border border-slate-200 shadow-[0px_4px_6px_-1px_rgba(15,23,42,0.05)]">
          <div className="mb-6">
            <h3 className="text-[20px] font-semibold text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Recent Activity
            </h3>
            <p className="text-slate-500 text-sm">Your last 5 check-ins</p>
          </div>
          <div className="space-y-4">
            {recentActivity.length === 0 ? (
              <p className="text-slate-400 text-sm text-center py-6">No records yet.</p>
            ) : (
              recentActivity.map((record: AttendanceRecord) => {
                const style = statusStyle(record.status);
                // FIX 4: Hardcode locale to prevent server/client mismatch.
                const dateLabel = new Date(record.date).toLocaleDateString("en-GB", {
                  weekday: "long", month: "long", day: "numeric"
                });
                const timeLabel = record.checkInTime
                  ? `In: ${new Date(record.checkInTime).toLocaleTimeString("en-GB", {
                      hour: "2-digit", minute: "2-digit"
                    })}`
                  : "No Record";

                return (
                  <div
                    key={record.id}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                  >
                    <div className={`h-10 w-10 rounded-full ${style.bg} flex items-center justify-center ${style.text} shrink-0`}>
                      <span className="material-symbols-outlined text-xl">{style.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-slate-900 truncate">{dateLabel}</p>
                      <p className="text-xs text-slate-500">{timeLabel}</p>
                    </div>
                    <span className={`text-[10px] font-bold uppercase px-2 py-1 ${style.badge} rounded-full shrink-0`}>
                      {record.status}
                    </span>
                  </div>
                );
              })
            )}
          </div>
          <button className="w-full mt-6 py-3 border border-slate-200 rounded-lg text-slate-600 text-sm font-bold hover:bg-slate-50 transition-all">
            View All Records
          </button>
        </div>
      </div>

      {/* ── Secondary Bento ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-indigo-600 rounded-xl p-8 text-white relative overflow-hidden group">
          <div className="relative z-10">
            <h4 className="text-[20px] font-semibold mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Cohort Milestones
            </h4>
            <p className="text-indigo-100 text-sm mb-6">
              You&apos;ve completed {attendancePct}% of your current module&apos;s attendance requirements.
            </p>
            <div className="w-full bg-indigo-500/50 h-2 rounded-full overflow-hidden">
              <div className="bg-white h-full rounded-full transition-all" style={{ width: `${attendancePct}%` }} />
            </div>
          </div>
          <div className="absolute -right-10 -bottom-10 opacity-10 scale-150 transform group-hover:rotate-12 transition-transform duration-500">
            <span className="material-symbols-outlined text-[120px]">auto_awesome</span>
          </div>
        </div>

        <div className="bg-white border border-slate-200 p-8 rounded-xl flex items-center gap-6">
          <div className="bg-amber-100 h-16 w-16 rounded-2xl flex items-center justify-center text-amber-600 shrink-0">
            <span className="material-symbols-outlined text-3xl">event_note</span>
          </div>
          <div>
            <span className="text-amber-600 text-[10px] font-bold uppercase">Reminder</span>
            <h4 className="text-lg font-semibold text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Module 4 Review
            </h4>
            <p className="text-slate-500 text-sm">Tomorrow · 10:00 AM</p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 p-8 rounded-xl flex items-center gap-6">
          <div className="h-16 w-16 rounded-full overflow-hidden shrink-0 bg-slate-200 flex items-center justify-center text-slate-500">
            <span className="material-symbols-outlined text-3xl">person</span>
          </div>
          <div>
            <span className="text-indigo-600 text-[10px] font-bold uppercase">Feedback</span>
            <p className="text-slate-900 text-sm font-medium italic">
              &quot;Great consistency this week! Keep it up.&quot;
            </p>
            <p className="text-slate-500 text-xs mt-1">— Prof. Sarah Jenkins</p>
          </div>
        </div>
      </div>
    </div>
  );
}