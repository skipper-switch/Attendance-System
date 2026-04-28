// src/middleware.ts
// In Next.js, Middleware lets you run code before a request is completed — between the request and the response — on the Edge Runtime (very fast, runs close to the user).
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // If user visits the root ("/"), redirect to "/sign-in"
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // Otherwise, allow everything else
  return NextResponse.next();
}