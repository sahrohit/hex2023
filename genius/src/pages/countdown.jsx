import Image from "next/future/image"
import { useState, useEffect } from "react"
import backgroundImage from "@/images/background-newsletter.jpg"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime)

const STATES = ["SCHEDULED", "ONGOING", "ENDED"]
const EVENT_START = "2023-07-19 17:00:00"
const EVENT_END = "2023-07-21 05:00:00"

const CountdownPage = () => {
  const [state, setState] = useState()
  const [timeTill, setTimeTill] = useState("HEx Genius")

  const [text, setText] = useState("")
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const [days, setDays] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = dayjs(timeTill).diff(dayjs(new Date()), "seconds")
      setDays(Math.floor(diff / (3600 * 24)))
      setHours(Math.floor((diff % (3600 * 24)) / 3600))
      setMinutes(Math.floor((diff % 3600) / 60))
      setSeconds(Math.floor(diff % 60))
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [timeTill])

  useEffect(() => {
    if (dayjs(EVENT_START).fromNow().includes("in")) {
      setState("SCHEDULED")
      setText("Starts in")
      setTimeTill(EVENT_START)
    } else if (
      dayjs(EVENT_END).fromNow().includes("in") &&
      dayjs(EVENT_START).fromNow().includes("ago")
    ) {
      setState("ONGOING")
      setText("Time Remaining")
      setTimeTill(EVENT_END)
    } else {
      setState("ENDED")
      setText("HExGenius Ended")
    }
  }, [days, hours, minutes, seconds])

  return (
    <div className="relative z-10 -mx-4 h-screen overflow-hidden bg-indigo-50 px-4 py-12 sm:-mx-6 sm:px-6 md:mx-0 md:px-16 xl:px-24 xl:py-16">
      <Image
        className="absolute left-1/2 top-0 translate-x-[-10%] translate-y-[-45%] lg:translate-x-[-32%]"
        src={backgroundImage}
        alt=""
        width={919}
        height={1351}
        unoptimized
      />
      <div className="gap-y-14xl:max-w-none item relative mx-auto grid h-screen max-w-2xl grid-cols-1 items-center gap-x-32">
        <div>
          <h2 className="font-display text-3xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
            {text}
          </h2>
          {state !== "ENDED" && (
            <div className="grid grid-flow-col gap-16 text-center font-display font-semibold tracking-tighter text-blue-900">
              <div className="flex flex-col">
                <span className="countdown font-mono text-5xl sm:text-9xl">
                  <span style={{ "--value": days }}></span>
                </span>
                days
              </div>
              <div className="flex flex-col">
                <span className="countdown font-mono text-5xl sm:text-9xl">
                  <span style={{ "--value": hours }}></span>
                </span>
                hours
              </div>
              <div className="flex flex-col">
                <span className="countdown font-mono text-5xl sm:text-9xl">
                  <span style={{ "--value": minutes }}></span>
                </span>
                min
              </div>
              <div className="flex flex-col">
                <span className="countdown font-mono text-5xl sm:text-9xl">
                  <span style={{ "--value": seconds }}></span>
                </span>
                sec
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CountdownPage
