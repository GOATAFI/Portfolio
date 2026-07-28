import Opening from "../sections/Opening/Opening";
import Harvard from "../sections/Harvard/Harvard";
import Muller from "../sections/Muller/Muller";
import Question from "../sections/Questions/Question";
import Answer from "../sections/Answer/Answer";
import ThenWhy from "../sections/ThenWhy/ThenWhy";
import Different from "../sections/Different/Different";
import Talent from "../sections/Talent/Talent";
import SomethingElse from "../sections/SomethingElse/SomethingElse";
import Research from "../sections/Research/Research";
import Trait from "../sections/Trait/Trait";
import Reflection from "../sections/Reflection/Reflection";
import Word from "../sections/Word/Word";
import Journey from "../sections/Journey/Journey";
import Identity from "../sections/Identity/Identity";
import ChapterOne from "../sections/ChapterOne/ChapterOne";
import BestFilmAward from "../sections/BestFilmAward/BestFilmAward";
export default function Home() {
  return (
    <>
      <Opening />

      <Harvard />

      <Muller />

      <Question>Was he the fastest?</Question>

      <Question>Was he the strongest?</Question>

      <Question>Was he the most skillful?</Question>

      <Answer />

<ThenWhy />

<Different />

<Talent />

<SomethingElse />
<Research />

<Trait number="1">
  Unorthodox
  <br />
  skill set.
</Trait>

<Trait number="2">
  Resilient
  <br />
  mindset.
</Trait>

<Trait number="3">
  Personality
  <br />
  & humor.
</Trait>
<Reflection />

<Word>Unorthodox.</Word>

<Word>Resilient.</Word>

<Word>Personality.</Word>

<Journey />
<Identity />
<ChapterOne />
<BestFilmAward />

    </>
    
  );
}