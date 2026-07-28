import FadeText from "./FadeText";

export default function ChapterTitle({ children }) {
  return (
    <FadeText>
      <h2 className="text-sm uppercase tracking-[0.4em] text-zinc-500">
        {children}
      </h2>
    </FadeText>
  );
}