import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const err = useRouteError();
  if (isRouteErrorResponse(err)) {
    return (
      <div>
        <h3>Oops! {err.status} — {err.statusText}</h3>
        {err.data && <pre>{err.data.message || String(err.data)}</pre>}
      </div>
    );
  }
  return (
    <div>
      <h3>Something went wrong.</h3>
      <pre style={{ whiteSpace: "pre-wrap" }}>{String(err)}</pre>
    </div>
  );
}