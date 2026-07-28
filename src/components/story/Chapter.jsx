import FullScreen from "../layout/FullScreen";
import ChapterTitle from "../ui/ChapterTitle";
import Quote from "../ui/Quote";

export default function Chapter({ title, subtitle }) {
  return (
    <FullScreen className="flex-col gap-10">
      <ChapterTitle>{subtitle}</ChapterTitle>

      <Quote>{title}</Quote>
    </FullScreen>
  );
}