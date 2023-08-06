export default function SignupMessage({ className, children }) {
  return (
    <div className={className}>
      <div>
        <p>{children}</p>
      </div>
    </div>
  );
}
