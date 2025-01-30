import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthorization } from "../hooks/useAuthorization";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "./ui/menubar"
import { MultiChartSettings } from "./MultiChartSettings";
import { DialogTrigger } from "@radix-ui/react-dialog";

export const MainMenu = () => {
  const { isAuthenticated, login, logout } = useAuthorization();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    login();
  }

  const handleLogout = () => {
    logout();
  }

  const clear = () => {
    if (location.pathname === '/') {
      navigate("/");
    } else if (location.pathname === '/multi-charts') {
      navigate("/multi-charts")
    }
  }

  return (
    <MultiChartSettings>
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
        <MenubarMenu>
          <MenubarTrigger>More</MenubarTrigger>
          <MenubarContent>
            <MenubarItem className="cursor-pointer">
              <DialogTrigger>Settings</DialogTrigger>
            </MenubarItem>
            <MenubarItem className="cursor-pointer" onClick={clear}>
              Clear
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </MultiChartSettings>
  )
}
