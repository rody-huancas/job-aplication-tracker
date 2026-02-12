import Link from "next/link";
import SingOutBtn from "./sign-out-btn";
import { Button } from "./ui/button";
import { getSession } from "@/lib/auth/auth";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Briefcase } from "lucide-react";

const Navbar = async () => {
  const session = await getSession();

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="container mx-auto flex items-center justify-between p-5">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-semibold text-primary"
        >
          <Briefcase />
          Job Application Tracker
        </Link>

        <div className="flex items-center gap-4">
          {session?.user ? (
            <>
              <Link href="/dashboard">
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-black"
                >
                  Dashboard
                </Button>
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="ghost">
                    <Avatar>
                      <AvatarFallback className="bg-primary">
                        {session.user.name[0].toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                  <DropdownMenuLabel>
                    <div className="">
                      <p>{session.user.name}</p>
                      <p>{session.user.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  
                  <SingOutBtn />
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Link href="/sign-up">
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-black"
                >
                  Registrarse
                </Button>
              </Link>

              <Link href="/sign-in">
                <Button className="bg-primary hover:bg-primary/90">
                  Iniciar sesión
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
