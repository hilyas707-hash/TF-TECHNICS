import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const MAINTENANCE = false; // ← change en true pour activer, false pour désactiver

export function middleware(request: NextRequest) {
  if (!MAINTENANCE) return NextResponse.next();

  const { pathname } = request.nextUrl;

  // Laisse passer la page maintenance elle-même
  if (pathname.startsWith("/maintenance")) return NextResponse.next();

  // Redirige tout le reste vers /maintenance
  return NextResponse.rewrite(new URL("/maintenance", request.url));
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};
