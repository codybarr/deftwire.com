import React, { useState } from 'react'
import { Map } from 'immutable'

function fetchTags(url, setMeta, onChange) {
  fetch(
    `https://meta-fetch.vercel.app/api/metafetch/${encodeURIComponent(url)}`
  )
    .then((res) => res.json())
    .then((json) => {
      console.log(json)
      const tags = { ...json, url }
      setMeta(tags)
      onChange(Map(tags))
    })
}

// This is the editing component
export const MetaControl = ({
  value,
  field,
  forID,
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
        id={`${forID}_url`}
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
        id={`${forID}_title`}
        onChange={(e) => setMeta({ ...meta, title: e.target.value })}
      />
      <textarea
        className={classNameWrapper}
        placeholder="Enter Description"
        value={meta.description}
        id={`${forID}_description`}
        onChange={(e) => setMeta({ ...meta, description: e.target.value })}
      />
      <input
        className={classNameWrapper}
        type="text"
        placeholder="Enter Image"
        value={meta.image}
        id={`${forID}_image`}
        onChange={(e) => setMeta({ ...meta, image: e.target.value })}
      />
    </div>
  )
}

// This is the preview component
export const MetaPreview = (props) => <div></div>
