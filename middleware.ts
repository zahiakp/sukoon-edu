import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decodeId } from "./components/common/decode";

export function middleware(request: NextRequest) {
  try {
    const token = decodeId(request.cookies.get("token")?.value || "");
    const isAuthenticated = token && isValidToken(token); 
    const isLoginPage = request.nextUrl.pathname === "/login";
    const isAdminPage = request.nextUrl.pathname.startsWith("/admin");

    if (isLoginPage && isAuthenticated) {
      console.log("User is already logged in. Redirecting to admin.");
      return redirectToAdmin(request);
    }

    if (isAdminPage && !isAuthenticated) {
      console.log("User is not authenticated. Redirecting to login.");
      return redirectToLogin(request);
    }

    if (isAuthenticated) {
      console.log("Token is valid. Proceeding to next.");
      return NextResponse.next();
    }

    if (!isAdminPage) {
      console.log("Public route accessed. Proceeding normally.");
      return NextResponse.next();
    }

    console.log("Redirecting to login as a fallback.");
    return redirectToLogin(request);
  } catch (error) {
    console.error("An error occurred in middleware:", error);
    return redirectToLogin(request);
  }
}

function isValidToken(token: string): boolean {
  return token === "sahashaikh";
}

function redirectToLogin(request: NextRequest) {
  return NextResponse.redirect(new URL("/login", request.url));
}

function redirectToAdmin(request: NextRequest) {
  return NextResponse.redirect(new URL("/admin", request.url));
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
};
