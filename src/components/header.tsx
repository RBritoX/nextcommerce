import Link from "next/link";
import Image from "next/image";
import { Cart } from "./cart";
import { SearchForm } from "./searchForm";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          NextCommerce
        </Link>
        <SearchForm />
      </div>

      <div className="flex items-center gap-4">
        <Cart />

        <div className="h-4 w-px bg-zinc-700" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Raphael</span>
          <Image
            src="https://github.com/rbritox.png"
            alt="foto"
            width={24}
            height={24}
            className="rounded-full"
          />
        </Link>
      </div>
    </header>
  );
}
