import * as React from "react"

const Tags = ({ tags, className }) => {
  // const tagList = tags?.split(",")?.map(tag => tag.trim()) || [""]
  const tagList = tags || [""]

  return (
    <div className={`flex flex-row flex-wrap gap-4 ${className}`}>
      {tagList?.map((tag, i) => (
        <span
          className="px-4 py-1 text-sm transition-shadow rounded-full bg-primary text-primary-content hover:ring-4 ring-secondary"
          key={tag}
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

export default Tags
