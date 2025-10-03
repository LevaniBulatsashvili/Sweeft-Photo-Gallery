export const cacheSearchKeyword = (keyword: string) => {
  const searchString = localStorage.getItem("searchHistory");
  const searchHistory: string[] = searchString ? JSON.parse(searchString) : [];

  if (!searchHistory.includes(keyword)) {
    searchHistory.push(keyword);
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  }
};

export const getSearchHistory = (): string[] =>
  JSON.parse(localStorage.getItem("searchHistory") || "[]");
