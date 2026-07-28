import StoryRenderer from "../components/story/StoryRenderer";
import { story } from "../data/story";

export default function Home() {
  return (
    <>
      {story.map((scene) => (
        <StoryRenderer
          key={scene.id}
          scene={scene}
        />
      ))}
    </>
  );
}