import { useEffect, useState } from "react";

export default function useTimeline(
  isActive,
  durations = []
) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    let cancelled = false;
    let timeout;

    function run(index) {
      if (cancelled) return;

      if (index >= durations.length) return;

      timeout = setTimeout(() => {
        if (cancelled) return;

        setStep(index + 1);

        run(index + 1);
      }, durations[index]);
    }

    run(0);

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, [isActive]);

  return step;
}