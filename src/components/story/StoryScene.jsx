import FullScreen from "../layout/FullScreen";
import Quote from "../ui/Quote";

export default function StoryScene({ text }) {
  return (
    <FullScreen>
      <Quote>{text}</Quote>
    </FullScreen>
  );
}