import { Form, useActionData, redirect } from "react-router-dom";

export async function action({ request }) {
  const formData = await request.formData();
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();

  const errors = {};
  if (!name) errors.name = "Name is required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Provide a valid email";
  if (message.length < 10) errors.message = "Message must be ≥ 10 chars";

  if (Object.keys(errors).length) {
    return errors; // useActionData() receives this
  }

  // pretend to “send” and then redirect with a flash message query param
  return redirect("/contact?submitted=1");
}

export default function Contact() {
  const errors = useActionData();

  return (
    <div>
      <h2>Contact</h2>
      <Form method="post" replace>
        <div>
          <label>Name<br />
            <input name="name" placeholder="Your name" />
          </label>
          {errors?.name && <p style={{color:"crimson"}}>{errors.name}</p>}
        </div>
        <div>
          <label>Email<br />
            <input name="email" type="email" placeholder="you@work.com" />
          </label>
          {errors?.email && <p style={{color:"crimson"}}>{errors.email}</p>}
        </div>
        <div>
          <label>Message<br />
            <textarea name="message" rows="4" placeholder="How can we help?" />
          </label>
          {errors?.message && <p style={{color:"crimson"}}>{errors.message}</p>}
        </div>
        <button type="submit">Send</button>
      </Form>
    </div>
  );
}