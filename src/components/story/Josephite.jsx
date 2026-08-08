import FullScreen from "../layout/FullScreen";

import trophy from "../../assets/josephite/trophy.jpg";
import team from "../../assets/josephite/team.jpg";

export default function Josephite() {
  return (
    <>
      <FullScreen className="bg-black">
        <div className="text-center">
          <p className="uppercase tracking-[0.4em] text-zinc-600">
            I thought...
          </p>

          <h1 className="mt-8 text-6xl md:text-8xl font-light leading-tight">
            that was just
            <br />
            the beginning.
          </h1>
        </div>
      </FullScreen>

      <FullScreen className="bg-black py-20">
        <div className="mx-auto w-[78%] max-w-4xl h-[70vh] flex items-center justify-center">
          <img
            src={trophy}
            alt=""
            className="max-w-full max-h-full rounded-3xl shadow-2xl object-contain"
          />
        </div>
      </FullScreen>

      <FullScreen className="bg-black py-20">
        <div className="mx-auto w-[78%] max-w-4xl h-[70vh] flex items-center justify-center">
          <img
            src={team}
            alt=""
            className="max-w-full max-h-full rounded-3xl shadow-2xl object-contain"
          />
        </div>
      </FullScreen>

      <FullScreen className="bg-black">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-light leading-tight">
            Another Best
            <br />
            Film Award.
          </h1>
        </div>
      </FullScreen>
    </>
  );
}