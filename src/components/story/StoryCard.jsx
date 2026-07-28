import FullScreen from "../layout/FullScreen";
import FadeText from "../ui/FadeText";

export default function StoryCard({
  eyebrow,
  title,
  description,
}) {
  return (
    <FullScreen className="items-start">
      <div className="max-w-3xl">

        <FadeText>
          <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm">
            {eyebrow}
          </p>
        </FadeText>

        <FadeText delay={0.2}>
          <h2 className="text-5xl font-light mt-4 leading-tight">
            {title}
          </h2>
        </FadeText>

        <FadeText delay={0.4}>
          <p className="text-zinc-400 text-xl mt-8 leading-relaxed">
            {description}
          </p>
        </FadeText>

      </div>
    </FullScreen>
  );
}