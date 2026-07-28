import FadeText from "./FadeText";
import Heading from "./Heading";

export default function Quote({
  children,
  delay = 0,
  className = "",
}) {
  return (
    <FadeText delay={delay}>
      <Heading className={className}>{children}</Heading>
    </FadeText>
  );
}