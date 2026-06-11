import { Form, redirect, useSearchParams } from "react-router-dom";

export async function action({ request }) {
  const formData = await request.formData();
  const email = String(formData.get("email") || "");
  const password = String(formData.get("password") || "");

  if (!email || !password) {
    return { error: "Email and password required" };
  }
  // Fake login success
  window.localStorage.setItem("token", "demo-token");
  const redirectTo = new URL(request.url).searchParams.get("redirectTo") || "/dashboard";
  return redirect(redirectTo);
}

export default function Login() {
  const [sp] = useSearchParams();
  const msg = sp.get("redirectTo") ? "Please sign in to continue" : "Sign in";

  return (
    <div>
      <h2>{msg}</h2>
      <Form method="post" replace>
        <div>
          <label>Email<br/><input type="email" name="email" /></label>
        </div>
        <div>
          <label>Password<br/><input type="password" name="password" /></label>
        </div>
        <button type="submit">Login</button>
      </Form>
    </div>
  );
}