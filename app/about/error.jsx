"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      this aint loading up: {error.message}
      <button onclick={() => reset()}>Reload</button>
    </div>
  );
}
