<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Login — Academy Attendance System</title>
<!-- Fonts -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&amp;family=Plus+Jakarta+Sans:wght@600;700;800&amp;family=DM+Sans:wght@400;500&amp;display=swap" rel="stylesheet"/>
<!-- Icons -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "tertiary": "#000000",
                        "surface-container": "#eceef0",
                        "on-error-container": "#93000a",
                        "on-secondary": "#ffffff",
                        "error-container": "#ffdad6",
                        "surface-dim": "#d8dadc",
                        "tertiary-fixed-dim": "#dec29a",
                        "outline-variant": "#c6c6cd",
                        "on-background": "#191c1e",
                        "on-secondary-fixed-variant": "#2f2ebe",
                        "surface-variant": "#e0e3e5",
                        "secondary-container": "#6063ee",
                        "on-tertiary": "#ffffff",
                        "surface-container-lowest": "#ffffff",
                        "surface": "#f7f9fb",
                        "primary-container": "#131b2e",
                        "on-primary-fixed-variant": "#3f465c",
                        "on-primary-container": "#7c839b",
                        "inverse-surface": "#2d3133",
                        "on-secondary-container": "#fffbff",
                        "surface-container-low": "#f2f4f6",
                        "on-tertiary-fixed": "#271901",
                        "tertiary-container": "#271901",
                        "inverse-on-surface": "#eff1f3",
                        "primary-fixed-dim": "#bec6e0",
                        "on-tertiary-container": "#98805d",
                        "tertiary-fixed": "#fcdeb5",
                        "on-error": "#ffffff",
                        "surface-container-high": "#e6e8ea",
                        "on-surface": "#191c1e",
                        "secondary-fixed-dim": "#c0c1ff",
                        "on-primary": "#ffffff",
                        "primary": "#000000",
                        "surface-tint": "#565e74",
                        "error": "#ba1a1a",
                        "primary-fixed": "#dae2fd",
                        "surface-container-highest": "#e0e3e5",
                        "on-surface-variant": "#45464d",
                        "background": "#f7f9fb",
                        "secondary-fixed": "#e1e0ff",
                        "surface-bright": "#f7f9fb",
                        "on-primary-fixed": "#131b2e",
                        "secondary": "#4648d4",
                        "on-secondary-fixed": "#07006c",
                        "on-tertiary-fixed-variant": "#574425",
                        "inverse-primary": "#bec6e0",
                        "outline": "#76777d",
                        "navy-brand": "#0F172A",
                        "indigo-brand": "#6366F1"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "2xl": "1rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "lg": "24px",
                        "md": "16px",
                        "sm": "8px",
                        "xs": "4px",
                        "xl": "48px"
                    },
                    "fontFamily": {
                        "body-sm": ["DM Sans", "Manrope"],
                        "label-caps": ["Manrope"],
                        "body-md": ["DM Sans", "Manrope"],
                        "h3": ["Plus Jakarta Sans"],
                        "h1": ["Plus Jakarta Sans"],
                        "h2": ["Plus Jakarta Sans"],
                        "body-lg": ["DM Sans", "Manrope"]
                    },
                    "fontSize": {
                        "body-sm": ["14px", {"lineHeight": "1.5", "fontWeight": "400"}],
                        "label-caps": ["12px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "700"}],
                        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                        "h3": ["20px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                        "h1": ["36px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "h2": ["28px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}]
                    }
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body {
            font-family: 'DM Sans', sans-serif;
        }
        .bg-navy-panel {
            background-color: #0F172A;
        }
    </style>
</head>
<body class="bg-white antialiased overflow-hidden">
<!-- Split Screen Container -->
<main class="flex h-screen w-full">
<!-- Left Panel: Brand & Features -->
<section class="hidden lg:flex flex-col justify-between w-1/2 bg-navy-panel p-xl text-white relative overflow-hidden">
<!-- Decorative Grain/Gradient Overlay -->
<div class="absolute inset-0 opacity-20 pointer-events-none" data-alt="subtle micro-dot pattern texture with navy blue background overlay" style="background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0); background-size: 24px 24px;"></div>
<!-- Top: Brand Identity -->
<div class="relative z-10">
<span class="font-h3 text-body-sm uppercase tracking-[0.2em] font-extrabold text-white/90">ACADEMY</span>
</div>
<!-- Middle: Marketing Content -->
<div class="relative z-10 max-w-lg">
<h1 class="font-h1 text-[48px] leading-tight mb-xl font-extrabold">
                    Track attendance.<br/>Stay accountable.
                </h1>
<div class="space-y-lg">
<div class="flex items-center gap-md">
<div class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center border border-white/5">
<span class="material-symbols-outlined text-indigo-brand">check_circle</span>
</div>
<p class="font-body-md text-white/80">Check in with one tap</p>
</div>
<div class="flex items-center gap-md">
<div class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center border border-white/5">
<span class="material-symbols-outlined text-indigo-brand">bar_chart</span>
</div>
<p class="font-body-md text-white/80">See your monthly progress</p>
</div>
<div class="flex items-center gap-md">
<div class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center border border-white/5">
<span class="material-symbols-outlined text-indigo-brand">admin_panel_settings</span>
</div>
<p class="font-body-md text-white/80">Role-based access</p>
</div>
</div>
</div>
<!-- Bottom: Muted Footer Text -->
<div class="relative z-10">
<p class="font-body-sm text-indigo-brand/60 font-medium tracking-wide">
                    Frontend Engineering · Cohort 3
                </p>
</div>
</section>
<!-- Right Panel: Login Form -->
<section class="w-full lg:w-1/2 flex items-center justify-center bg-surface p-md">
<div class="w-full max-w-[440px]">
<!-- Sign In Card -->
<div class="bg-white rounded-2xl border border-outline-variant/30 p-xl shadow-[0px_4px_6px_-1px_rgba(15,23,42,0.05)]">
<!-- Form Header -->
<div class="flex flex-col items-center mb-xl">
<div class="w-12 h-12 bg-indigo-brand rounded-xl flex items-center justify-center mb-md shadow-lg shadow-indigo-brand/20">
<span class="material-symbols-outlined text-white" style="font-variation-settings: 'FILL' 1;">school</span>
</div>
<h2 class="font-h2 text-on-background text-center">Welcome back</h2>
<p class="font-body-sm text-on-surface-variant text-center mt-xs">Sign in to your academy account</p>
</div>
<!-- Form -->
<form class="space-y-lg">
<!-- Email Input -->
<div class="space-y-sm">
<label class="font-body-sm font-semibold text-on-background block ml-1" for="email">Email address</label>
<input class="w-full px-4 py-3 bg-surface-container-low border-0 rounded-lg focus:ring-2 focus:ring-indigo-brand focus:bg-white transition-all outline-none text-on-background placeholder:text-outline-variant font-body-md" id="email" placeholder="name@example.com" type="email"/>
</div>
<!-- Password Input -->
<div class="space-y-sm">
<label class="font-body-sm font-semibold text-on-background block ml-1" for="password">Password</label>
<div class="relative">
<input class="w-full px-4 py-3 bg-surface-container-low border-0 rounded-lg focus:ring-2 focus:ring-indigo-brand focus:bg-white transition-all outline-none text-on-background placeholder:text-outline-variant font-body-md" id="password" placeholder="••••••••" type="password"/>
<button class="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-indigo-brand transition-colors" type="button">
<span class="material-symbols-outlined">visibility</span>
</button>
</div>
</div>
<!-- Sign In Button -->
<button class="w-full py-4 bg-indigo-brand text-white font-bold text-body-md rounded-xl hover:bg-[#4f46e5] active:scale-[0.99] transition-all shadow-md shadow-indigo-brand/20 mt-sm" type="submit">
                            Sign In
                        </button>
</form>
<!-- Forgot Password Link -->
<div class="mt-xl text-center">
<a class="font-body-sm text-on-surface-variant hover:text-indigo-brand transition-colors" href="#">
                            Forgot your password? <span class="font-semibold text-indigo-brand">Contact your instructor</span>
</a>
</div>
</div>
<!-- Role Indicators Footer -->
<div class="mt-xl flex items-center justify-center gap-md">
<div class="flex items-center gap-2 px-3 py-1.5 bg-indigo-brand/10 rounded-full border border-indigo-brand/20">
<div class="w-1.5 h-1.5 rounded-full bg-indigo-brand"></div>
<span class="text-[12px] font-bold text-indigo-brand tracking-wide uppercase">Student</span>
</div>
<div class="flex items-center gap-2 px-3 py-1.5 bg-navy-brand/10 rounded-full border border-navy-brand/20">
<div class="w-1.5 h-1.5 rounded-full bg-navy-brand"></div>
<span class="text-[12px] font-bold text-navy-brand tracking-wide uppercase">Admin</span>
</div>
</div>
</div>
</section>
</main>
<!-- Content Hidden Section for Shared Component Context (Manual suppression as per rules) -->
<!-- TopAppBar and SideNavBar suppressed because Login is a linear/transactional screen -->
</body></html>