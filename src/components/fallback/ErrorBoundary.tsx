import Error from "./Error";

type IErrorBoundary = {
  error: Error | null;
  children: React.ReactNode;
};

const ErrorBoundary = ({ error, children }: IErrorBoundary) => {
  if (error) return <Error message={error.message} />;

  return <>{children}</>;
};

export default ErrorBoundary;
