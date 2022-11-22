import { Fragment, useEffect, useState } from "react"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import {
  Bars3Icon,
  BellIcon,
  ChevronDoubleDownIcon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"
import { useScrollPosition } from "../hooks/scrollhooks"
import { classNames } from "../utils"
import { useRouter } from "next/router"
import CategoryDropdown from "./categoryDropDown"
import MenuItems from "./categoryDropDown/MenuItem"
import { getCategoryRoute } from "../api/category/category"
import Link from "next/link"

const navigation = [
  { name: "Categories", route: "/category", current: false },
  {
    name: "Courses",
    href: "/course-type/free",
    current: true,
    menu: true,
    submenu: [
      // { name: "Popular", href: "/course-type/popular" },
      { name: "Free", route: "/course-type/free" },
    ],
  },
  { name: "Topics", route: "/topics", current: false },
  { name: "Book", route: "/book", current: false },
  { name: "Blog", route: "/blog", current: false },
]

export default function Navbar() {
  const scrollPosition = useScrollPosition()
  const router = useRouter()

  const [routeList, setRouteList] = useState<any[]>([])
  const fetchroute = async () => {
    await getCategoryRoute().then((res) => setRouteList(res))
  }

  useEffect(() => {
    fetchroute()
  }, [])
  return (
    <Disclosure
      as="nav"
      className={classNames(
        router.pathname === "/" ? "bg-gray-800" : "bg-gray-800",
        scrollPosition < 20
          ? `backdrop-filter backdrop-blur-2xl  ${
              router.pathname !== "/" ? "bg-gray-800" : "bg-transparent"
            }`
          : "",

        "fixed w-full top-0 z-[1000]"
      )}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden backdrop-filter backdrop-blur-2xl uk-sticky uk-sticky-fixed is-dark is-transparent border-b">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div
                  className="flex cursor-pointer flex-shrink-0 items-center"
                  onClick={() => {
                    router.push("/")
                  }}
                >
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src={
                      scrollPosition < 20 && router.pathname === "/"
                        ? "/logo_3.svg"
                        : "/logo_3.svg"
                    }
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src={
                      scrollPosition < 20 && router.pathname === "/"
                        ? "/logo_3.svg"
                        : "/logo_3.svg"
                    }
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item, i) => {
                      if (item.name === "Categories") {
                        return (
                          <MenuItems
                            key={i}
                            items={{ name: "categories", submenu: routeList }}
                            depthLevel={0}
                          />
                        )
                      }

                      return <MenuItems key={i} items={item} depthLevel={0} />
                    })}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex gap-3 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <ul className="text-gray-500 flex gap-2 ">
                  {router.locales?.map((item) => {
                    return (
                      <li key={item}>
                        <Link href={router.asPath} locale={item}>
                          <a
                            className={classNames(
                              router.locale === item
                                ? "text-white"
                                : "text-gray-500 ",
                              item === "mm" ? "border-l px-1" : ""
                            )}
                          >
                            {item === "mm" ? "MM" : "EN"}
                          </a>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                {/* <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu> */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.route}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
