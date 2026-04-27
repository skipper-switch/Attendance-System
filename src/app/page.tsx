
import Image from "next/image";
import Link from "next/link";
import LandingImage from "../../public/images/dasboard-logo.jpg";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-10 px-6 py-12 lg:flex-row lg:px-10">
        <section className="w-full lg:w-1/2">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-blue-800">
              Welcome to Academy Attendance
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Track attendance, manage cohorts, and empower student success.
            </h1>
            <p className="max-w-xl text-lg text-slate-600">
              A simple learning project backed by JSON Server and localStorage auth. Sign in to access the admin dashboard or create a student account and start checking in.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/sign-in" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-700">
                Login
              </Link>
             
            </div>
          </div>
        </section>

        <section className="w-full lg:w-1/2">
          <div className="relative mx-auto max-w-full overflow-hidden rounded-[32px] border border-blue-200 bg-blue-50 p-4 shadow-2xl shadow-blue-100/50 sm:p-6">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-transparent to-white" />
            <div className="relative">
              <Image src={LandingImage} alt="Login landing graphic" placeholder="blur" className="h-auto w-full rounded-[28px] object-cover" priority />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
