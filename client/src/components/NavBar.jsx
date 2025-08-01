import Link from "next/link";
import { PiBookOpenBold } from "react-icons/pi";

export default function NavBar() {
  return (
    <>
      <div className="flex items-center justify-between justify-items-center p-4">
        <div className="flex items-center justify-items-center gap-24">
          <Link
            href="/"
            className="border-roxo-100 rounded-full border-2 p-1.5"
          >
            <PiBookOpenBold className="text-roxo-100 text-xl" />
          </Link>
          <ul className="flex gap-24">
            <li>
              <Link href="/search">Busca de Livros</Link>
            </li>
            <li>
              <Link href="/profile">Perfil</Link>
            </li>
            <li>
              <Link href="/compras">Teste Not-Found</Link>
            </li>
          </ul>
        </div>

        <ul className="flex gap-24">
          <li>
            <Link href="/register">Cadastro</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
