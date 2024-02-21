import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="w-full flex justify-center items-center px-11 py-3">
        <nav className="w-full">
          <div className="w-auto">
            <Link
              className="flex flex-col border-l-[3px] border-l-Secondary-Root pl-1 cursor-pointer hover:bg-Complementary-Root"
              href="/"
            >
              <h1 className="text-3xl font-bold text-Primary-Root">
                Biblia
              </h1>
              <p className="text-sm">Palabra De Dios</p>
            </Link>
          </div>
          <ul></ul>
        </nav>
      </header>

    </main>
  );
}
