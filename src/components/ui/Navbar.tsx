import Link from "next/link"
import { FC } from "react"

const Navbar: FC = () => {
  return (
    <nav>
      <div className="nav-wrapper flex flex-row align-center py-5 px-32">
        <Link href="/" className="x-logo">
          <img src="/images/logo.png" alt="logo" width={50} height={50} />
        </Link>
        <ul className="flex flex-row text-lg align-center justify-center w-full gap-20">
            <li><Link href="/statistics" className="py-2 px-5 rounded-lg transition duration-200 ease-in-out 
                  hover:bg-[rgb(var(--hover-color))]">Statistics</Link></li>
            <li><Link href="/finder" className="py-2 px-5 rounded-lg transition duration-200 ease-in-out 
                  hover:bg-[rgb(var(--hover-color))]">Finder</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar