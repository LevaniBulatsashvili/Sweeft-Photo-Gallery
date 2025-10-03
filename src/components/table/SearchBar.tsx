import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";

interface ISearchBar {
  searchVal?: string;
  onSearch: (query: string) => void;
  disabled: boolean;
  delay?: number;
}

export default function SearchBar({
  searchVal,
  onSearch,
  disabled,
  delay = 700,
}: ISearchBar) {
  const [inputValue, setInputValue] = useState(searchVal || "");
  const debouncedValue = useDebounce(inputValue, delay);

  useEffect(() => {
    onSearch(debouncedValue.trim());
  }, [debouncedValue, onSearch]);

  return (
    <div className="flex w-full mb-2">
      <input
        className={`font-[400] text-lg bg-neutral-50 border border-neutral-400 w-full py-1 px-6 focus:bg-white focus:outline-none ${
          disabled ? "opacity-50 cursor-not-allowed bg-gray-100" : ""
        }`}
        placeholder="Search"
        value={inputValue}
        disabled={disabled}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}
