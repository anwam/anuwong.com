import * as React from "react"

const Tags = ({ tags, className }) => {
  const tagList = tags?.split(",")?.map(tag => tag.trim()) || [""]

  return (
    <div className={`flex flex-row flex-wrap gap-2 ${className}`}>
      {tagList?.map((tag, i) => (
        <span
          className="px-4 py-1 text-sm transition-shadow rounded-full bg-primary text-primary-content hover:ring-2 ring-secondary"
          key={tag}
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

export default Tags
