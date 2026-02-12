"use client";

import { signOut } from "@/lib/auth/auth-client";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { useRouter } from "next/navigation";

const SingOutBtn = () => {
  const router = useRouter();

  const handleClick = async () => {
    const result = await signOut();

    if (result.data) {
      router.push("/sign-in");
    } else {
      alert("Error al cerrar sesión");
    }
  };

  return (
    <DropdownMenuItem onClick={handleClick}>Cerrar Sesión</DropdownMenuItem>
  );
};

export default SingOutBtn;
