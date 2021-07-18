import React, { useState } from 'react'

function fetchTags(url, setMeta, onChange) {
  fetch(
    `https://meta-fetch.vercel.app/api/metafetch/${encodeURIComponent(url)}`
  )
    .then((res) => res.json())
    .then((json) => {
      console.log(json)
      const tags = { ...json, url }
      setMeta(tags)
      onChange(tags)
    })
}

// This is the editing component
export const MetaControl = ({
  value,
  field,
  forId,
  onChange,
  classNameWrapper,
}) => {
  const [meta, setMeta] = useState(value || {})

  console.log('meta', meta)

  return (
    <div className={classNameWrapper}>
      <input
        type="text"
        placeholder="Enter URL"
        value={meta.url}
        id={`${forId}_url`}
        onChange={(e) => setMeta({ ...meta, url: e.target.value })}
      />
      <button
        className={classNameWrapper}
        type="button"
        onClick={(e) => fetchTags(meta.url, setMeta, onChange)}
      >
        Fetch Tags
      </button>
      <input
        className={classNameWrapper}
        type="text"
        placeholder="Enter Title"
        value={meta.title}
        id={`${forId}_title`}
        onChange={(e) => setMeta({ ...meta, title: e.target.value })}
      />
      <textarea
        className={classNameWrapper}
        placeholder="Enter Description"
        value={meta.description}
        id={`${forId}_description`}
        onChange={(e) => setMeta({ ...meta, description: e.target.value })}
      />
      <input
        className={classNameWrapper}
        type="text"
        placeholder="Enter Image"
        value={meta.image}
        id={`${forId}_image`}
        onChange={(e) => setMeta({ ...meta, image: e.target.value })}
      />
    </div>
  )
}

// This is the preview component
export const MetaPreview = (props) => <div></div>
