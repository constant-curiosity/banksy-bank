export default function LoginMessage({ className, children }) {
  return (
    <div className={className}>
      <p>{children}</p>
      <ul className={className}>
        <li>User Name: guest@example.com</li>
        <li>Password: guest123</li>
      </ul>
    </div>
  );
}
