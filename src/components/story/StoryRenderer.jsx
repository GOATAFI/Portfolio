import StoryScene from "./StoryScene";
import Chapter from "./Chapter";
import StoryCard from "./StoryCard";
import Identity from "../../sections/Identity/Identity";
import IdentityQuote from "../../sections/IdentityQuote/IdentityQuote";
import NewsReveal from "./NewsReveal";
import BeforeFilm from "./BeforeFilm";
import FacebookMoment from "./FacebookMoment";
import Decision from "./Decision";

export default function StoryRenderer({ scene }) {
  switch (scene.type) {
    case "quote":
      return <StoryScene text={scene.text} />;

    case "chapter":
      return (
        <Chapter
          subtitle={scene.subtitle}
          title={scene.title}
        />
      );

    case "achievement":
      return (
        <StoryCard
          eyebrow={scene.eyebrow}
          title={scene.title}
          description={scene.description}
        />
      );

    case "identityQuote":
      return <IdentityQuote />;

    case "identity":
      return <Identity />;
    case "newsReveal":
  return <NewsReveal />;
  case "beforeFilm":
    return <BeforeFilm />;
    case "facebookMoment":
  return <FacebookMoment />;
  case "decision":
  return <Decision />;

    default:
      return null;
  }
}