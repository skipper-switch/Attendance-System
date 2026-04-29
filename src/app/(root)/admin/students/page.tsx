import React from 'react';

export default function AdminStudentsPage() {
    return (
        <div className="max-w-[1440px] w-full mx-auto pb-10 relative">
            {/* Success Toast (Positioned Absolute relative to main) */}

            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-slate-500 text-sm mb-4 font-body-sm">
                <a className="hover:text-indigo-600 transition-colors" href="#">Students</a>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <span className="text-slate-900 font-medium">Add New Student</span>
            </nav>

            {/* Heading */}
            <div className="mb-8">
                <h2 className="font-h2 text-h2 text-slate-900">Add New Student</h2>
                <p className="text-slate-500 mt-2 font-body-md">Register a new student to the academy attendance system.</p>
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-[0px_4px_6px_-1px_rgba(15,23,42,0.05)] overflow-hidden">
                <form className="divide-y divide-slate-100">

                    {/* Personal Details Section */}
                    <div className="p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="material-symbols-outlined text-indigo-600">person</span>
                            <h3 className="font-h3 text-h3 text-slate-900">Personal Details</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-slate-700 font-label-caps uppercase tracking-wider">Full Name</label>
                                <input
                                    className="w-full bg-slate-50 border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:bg-white rounded-lg px-4 py-3 transition-all outline-none"
                                    placeholder="e.g. Ada Okafor"
                                    type="text"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-slate-700 font-label-caps uppercase tracking-wider">Email Address</label>
                                <input
                                    className="w-full bg-slate-50 border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:bg-white rounded-lg px-4 py-3 transition-all outline-none"
                                    placeholder="ada.okafor@example.com"
                                    type="email"
                                />
                            </div>

                            <div className="space-y-2 md:col-span-2">
                                <label className="block text-sm font-bold text-slate-700 font-label-caps uppercase tracking-wider">Temporary Password</label>
                                <div className="relative">
                                    <input
                                        className="w-full bg-slate-50 border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:bg-white rounded-lg px-4 py-3 transition-all outline-none font-mono"
                                        type="text"
                                        defaultValue="WelcomeAcademy2024!"
                                    />
                                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-600 hover:text-indigo-700 font-semibold text-xs" type="button">Regenerate</button>
                                </div>

                                {/* Amber Warning */}
                                <div className="mt-4 flex items-start gap-3 bg-amber-50 border border-amber-100 p-4 rounded-lg">
                                    <span className="material-symbols-outlined text-amber-600 mt-0.5">warning</span>
                                    <p className="text-sm text-amber-800 font-body-sm">
                                        <span className="font-bold">Important:</span> This password is shown in plain text. Please ensure the student changes it immediately upon their first successful login.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cohort Assignment Section */}
                    <div className="p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="material-symbols-outlined text-indigo-600">school</span>
                            <h3 className="font-h3 text-h3 text-slate-900">Cohort Assignment</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-slate-700 font-label-caps uppercase tracking-wider">Select Cohort</label>
                                <div className="relative">
                                    <select defaultValue="" className="w-full bg-slate-50 border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:bg-white rounded-lg px-4 py-3 transition-all outline-none appearance-none cursor-pointer">
                                        <option disabled value="">Choose a cohort</option>
                                        <option value="cs2024">Computer Science - 2024 Intake</option>
                                        <option value="eng2023">Engineering - 2023 Intake</option>
                                        <option value="ds2024">Data Science - Advanced</option>
                                    </select>
                                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-slate-700 font-label-caps uppercase tracking-wider">Enrolment Date</label>
                                <div className="relative">
                                    <input className="w-full bg-slate-50 border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:bg-white rounded-lg px-4 py-3 transition-all outline-none cursor-pointer" type="date" />
                                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-sm">calendar_month</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Actions */}
                    <div className="p-8 bg-slate-50 flex flex-col sm:flex-row items-center justify-end gap-4 rounded-b-xl">
                        <button className="w-full sm:w-auto px-6 py-3 border border-slate-200 text-slate-600 font-bold font-body-md rounded-lg hover:bg-slate-100 transition-all" type="button">
                            Cancel
                        </button>
                        <button className="w-full sm:w-auto px-8 py-3 bg-indigo-600 text-white font-bold font-body-md rounded-lg shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 transition-all flex items-center justify-center gap-2" type="submit">
                            <span className="material-symbols-outlined text-lg">person_add</span>
                            Create Student
                        </button>
                    </div>
                </form>
            </div>

            {/* Metric Sidebar (Layout Enhancement) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                <div className="lg:col-span-2">
                    {/* Additional Info or Grid could go here */}
                </div>
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h4 className="font-h3 text-slate-900 mb-4">Registration Stats</h4>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-slate-500 font-body-sm">Capacity Filled</span>
                                <span className="font-bold text-slate-900">84%</span>
                            </div>
                            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                <div className="bg-indigo-500 h-full w-[84%]"></div>
                            </div>
                            <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wider text-slate-400">
                                <span>420 Registered</span>
                                <span>500 Total Seats</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-indigo-900 text-white p-6 rounded-xl relative overflow-hidden group">
                        <div className="relative z-10">
                            <h4 className="font-h3 mb-2">Need help?</h4>
                            <p className="text-indigo-200 text-sm mb-4">Read our documentation on managing student records and cohort transfers.</p>
                            <a className="inline-flex items-center text-sm font-bold text-white group-hover:underline" href="#">
                                View Guide <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                            </a>
                        </div>
                        <div className="absolute -right-4 -bottom-4 opacity-10 transform group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-[120px]">menu_book</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
