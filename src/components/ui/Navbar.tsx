import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

const Navbar: FC = () => {
  return (
    <nav>
      <div className="nav-wrapper flex flex-row align-center py-5 px-32">
        <Link href="/" className="brand-logo">
          <img src="/images/logo.png" alt="logo" width={50} height={50} />
        </Link>
        <ul className="flex flex-row align-center justify-center ml-10">
            <li><Link href="/">Todo List</Link></li>
            <li><Link href="/profile">Profile</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar