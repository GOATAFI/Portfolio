import { useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import FullScreen from "../layout/FullScreen";
import useTimeline from "../../hooks/useTimeline";

import trophy from "../../assets/josephite/trophy.jpg";
import team from "../../assets/josephite/team.jpg";

function Photo({ src }) {
  return (
    <motion.img
      src={src}
      alt=""
      initial={{
        opacity: 0,
        scale: 1.08,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 1.04,
      }}
      transition={{
        duration: .6,
      }}
      className="absolute inset-0 w-full h-full object-contain bg-black"
    />
  );
}

export default function Josephite() {

  const ref = useRef(null);

  const isInView = useInView(ref,{
    once:true,
    amount:.95,
  });

  const step = useTimeline(isInView,[
    1800,
    1800,
    2200,
    2200,
  ]);

  function renderScene(){

    if(step===0){
      return (
        <motion.div
          key="beginning"
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
          className="absolute inset-0 flex items-center justify-center"
        >
          <h1 className="text-6xl md:text-8xl font-light text-center">
            I thought...
            <br/>
            that was just
            <br/>
            the beginning.
          </h1>
        </motion.div>
      );
    }

    if(step===1){
      return <Photo key="trophy" src={trophy}/>;
    }

    if(step===2){
      return <Photo key="team" src={team}/>;
    }

    return(
      <motion.div
        key="award"
        initial={{opacity:0}}
        animate={{opacity:1}}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="text-center">

          <motion.p
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:.2}}
            className="uppercase tracking-[0.4em] text-zinc-600"
          >
            Another competition.
          </motion.p>

          <motion.h1
            initial={{
              opacity:0,
              y:30,
            }}
            animate={{
              opacity:1,
              y:0,
            }}
            transition={{
              delay:.6,
              duration:.8,
            }}
            className="mt-10 text-6xl md:text-8xl font-light"
          >
            
            Another Best Film Award.
          </motion.h1>


        </div>

      </motion.div>
    );

  }

  return(

    <FullScreen className="bg-black overflow-hidden">

      <div
        ref={ref}
        className="w-[88%] md:w-[82%] max-w-5xl mx-auto"
      >

        <div className="relative aspect-video overflow-hidden rounded-3xl">

          <AnimatePresence mode="wait">
            {renderScene()}
          </AnimatePresence>

        </div>

      </div>

    </FullScreen>

  );

}