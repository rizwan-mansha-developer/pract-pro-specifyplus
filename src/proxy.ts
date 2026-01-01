import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Proxy to enforce RBAC based on cookie-session JWT.
 * Simplified for foundation; logic to be expanded in T011.
 */
export function proxy(request: NextRequest) {
  const session = request.cookies.get("session")?.value;

  if (!session && request.nextUrl.pathname.startsWith("/(dashboard)")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
