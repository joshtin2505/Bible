import Link from 'next/link'
import React from 'react'
import { BsBook, BsGithub, BsSun } from 'react-icons/bs'

function Nav() {
  return (
    <header className="w-full flex justify-center items-center px-14 py-3">
        <nav className="w-full flex items-center justify-between">
          <div className="w-auto">
            <Link
              className="flex flex-col cursor-pointer "
              href="/"
            >
              <h1 className="text-3xl font-bold text-Primary-Root flex items-center gap-1">
                <BsBook size={22} className="inline-block text-center text-Tertiary-700" />
                Biblia
              </h1> 
              <p className="text-sm text-Primary-Root">Palabra De Dios</p>
            </Link>
          </div>
          <ul className="flex  gap-4 text-lg font-medium">
            <a href="/">Inicio</a>
            <a href="/">Search</a>
            <a href="/">Iniciar Sesion</a>
            <a href="/">Unete</a>
          </ul>
          <ul className="flex items-center  text-Primary-Root gap-2">
            <a target="_blank" href="https://github.com/joshtin2505"><BsGithub size={22} className="hover:text-Primary-500 transition-all" /></a>
            <button className="rounded-full transition-all hover:bg-Primary-200 p-1"><BsSun size={20}/></button>
          </ul>
        </nav>
      </header>
  )
}

export default Nav