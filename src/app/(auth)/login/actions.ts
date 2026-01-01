"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { logAudit } from "@/lib/audit-logger";

/**
 * Server Action for login.
 * In a real scenario, this would validate credentials against a backend.
 */
export async function loginAction(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  // Mock successful login
  if (email && password) {
    await logAudit("LOGIN_ATTEMPT", { email });
    cookies().set("session", "mock-session-id", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });
    redirect("/dashboard");
  }
}
