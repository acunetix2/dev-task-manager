import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserCircleIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };



  const navLinkClass = ({ isActive }) =>
    `text-sm px-3 py-2 rounded-md font-medium ${
      isActive
        ? "bg-orange-500 text-white"
        : "text-zinc-800 dark:text-zinc-100 hover:bg-orange-200 dark:hover:bg-zinc-700"
    }`;

  return (
    <nav className="glass sticky top-0 z-50 border-b border-zinc-200 dark:border-zinc-700 bg-blue-300 p-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/dashboard" className="font-bold text-lg text-orange-600">
        TASK MANAGER
      </Link>

      {/* Nav links */}
      <div className="hidden md:flex gap-3">
        <NavLink to="/dashboard" end className={navLinkClass}>
          Tasks
        </NavLink>
        <NavLink to="/dashboard/about" className={navLinkClass}>
          About
        </NavLink>
        <NavLink to="/dashboard/privacy" className={navLinkClass}>
          Privacy
        </NavLink>
        <NavLink to="/dashboard/contact" className={navLinkClass}>
          Contact
        </NavLink>
      </div>

      {/* Theme toggle & user menu */}
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <UserCircleIcon className="h-6 w-6" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-44">
            <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
