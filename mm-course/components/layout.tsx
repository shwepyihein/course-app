import Link from "next/link"
import React from "react"
import Navbar from "./Navbar"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      {children}

      <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="#" className="hover:underline">
            Course
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href="/terms-condition">
              <a className="mr-4 hover:underline md:mr-6 ">
                Terms & Conditions
              </a>
            </Link>
          </li>
          <li>
            <Link href="/pivacy-poicy">
              <a className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </Link>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default Layout
