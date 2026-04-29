import React from 'react';

export default function AdminDashboardPage() {
  return (
    <div className="max-w-[1440px] w-full mx-auto pb-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="font-h1 text-h1 text-slate-900 mb-1">Dashboard</h1>
          <div className="flex items-center gap-2 text-slate-500 font-body-md">
            <span className="material-symbols-outlined text-indigo-500 text-lg">school</span>
            <span>Frontend Engineering &middot; Cohort 3 &middot; 2026</span>
          </div>
        </div>
        <div className="bg-white px-4 py-2 border border-slate-200 rounded-lg shadow-sm flex items-center gap-3">
          <span className="material-symbols-outlined text-slate-400">calendar_month</span>
          <span className="font-semibold text-slate-700">Wednesday, May 12, 2026</span>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="material-symbols-outlined p-2 bg-indigo-50 text-indigo-600 rounded-lg">group</span>
            <span className="text-xs font-label-caps text-slate-400 uppercase font-bold">Total Students</span>
          </div>
          <h2 className="font-h2 text-h2 text-slate-900">8</h2>
          <p className="text-slate-500 text-xs mt-1">Full cohort enrollment</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="material-symbols-outlined p-2 bg-green-50 text-green-600 rounded-lg">check_circle</span>
            <span className="text-xs font-label-caps text-slate-400 uppercase font-bold">Present Today</span>
          </div>
          <div className="flex items-baseline gap-2">
            <h2 className="font-h2 text-h2 text-slate-900">6</h2>
            <span className="text-green-600 font-bold text-sm">75%</span>
          </div>
          <p className="text-slate-500 text-xs mt-1">Verified on campus</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="material-symbols-outlined p-2 bg-amber-50 text-amber-600 rounded-lg">schedule</span>
            <span className="text-xs font-label-caps text-slate-400 uppercase font-bold">Late Today</span>
          </div>
          <div className="flex items-baseline gap-2">
            <h2 className="font-h2 text-h2 text-slate-900">1</h2>
            <span className="text-amber-600 font-bold text-sm">12.5%</span>
          </div>
          <p className="text-slate-500 text-xs mt-1">Arrived after 9:00 AM</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="material-symbols-outlined p-2 bg-red-50 text-red-600 rounded-lg">cancel</span>
            <span className="text-xs font-label-caps text-slate-400 uppercase font-bold">Absent Today</span>
          </div>
          <div className="flex items-baseline gap-2">
            <h2 className="font-h2 text-h2 text-slate-900">1</h2>
            <span className="text-red-600 font-bold text-sm">12.5%</span>
          </div>
          <p className="text-slate-500 text-xs mt-1">No check-in recorded</p>
        </div>
      </div>

      {/* Main Content Area: Two Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Today's Attendance Table */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-h3 text-h3 text-slate-900">Today's Attendance</h3>
            <button className="text-indigo-600 text-sm font-semibold hover:underline">View All Records</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-xs font-label-caps uppercase tracking-wider">
                  <th className="px-6 py-3">Student Name</th>
                  <th className="px-6 py-3">Check-In Time</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-xs text-slate-600">AA</div>
                      <span className="font-medium text-slate-900">Adebayo Akande</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">08:42 AM</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700">PRESENT</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-indigo-600"><span className="material-symbols-outlined">more_vert</span></button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-xs text-slate-600">EO</div>
                      <span className="font-medium text-slate-900">Emeka Okafor</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">08:55 AM</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700">PRESENT</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-indigo-600"><span className="material-symbols-outlined">more_vert</span></button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-xs text-slate-600">NB</div>
                      <span className="font-medium text-slate-900">Ngozi Bello</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">09:15 AM</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700">LATE</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-indigo-600"><span className="material-symbols-outlined">more_vert</span></button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-xs text-slate-600">SA</div>
                      <span className="font-medium text-slate-900">Seun Ajayi</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">—</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-red-700">ABSENT</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-indigo-600"><span className="material-symbols-outlined">more_vert</span></button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-xs text-slate-600">CI</div>
                      <span className="font-medium text-slate-900">Chioma Ifeanyi</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">08:30 AM</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700">PRESENT</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-indigo-600"><span className="material-symbols-outlined">more_vert</span></button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-xs text-slate-600">TK</div>
                      <span className="font-medium text-slate-900">Tunde Kalu</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">08:45 AM</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700">PRESENT</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-indigo-600"><span className="material-symbols-outlined">more_vert</span></button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-xs text-slate-600">YF</div>
                      <span className="font-medium text-slate-900">Yemi Fashola</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">08:50 AM</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700">PRESENT</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-indigo-600"><span className="material-symbols-outlined">more_vert</span></button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-xs text-slate-600">DM</div>
                      <span className="font-medium text-slate-900">Daniel Musa</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">08:58 AM</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700">PRESENT</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-indigo-600"><span className="material-symbols-outlined">more_vert</span></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="space-y-8">
          {/* Cohort Overview Card */}
          <div className="bg-slate-900 rounded-xl p-6 text-white border border-slate-800 shadow-sm">
            <h3 className="font-h3 text-h3 mb-6">Cohort Overview</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-400 text-sm">Overall Attendance Rate</span>
                  <span className="font-bold">82%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 rounded-full" style={{ width: '82%' }}></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-800/50 rounded-lg">
                  <p className="text-slate-400 text-xs uppercase font-label-caps mb-1 font-bold">Week 18 Avg</p>
                  <p className="text-xl font-bold">88.5%</p>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-lg">
                  <p className="text-slate-400 text-xs uppercase font-label-caps mb-1 font-bold">Target</p>
                  <p className="text-xl font-bold text-green-400">95%</p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-800">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Next Assessment</span>
                  <span className="text-white font-medium">May 15, 2026</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Students At Risk List */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-h3 text-h3 text-slate-900">Students At Risk</h3>
              <span className="px-2 py-0.5 rounded bg-red-100 text-red-700 text-[10px] font-bold">URGENT</span>
            </div>
            <div className="p-2">
              <div className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center font-bold text-amber-700">NB</div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">Ngozi Bello</p>
                    <p className="text-slate-500 text-xs">3 absences this month</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-red-600 font-extrabold">70%</p>
                  <p className="text-[10px] text-slate-400 uppercase font-bold">Attendance</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center font-bold text-red-700">SA</div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">Seun Ajayi</p>
                    <p className="text-slate-500 text-xs">Critical threshold</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-red-600 font-extrabold">60%</p>
                  <p className="text-[10px] text-slate-400 uppercase font-bold">Attendance</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100">
              <button className="w-full py-2 bg-white border border-slate-200 rounded-lg text-slate-700 text-sm font-bold hover:bg-slate-100 transition-colors">
                Generate Warning Reports
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Metric Grid Extra (Yearly Visual) */}
      <div className="mt-8 bg-white rounded-xl border border-slate-200 shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-h3 text-h3 text-slate-900">Cohort Activity Heatmap</h3>
          <div className="flex items-center gap-4 text-xs text-slate-500 font-body-sm">
            <div className="flex items-center gap-1"><div className="w-3 h-3 bg-slate-100 rounded-sm"></div> Absent</div>
            <div className="flex items-center gap-1"><div className="w-3 h-3 bg-indigo-200 rounded-sm"></div> Late</div>
            <div className="flex items-center gap-1"><div className="w-3 h-3 bg-indigo-600 rounded-sm"></div> Present</div>
          </div>
        </div>
        
        {/* Mock Attendance Grid */}
        {/* A simple grid of 31 items mapping to visually match the mock */}
        <div className="grid grid-cols-12 md:grid-cols-24 lg:grid-cols-[repeat(31,minmax(0,1fr))] gap-1">
          {/* Mock data blocks mapping for Row 1 */}
          <div className="w-full aspect-square bg-indigo-600 rounded-sm"></div>
          <div className="w-full aspect-square bg-indigo-600 rounded-sm"></div>
          <div className="w-full aspect-square bg-indigo-600 rounded-sm"></div>
          <div className="w-full aspect-square bg-slate-100 rounded-sm"></div>
          <div className="w-full aspect-square bg-indigo-600 rounded-sm"></div>
          <div className="w-full aspect-square bg-indigo-600 rounded-sm"></div>
          <div className="w-full aspect-square bg-indigo-600 rounded-sm"></div>
          <div className="w-full aspect-square bg-indigo-200 rounded-sm"></div>
          <div className="w-full aspect-square bg-indigo-600 rounded-sm"></div>
          <div className="w-full aspect-square bg-indigo-600 rounded-sm"></div>
          <div className="w-full aspect-square bg-indigo-600 rounded-sm"></div>
          <div className="w-full aspect-square bg-indigo-600 rounded-sm"></div>
          <div className="w-full aspect-square bg-indigo-600 rounded-sm"></div>
          <div className="w-full aspect-square bg-slate-100 rounded-sm"></div>
          <div className="w-full aspect-square bg-indigo-600 rounded-sm"></div>
          <div className="w-full aspect-square bg-indigo-600 rounded-sm"></div>
          <div className="w-full aspect-square bg-indigo-200 rounded-sm"></div>
          <div className="w-full aspect-square bg-indigo-600 rounded-sm"></div>
          <div className="w-full aspect-square bg-indigo-600 rounded-sm"></div>
          <div className="w-full aspect-square bg-indigo-600 rounded-sm"></div>
          <div className="w-full aspect-square bg-indigo-600 rounded-sm"></div>
          <div className="w-full aspect-square bg-indigo-600 rounded-sm"></div>
          <div className="w-full aspect-square bg-indigo-600 rounded-sm"></div>
          <div className="w-full aspect-square bg-slate-100 rounded-sm"></div>
          <div className="w-full aspect-square bg-indigo-600 rounded-sm"></div>
          <div className="w-full aspect-square bg-indigo-600 rounded-sm"></div>
          <div className="w-full aspect-square bg-indigo-600 rounded-sm"></div>
          <div className="w-full aspect-square bg-indigo-600 rounded-sm"></div>
          <div className="w-full aspect-square bg-indigo-600 rounded-sm"></div>
          <div className="w-full aspect-square bg-indigo-600 rounded-sm"></div>
          <div className="w-full aspect-square bg-indigo-600 rounded-sm"></div>
        </div>
        <p className="mt-4 text-xs text-slate-400 font-body-sm italic">Daily status aggregate for Frontend Engineering Cohort 3 (Last 30 Days)</p>
      </div>
    </div>
  );
}