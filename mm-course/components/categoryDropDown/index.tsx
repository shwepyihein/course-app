import { Fragment, useEffect, useRef, useState } from "react"
import { Popover, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { classNames } from "../../utils"
import { ChevronRightIcon } from "@heroicons/react/24/outline"
import { getCategoryRoute } from "../../api/category/category"
import MenuItems from "./MenuItem"

interface CategoryDropdownProps {
  submenus: any
  dropdown: any
  depthLevel: any
}

export default function CategoryDropdown({
  submenus,
  dropdown,
  depthLevel,
}: CategoryDropdownProps) {
  depthLevel = depthLevel + 1
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : ""
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""} w-56`}>
      {submenus.map((submenu: any, index: number) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  )
}
