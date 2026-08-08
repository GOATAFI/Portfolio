import FullScreen from "../layout/FullScreen";

import tech1 from "../../assets/technoxian/1.jpg";
import tech2 from "../../assets/technoxian/2.jpg";
import tech3 from "../../assets/technoxian/3.jpg";
import tech4 from "../../assets/technoxian/4.jpg";
import tech5 from "../../assets/technoxian/5.jpg";

const images = [
  tech1,
  tech2,
  tech3,
  tech4,
  tech5,
];

export default function TechnoxianGallery() {
  return (
    <>
      {images.map((image, index) => (
        <FullScreen
          key={index}
          className="bg-black py-20"
        >
          <div className="mx-auto w-[78%] max-w-4xl h-[70vh] flex items-center justify-center">
  <img
    src={image}
    alt=""
    className="max-w-full max-h-full rounded-3xl shadow-2xl object-contain"
  />
</div>
        </FullScreen>
      ))}
    </>
  );
}