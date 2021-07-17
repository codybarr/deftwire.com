import React, { useState } from 'react'

const fetchTags = async (targetUrl) => {
  const res = await fetch(
    `https://meta-fetch.vercel.app/api/meta/${encodeURIComponent(targetUrl)}`
  )
  const tags = await res.json()
  return tags
}

// This is the editing component
export const MetaControl = ({ value, field, forId, onChange }) => {
  const [meta, setMeta] = useState(value || {})

  return (
    <div>
      <input type="text" placeholder="Enter URL" />
      <button type="button" onClick={(e) => fetchTags()}>
        Fetch Tags
      </button>
      <input type="text" placeholder="Enter Title" />
      <textarea placeholder="Enter Description" />
      <input type="text" placeholder="Enter Image" />
    </div>
  )
}

// This is the preview component
export const MetaPreview = (props) => <div></div>
