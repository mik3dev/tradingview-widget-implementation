import { Button } from "./ui/button"
import { LogIn } from "lucide-react"
import { useAuthorization } from "../hooks/useAuthorization";

export const LoginButton = () => {
  const { login } = useAuthorization();

  const handleLogin = () => {
    login();
  }

  return (
    <Button onClick={handleLogin}>
      <LogIn /> Login
    </Button>
  )
}
