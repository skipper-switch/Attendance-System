"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Eye, EyeOff, CheckCircle, BarChart3, ShieldCheck, GraduationCap } from "lucide-react";
import { Form } from "@/components/ui/form";
import { SignInSchema } from "@/lib/schemas";
import { useRouter } from "next/navigation";
import CustomFormField, { FormFieldType } from "@/components/shared/CustomFormField";
import SubmitButton from "@/components/shared/SubmitButton";
import ToastNotification from "@/components/shared/ToastNotification";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/redux/features/auth/authSlice";

export default function SignInPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [login, { isLoading }] = useLoginMutation();
  const [errorMessage, setErrorMessage] = useState<string>("");

  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof SignInSchema>) => {
    setErrorMessage("");        // ← Clear previous error

    try {
      const users = await login(values).unwrap();

      if (!Array.isArray(users) || users.length === 0) {
        throw new Error("Invalid email or password");
      }

      const user = users[0];
      const token = user.id.toString();

      dispatch(setCredentials({ token, user }));

      const redirectPath = user.role === "admin" ? "/admin/dashboard" : "/student/dashboard";
      router.push(redirectPath);

      ToastNotification({
        title: "Successful",
        description: "Logged in successfully",
        type: "success",
      });
     
    } catch (error: any) {
      console.log("Login error:", error);
      
      const message = error?.data?.error || error?.message || "Invalid email or password";
      setErrorMessage(message);                    // ← Set error message

      ToastNotification({
        title: "Error",
        description: message,
        type: "error",
      });
    }
  };



  return (
    <main className="flex h-screen w-full font-sans bg-white antialiased overflow-hidden">
    
      <section className="hidden lg:flex flex-col justify-between w-1/2 bg-[#0F172A] p-12 text-white relative overflow-hidden">
       
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '24px 24px' }}
        ></div>
        

        <div className="relative z-10">
          <span className="text-sm uppercase tracking-[0.2em] font-extrabold text-white/90">ACADEMY</span>
        </div>

        {/* Middle: Marketing Content */}
        <div className="relative z-10 max-w-lg">
          <h1 className="text-[48px] leading-tight mb-12 font-extrabold text-white">
            Track attendance.<br />Stay accountable.
          </h1>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center border border-white/5">
                <CheckCircle className="text-[#6366F1]" size={20} />
              </div>
              <p className="text-base text-white/80">Check in with one tap</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center border border-white/5">
                <BarChart3 className="text-[#6366F1]" size={20} />
              </div>
              <p className="text-base text-white/80">See your monthly progress</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center border border-white/5">
                <ShieldCheck className="text-[#6366F1]" size={20} />
              </div>
              <p className="text-base text-white/80">Role-based access</p>
            </div>
          </div>
        </div>

        {/* Bottom: Muted Footer Text */}
        <div className="relative z-10">
          <p className="text-sm text-[#6366F1]/80 font-medium tracking-wide">
            Frontend Engineering · Cohort 3
          </p>
        </div>
      </section>

      {/* Right Panel: Login Form */}
      <section className="w-full lg:w-1/2 flex items-center justify-center bg-[#f7f9fb] p-6 text-[#191c1e]">
        <div className="w-full max-w-[440px]">
          {/* Sign In Card */}
          <div className="bg-white rounded-2xl border border-[#c6c6cd]/30 px-10 md:px-12 py-6 shadow-sm">
            {/* Form Header */}
            <div className="flex flex-col items-center mb-10">
              <div className="w-12 h-12 bg-[#6366F1] rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-[#6366F1]/20">
                <GraduationCap className="text-white" size={28} />
              </div>
              <h2 className="text-[28px] font-bold text-[#191c1e] text-center">Welcome back</h2>
              <p className="text-sm text-[#45464d] text-center mt-1">Sign in to your academy account</p>
            </div>

            {errorMessage && (
              <div 
                data-testid="login-error"
                className="mb-6 p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium"
              >
                {errorMessage}
              </div>
            )}

            {/* Form */}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                
                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="email"
                  data-testid="email-input"
                  label={<span className="font-semibold text-[#191c1e] text-sm">Email address</span>}
                  placeholder="name@example.com"
                  variant="!w-full !px-4 !py-3 !bg-[#f2f4f6] !border-transparent !rounded-lg focus-visible:ring-2 focus-visible:ring-[#6366F1] focus-visible:bg-white transition-all outline-none text-[#191c1e] placeholder:text-[#c6c6cd] text-base"
                />

                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="password"
                  data-testid="password-input"
                  label={<span className="font-semibold text-[#191c1e] text-sm">Password</span>}
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  variant="!w-full !px-4 !py-3 !bg-[#f2f4f6] !border-transparent !rounded-lg focus-visible:ring-2 focus-visible:ring-[#6366F1] focus-visible:bg-white transition-all outline-none text-[#191c1e] placeholder:text-[#c6c6cd] text-base"
                  rightIcon={
                    showPassword ? (
                      <Eye className="cursor-pointer text-[#76777d] hover:text-[#6366F1] transition-colors absolute right-2" onClick={() => setShowPassword(false)} size={20} />
                    ) : (
                      <EyeOff className="cursor-pointer text-[#76777d] hover:text-[#6366F1] transition-colors absolute right-2" onClick={() => setShowPassword(true)} size={20} />
                    )
                  }
                />

                <SubmitButton 
                   data-testid="login-btn"
                   
                  isLoading={isLoading} 
                  loadingText="Signing In..." 
                  className="w-full h-12 mt-4 !bg-[#6366F1] text-white font-bold text-base rounded-xl hover:!bg-[#4f46e5] active:scale-[0.99] transition-all shadow-md shadow-[#6366F1]/20 cursor-pointer"
                >
                  Sign In
                </SubmitButton>
              </form>
            </Form>

            {/* Forgot Password Link */}
            <div className="mt-8 text-center">
              <a href="#" className="text-sm text-[#45464d] hover:text-[#6366F1] transition-colors">
                Forgot your password? <span className="font-semibold text-[#6366F1]">Contact your instructor</span>
              </a>
            </div>
          </div>

          {/* Role Indicators Footer */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#6366F1]/10 rounded-full border border-[#6366F1]/20">
              <div className="w-1.5 h-1.5 rounded-full bg-[#6366F1]"></div>
              <span className="text-xs font-bold text-[#6366F1] tracking-wide uppercase">Student</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0F172A]/10 rounded-full border border-[#0F172A]/20">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0F172A]"></div>
              <span className="text-xs font-bold text-[#0F172A] tracking-wide uppercase">Admin</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
