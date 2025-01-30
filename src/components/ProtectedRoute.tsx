import { Navigate } from "react-router-dom";

export interface ProtectedRouteProps {
  children: React.ReactNode;
  isAuthenticated: boolean | null;
  isLoading?: boolean;
}

export const ProtectedRoute = ({
  children,
  isAuthenticated,
  isLoading = false
}: ProtectedRouteProps) => {
  console.log({
    isAuthenticated,
    isLoading
  })

  // Show loading state only during initial load
  if (isLoading && isAuthenticated === null) {
    return <div className="flex items-center justify-center h-full">Loading...</div>;
  }

  // Only redirect if we're certain the user is not authenticated
  if (isAuthenticated === false) {
    return <Navigate to="/" replace />;
  }

  // If we're authenticated or still checking (but not in initial load), show children
  return (
    <>
      {children}
    </>
  );
};