import { useAuthorization } from "../hooks/useAuthorization";
import { Button } from "./ui/button"
import { LogOut } from "lucide-react"

export const LogoutButton = () => {
  const { logout } = useAuthorization();

  const handleLogout = () => {
    logout();
  }

  return (
    <Button onClick={handleLogout}>
      <LogOut /> Logout
    </Button>
  );
};