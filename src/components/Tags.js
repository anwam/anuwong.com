import * as React from "react"

export default function Tags({ tags }) {
  const tagList = tags.split(",").map(tag => tag.trim())
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {tagList.length > 0 &&
        tagList.map(tag => (
          <span
            style={{
              padding: "4px 12px",
              margin: "0 4px",
              backgroundColor: "lightblue",
              borderRadius: 16,
              fontSize: 14,
              color: "#111",
            }}
            key={tag}
          >
            {tag}
          </span>
        ))}
    </div>
  )
}
