import { defaultSkips } from "../../data/skips";
import { SkipsListSkeleton } from "../SkipsListSkeleton";
import { SkipCard } from "./SkipCard";
import { AnimatedWrapper } from "../../../../components/AnimatedWrapper";
import { useSkips } from "../../../../hooks/use-fetch-skips";
import type { Skip } from "../../../../types/skip";

export const SkipsList = () => {
  const { data: skips, isLoading } = useSkips();
  const skipsList = !isLoading && skips ? skips : defaultSkips;

  if (isLoading) return <SkipsListSkeleton />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-4 gap-8 mb-12 px-12">
      {skipsList?.map((skip: Skip, index: number) => (
        <AnimatedWrapper
          key={skip.id}
          delay={index * 0.1}
          y={20}
          onceInView={true}
        >
          <SkipCard skip={skip} />
        </AnimatedWrapper>
      ))}
    </div>
  );
};
