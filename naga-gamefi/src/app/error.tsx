'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => window.location.reload()} type="button">
        Refresh
      </button>
      <pre>{error.message}</pre>
      <pre>{error.stack}</pre>
    </div>
  );
}
