import FullScreen from "../../components/layout/FullScreen";
import Quote from "../../components/ui/Quote";

export default function Question({ children }) {
  return (
    <FullScreen>
      <Quote>{children}</Quote>
    </FullScreen>
  );
}