import FullScreen from "../../components/layout/FullScreen";
import Quote from "../../components/ui/Quote";

export default function Opening() {
  return (
    <FullScreen>
      <Quote className="text-3xl md:text-5xl">
        Did you know...
      </Quote>
    </FullScreen>
  );
}