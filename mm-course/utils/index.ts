import getConfig from "next/config"

const { publicRuntimeConfig } = getConfig()

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export const IMAGE_PATH = process.env.IMAGE_PATH
