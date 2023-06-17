import { useTrail, animated } from "@react-spring/web"
import * as React from "react"

const Tags = ({ tags, className }) => {
  const tagList = tags.split(",").map(tag => tag.trim())
  const [trails] = useTrail(
    tagList.length,
    () => ({
      from: { opacity: 0, x: 40 },
      to: { opacity: 1, x: 0 },
      delay: 150,
    }),
    [tagList]
  )
  return (
    <div className={`flex flex-row flex-wrap gap-2 ${className}`}>
      {tagList.length > 0 &&
        tagList.map((tag, i) => (
          <animated.span
            style={{ ...trails[i] }}
            className="px-4 py-1 text-sm rounded-full bg-primary text-primary-content "
            key={tag}
          >
            {tag}
          </animated.span>
        ))}
    </div>
  )
}

export default Tags
