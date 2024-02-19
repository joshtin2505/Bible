import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="w-full flex justify-center items-center px-11 py-3">
        <nav className="w-full">
          <Link className="text-2xl font-bold hover:underline hover:text-waikawa-gray-500" href="/">Biblia</Link>
          <ul></ul>
        </nav>
      </header>
    </main>
  )
}
