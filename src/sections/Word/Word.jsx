import FullScreen from "../../components/layout/FullScreen";
import Quote from "../../components/ui/Quote";

export default function Word({ children }) {
  return (
    <FullScreen>
      <Quote className="text-6xl md:text-8xl">
        {children}
      </Quote>
    </FullScreen>
  );
}