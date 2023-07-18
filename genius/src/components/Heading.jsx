import React from "react"

const Heading = ({ order, children }) => {
  if (order === 2)
    return (
      <h2 className="font-display text-3xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
        {children}
      </h2>
    )

  return (
    <div className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-6xl">
      {children}
    </div>
  )
}

export default Heading
