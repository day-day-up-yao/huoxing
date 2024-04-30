'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => window.location.reload()} type="button">
          Refresh
        </button>
        <pre>{error.message}</pre>
        <pre>{error.stack}</pre>
      </body>
    </html>
  );
}
