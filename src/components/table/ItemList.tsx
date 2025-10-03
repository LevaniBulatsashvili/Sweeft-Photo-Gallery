import { useRef } from "react";
import useScrollEnd from "../../hooks/useScrollEnd";
import Spinner from "../fallback/Spinner";

interface IItemList<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  onMaxScroll?: () => void;
  loading?: boolean;
}

const ItemList = <T,>({
  items,
  renderItem,
  onMaxScroll,
  loading,
}: IItemList<T>) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useScrollEnd(scrollRef, () => {
    if (onMaxScroll) onMaxScroll();
  });

  return (
    <div className="h-[78dvh] max-h-[78dvh] w-full">
      {!items.length ? (
        <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg shadow-md">
          <h1 className="text-xl font-semibold text-gray-600">
            No Items Available...
          </h1>
        </div>
      ) : (
        <div
          ref={scrollRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-amber-400 scrollbar-track-gray-100 px-2"
        >
          {items.map((item, idx) => (
            <div key={idx}>{renderItem(item)}</div>
          ))}
          {loading && (
            <div className="col-span-full flex justify-center items-center py-4">
              <Spinner />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ItemList;
