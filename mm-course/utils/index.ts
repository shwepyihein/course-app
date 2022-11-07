import getConfig from "next/config"

const { env } = getConfig()

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export const IMAGE_PATH = process.env.IMAGE_PATH

export const createMarkup = (description: any) => {
  if (description) return { __html: description }
}
