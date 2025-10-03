import type { ReactNode } from "react";
import Spinner from "./Spinner";

type ILoading = {
  isLoading: boolean;
  children: ReactNode;
  fallback?: ReactNode;
};

const Loading = ({ isLoading, children, fallback }: ILoading) => {
  if (isLoading) return fallback ?? <Spinner />;

  return <>{children}</>;
};

export default Loading;
