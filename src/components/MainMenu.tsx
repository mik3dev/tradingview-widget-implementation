import { Link } from "react-router-dom";
import { useAuthorization } from "../hooks/useAuthorization";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "./ui/menubar"

export const MainMenu = () => {
  const { isAuthenticated, login, logout } = useAuthorization();

  const handleLogin = () => {
    login();
  }

  const handleLogout = () => {
    logout();
  }

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Navigation</MenubarTrigger>
        <MenubarContent>
          <MenubarItem className="cursor-pointer" asChild>
            <Link to="/">Home</Link>
          </MenubarItem>
          <MenubarItem disabled={!isAuthenticated} className="cursor-pointer" asChild>
            <Link to="/multi-charts">MultiCharts</Link>
          </MenubarItem>
          <MenubarSeparator />
          {!isAuthenticated ? (
            <MenubarItem className="cursor-pointer" onClick={handleLogin}>
              Login
            </MenubarItem>
          ) : (
            <MenubarItem className="cursor-pointer" onClick={handleLogout}>
              Logout
            </MenubarItem>
          )}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
