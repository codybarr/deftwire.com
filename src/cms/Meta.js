import React from 'react'
import { Map } from 'immutable'

function fetchTags(url, onChange) {
  fetch(
    `https://meta-fetch.vercel.app/api/metafetch/${encodeURIComponent(url)}`
  )
    .then((res) => res.json())
    .then((json) => {
      const tags = { ...json, url }
      onChange(Map(tags))
    })
}

// This is the editing component
export const MetaControl = ({
  value = Map({}),
  field,
  forID,
  onChange,
  classNameWrapper,
}) => {
  return (
    <div className={classNameWrapper}>
      <input
        className={classNameWrapper}
        type="text"
        placeholder="Enter URL"
        value={value.get('url')}
        id={`${forID}_url`}
        onChange={(e) => onChange(value.set('url', e.target.value))}
      />
      <button
        className={classNameWrapper}
        type="button"
        onClick={(e) => fetchTags(value.get('url'), onChange)}
      >
        Fetch Tags
      </button>
      <input
        className={classNameWrapper}
        type="text"
        placeholder="Enter Title"
        name="tags.title"
        value={value.get('title')}
        id={`${forID}_title`}
        onChange={(e) => onChange(value.set('title', e.target.value))}
        required
      />
      <textarea
        className={classNameWrapper}
        placeholder="Enter Description"
        value={value.get('description')}
        id={`${forID}_description`}
        onChange={(e) => onChange(value.set('description', e.target.value))}
      />
      <input
        className={classNameWrapper}
        type="text"
        placeholder="Enter Image"
        value={value.get('image')}
        id={`${forID}_image`}
        onChange={(e) => onChange(value.set('image', e.target.value))}
      />
    </div>
  )
}

// This is the preview component
export const MetaPreview = (props) => <div></div>
