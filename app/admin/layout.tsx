import type { ReactNode } from "react";
import { AdminShell } from "@/components/admin/admin-shell";

// Server Component by default — the shell itself (sidebar/header) needs
// client-side interactivity (mobile drawer, active-link highlighting),
// so that part is isolated in <AdminShell>, a client component.
//
// TODO(auth): once Supabase auth is wired in, check the session here
// (e.g. `const { data: { user } } = await supabase.auth.getUser()`) and
// redirect to a login route with `redirect("/login")` from
// "next/navigation" before rendering children. No login is required yet.
export default function AdminLayout({ children }: { children: ReactNode }) {
  return <AdminShell>{children}</AdminShell>;
}
