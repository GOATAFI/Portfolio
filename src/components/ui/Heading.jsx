export default function Heading({
  children,
  center = true,
  className = "",
}) {
  return (
    <h1
      className={`
        text-4xl
        md:text-6xl
        lg:text-7xl
        font-light
        leading-tight
        tracking-tight
        ${center ? "text-center" : ""}
        ${className}
      `}
    >
      {children}
    </h1>
  );
}