import { useEffect, type RefObject } from "react";

function useScrollEnd(
  ref: RefObject<HTMLElement | null>,
  onScrollEnd: () => void,
  threshold: number = 2
) {
  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      if (scrollTop + clientHeight >= scrollHeight - threshold) onScrollEnd();
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [ref, onScrollEnd, threshold]);
}

export default useScrollEnd;
