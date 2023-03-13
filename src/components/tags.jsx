import * as React from "react"

const Tags = ({ tags, className }) => {
  const tagList = tags.split(",").map(tag => tag.trim())
  return (
    <div className={`flex flex-row flex-wrap gap-2 ${className}`}>
      {tagList.length > 0 &&
        tagList.map(tag => (
          <span
            className="px-4 py-1 text-sm rounded-full bg-primary text-primary-content "
            key={tag}
          >
            {tag}
          </span>
        ))}
    </div>
  )
}

export default Tags
