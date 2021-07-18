import React, { useState } from 'react'

// const fetchTags = async (url) => {
//   const res = await fetch(
//     `https://meta-fetch.vercel.app/api/metafetch/${encodeURIComponent(url)}`
//   )
//   const tags = await res.json()
//   // return tags
//   console.log(tags)
// }

// This is the editing component
export const MetaControl = ({ value, field, forId, onChange }) => {
  const [meta, setMeta] = useState(value || {})

  return (
    <div>
      <input
        type="text"
        placeholder="Enter URL"
        value={meta.url}
        onChange={(e) => setMeta({ ...meta, url: e.target.value })}
      />
      <button type="button" onClick={(e) => console.log('bargle')}>
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
