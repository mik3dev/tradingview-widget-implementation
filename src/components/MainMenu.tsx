import { Link, useLocation } from "react-router-dom";
import { useAuthorization } from "../hooks/useAuthorization";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "./ui/menubar"

export const MainMenu = () => {
  const { isAuthenticated, login, logout } = useAuthorization();
  const location = useLocation();

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
          <MenubarItem 
            className="cursor-pointer" 
            disabled={location.pathname === '/'} 
            asChild
          >
            <Link to="/">SingleChart</Link>
          </MenubarItem>
          <MenubarItem 
            disabled={!isAuthenticated || location.pathname === '/multi-charts'} 
            className="cursor-pointer" 
            asChild
          >
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
