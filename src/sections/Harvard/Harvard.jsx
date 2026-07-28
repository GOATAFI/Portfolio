import FullScreen from "../../components/layout/FullScreen";
import Quote from "../../components/ui/Quote";

export default function Harvard() {
  return (
    <FullScreen>
      <Quote>
        Harvard Business School
        <br />
        studied only{" "}
        <span className="text-red-500 font-medium">ONE</span>
        <br />
        footballer.
      </Quote>
    </FullScreen>
  );
}