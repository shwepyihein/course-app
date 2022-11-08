import getConfig from "next/config"

const { env } = getConfig()

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export const IMAGE_PATH = process.env.IMAGE_PATH

export const createMarkup = (description: any) => {
  if (description) return { __html: description }
}

export const removeTags = (str: any) => {
  if (str === null || str === "") return false
  else str = str.toString()

  // Regular expression to identify HTML tags in
  // the input string. Replacing the identified
  // HTML tag with a null string.
  return str.replace(/(<([^>]+)>)/gi, "")
}
