import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
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
          <Link href="/sign-up">
            <Button variant="ghost" className="text-gray-700 hover:text-black">
              Registrarse
            </Button>
          </Link>
          <Link href="/sign-in">
            <Button className="bg-primary hover:bg-primary/90">
              Iniciar sesión
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
