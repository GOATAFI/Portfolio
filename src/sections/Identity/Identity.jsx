import FullScreen from "../../components/layout/FullScreen";
import FadeText from "../../components/ui/FadeText";

export default function Identity() {
  return (
    <FullScreen className="flex-col">
      <FadeText>
        <div className="w-24 h-px bg-white mb-10"></div>
      </FadeText>

      <FadeText delay={0.2}>
        <h1 className="text-5xl md:text-7xl font-light tracking-tight">
          Nahid Parvez Mafi 
        </h1>
      </FadeText>

      <FadeText delay={0.5}>
        <p className="text-zinc-400 text-xl md:text-2xl mt-6">
          Storyteller.
        </p>
      </FadeText>
    </FullScreen>
  );
}