export default function FullScreen({ children, className = "" }) {
  return (
    <section
      className={`min-h-screen w-full flex items-center justify-center bg-black px-6 ${className}`}
    >
      {children}
    </section>
  );
}