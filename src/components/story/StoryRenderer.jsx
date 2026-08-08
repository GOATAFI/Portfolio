import StoryScene from "./StoryScene";
import Chapter from "./Chapter";
import StoryCard from "./StoryCard";
import Identity from "../../sections/Identity/Identity";
import IdentityQuote from "../../sections/IdentityQuote/IdentityQuote";
import NewsReveal from "./NewsReveal";
import BeforeFilm from "./BeforeFilm";
import FacebookMoment from "./FacebookMoment";
import Decision from "./Decision";
import ChatMoment from "./ChatMoment";
import Selected from "./Selected";
import CompetitionMontage from "./CompetitionMontage";
import HarvardFindings from "./HarvardFindings";
import Josephite from "./Josephite";
import LifeHappened from "./LifeHappened";
import TechnoxianGallery from "./TechnoxianGallery";

// import tech1 from "../../assets/technoxian/1.jpg";
// import tech2 from "../../assets/technoxian/2.jpg";
// import tech3 from "../../assets/technoxian/3.jpg";
// import tech4 from "../../assets/technoxian/4.jpg";
// import tech5 from "../../assets/technoxian/5.jpg";

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
  case "chatMoment":
    return <ChatMoment />;
    case "selected":
  return <Selected />;
  case "competitionMontage":
  return <CompetitionMontage />;
  case "harvardFindings":
  return <HarvardFindings />;
case "josephite":
  return <Josephite />;
case "lifeHappened":
  return <LifeHappened />;
case "technoxianGallery":
  return <TechnoxianGallery />;
    default:
      return null;
  }
}