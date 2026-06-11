import { redirect } from "react-router-dom";

// In real apps use httpOnly cookies/JWT. For demo, localStorage.
export async function requireAuth(request) {
  const url = new URL(request.url);
  const token = window.localStorage.getItem("token");
  if (!token) {
    const params = new URLSearchParams({ redirectTo: url.pathname + url.search });
    throw redirect(`/login?${params.toString()}`);
  }
  return null;
}