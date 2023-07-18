import React from "react"
import { Button } from "./Button"
import { useRouter } from "next/router"

const ACTIONS = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Rules",
    href: "/code-of-conduct",
  },
  {
    name: "Judging Criteria",
    href: "/judging-criteria",
  },
]

const Actions = () => {
  const router = useRouter()

  return (
    <div className="hidden gap-4 sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
      {ACTIONS.map(({ name, href }) => {
        if (router.pathname === href) return

        return (
          <Button
            key={name}
            onClick={() => router.push(href)}
            className={router.pathname === href ? "bg-blue-600 text-white" : ""}
          >
            {name}
          </Button>
        )
      })}
    </div>
  )
}

export const MobileActions = () => {
  const router = useRouter()

  return (
    <div className="relative z-10 my-10 flex w-full flex-row gap-4 sm:hidden">
      {ACTIONS.map(({ name, href }) => {
        if (router.pathname === href) return

        return (
          <Button
            key={name}
            onClick={() => router.push(href)}
            className={
              router.pathname === href
                ? "flex-grow bg-blue-600 text-white"
                : "flex-grow"
            }
          >
            {name}
          </Button>
        )
      })}
    </div>
  )
}

export default Actions
