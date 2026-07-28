import FullScreen from "../layout/FullScreen";
import FadeText from "../ui/FadeText";

export default function StoryCard({
  eyebrow,
  title,
  description,
}) {
  return (
    <FullScreen className="px-8 md:px-20">
      <div className="w-full max-w-7xl mx-auto">

        <FadeText>
          <p className="text-center uppercase tracking-[0.6em] text-zinc-500 text-sm">
            {eyebrow}
          </p>
        </FadeText>

        <FadeText delay={0.2}>
          <h2 className="text-center text-5xl md:text-8xl font-extralight mt-6 leading-none">
            {title}
          </h2>
        </FadeText>

        <FadeText delay={0.4}>
          <div className="mt-16 aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 flex items-center justify-center">

            <span className="text-zinc-500 text-xl">
              Award Image
            </span>

          </div>
        </FadeText>

        <FadeText delay={0.6}>
          <p className="max-w-3xl mx-auto text-center text-zinc-400 text-xl leading-9 mt-14">
            {description}
          </p>
        </FadeText>

      </div>
    </FullScreen>
  );
}