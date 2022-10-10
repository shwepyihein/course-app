import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import { useRouter } from "next/router"
import { useState, useEffect, useRef, LegacyRef } from "react"

import Dropdown from "./index"

interface MenuItemsProps {
  items: any
  depthLevel: any
}

const MenuItems = ({ items, depthLevel }: MenuItemsProps) => {
  const [dropdown, setDropdown] = useState(false)
  const router = useRouter()
  let ref = useRef<any>()

  useEffect(() => {
    const handler = (event: MouseEvent | TouchEvent) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false)
      }
    }
    document.addEventListener("mousedown", handler)
    document.addEventListener("touchstart", handler)
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler)
      document.removeEventListener("touchstart", handler)
    }
  }, [dropdown])

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true)
  }

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false)
  }

  return (
    <li
      className="inline-flex text-gray-500 flex w-full justify-between menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            className="flex w-full justify-between"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => {
              if (items.route) {
                router.push(items.route)
              }
            }}
          >
            <p>{items.name}</p>
            {depthLevel > 0 ? (
              <ChevronRightIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            ) : (
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            )}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <button
          onClick={() => {
            if (items.route) {
              router.push(items.route)
            }
          }}
        >
          <div className="w-full ">
            <p>{items.name}</p>
          </div>
        </button>
      )}
    </li>
  )
}

export default MenuItems
