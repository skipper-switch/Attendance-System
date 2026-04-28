import React from 'react'

const CheckInPage = () => {
    return (
        <div>
            <main className=" flex items-center justify-center cursor-pointer">

                <div className="w-full max-w-[480px]">
                    <div className="bg-white rounded-xl border border-slate-200 shadow-[0px_4px_6px_-1px_rgba(15,23,42,0.05)] overflow-hidden transition-all hover:shadow-lg">

                        <div className="p-8 text-center bg-slate-50/50">
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <span className="material-symbols-outlined text-indigo-600 text-sm" data-icon="event">event</span>
                                <span className="text-slate-600 font-body-md font-semibold">Monday, 27 April 2026</span>
                            </div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100">
                                <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
                                <span className="text-indigo-700 text-sm font-medium font-body-sm">className is in session</span>
                            </div>
                        </div>
                        <div className="border-t border-slate-100"></div>

                        <div className="p-8 flex flex-col items-center text-center">

                            <div className="relative mb-8 group">
                                <div className="absolute inset-0 bg-indigo-500/20 blur-2xl rounded-full scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                                <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center shadow-xl shadow-indigo-200">
                                    <span className="material-symbols-outlined text-white text-6xl" data-icon="qr_code_scanner">qr_code_scanner</span>
                                </div>
                            </div>
                            <h2 className="font-h2 text-h2 text-slate-900 mb-3">You haven't checked in yet</h2>
                            <p className="text-slate-500 font-body-md max-w-[320px] mb-8">
                                The check-in window for <span className="font-bold text-slate-700">Advanced Mathematics</span> started at 09:00 AM. Please mark your presence now.
                            </p>
                            <div className="w-full space-y-4">
                                <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md shadow-indigo-200 transition-all active:scale-[0.98] flex items-center justify-center gap-3 group">
                                    <span className="material-symbols-outlined group-hover:scale-110 transition-transform" data-icon="check_circle">check_circle</span>
                                    Check In Now
                                </button>
                                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-100">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-slate-400" data-icon="info">info</span>
                                        <span className="text-slate-500 text-sm font-body-sm">Checking window:</span>
                                    </div>
                                    <span className="text-slate-900 font-bold font-body-sm">09:00 — 09:15</span>
                                </div>
                            </div>
                        </div>

                        <div className="px-8 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                            <span className="text-xs text-slate-400 font-body-sm flex items-center gap-1">
                                <span className="material-symbols-outlined text-xs" data-icon="location_on">location_on</span>
                                Verified Campus Wi-Fi Required
                            </span>
                            <span className="text-xs font-bold text-slate-500 font-label-caps tracking-widest">v2.4.1</span>
                        </div>
                    </div>

                    <p className="mt-6 text-center text-slate-400 font-body-sm px-10">
                        Facing issues? Contact the <a className="text-indigo-500 hover:underline" href="#">Academic Office</a> or use the help button at the top.
                    </p>
                </div>
            </main>
        </div>
    )
}

export default CheckInPage