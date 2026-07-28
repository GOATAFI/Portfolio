import FullScreen from "../../components/layout/FullScreen";
import Quote from "../../components/ui/Quote";

export default function Trait({ number, children }) {
  return (
    <FullScreen>
      <Quote className="max-w-4xl">
        <span className="text-red-500">{number}.</span>
        <br />
        {children}
      </Quote>
    </FullScreen>
  );
}