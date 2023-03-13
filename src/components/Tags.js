import * as React from "react"

export default function Tags({ tags }) {
  const tagList = tags.split(",").map(tag => tag.trim())
  return (
    <div className="flex flex-row flex-wrap">
      {tagList.length > 0 &&
        tagList.map(tag => (
          <span
            className="px-4 py-1 mx-2 my-0 text-sm rounded-full bg-primary text-primary-content"
            key={tag}
          >
            {tag}
          </span>
        ))}
    </div>
  )
}
