export default function LoadingSpinner({ children }) {
  return (
    <div
      className="h-20 w-20 animate-spin rounded-full border-4 border-solid border-white border-r-transparent"
      role="status"
    >
      <span className="sr-only">{children}</span>
    </div>
  );
}
