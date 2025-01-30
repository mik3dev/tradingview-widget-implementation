import { useAuthorization } from "../hooks/useAuthorization";
import { LoginButton } from "./LoginButton"
import { LogoutButton } from "./LogoutButton";

const paths = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "MultiChart",
    href: "/multi-chart"
  }
]

export const Navbar = () => {

  const { isAuthenticated } = useAuthorization();


  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {paths.map((path) => (
                  <a key={path.label} href={path.href} className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">{path.label}</a>
                ))}
              </div>
            </div>
          </div>

          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {paths.map((path) => (
            <a key={path.label} href={path.href} className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" aria-current="page">{path.label}</a>
          ))}
        </div>
      </div>
    </nav>

  )
}
