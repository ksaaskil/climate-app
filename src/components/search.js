import React, { useState } from "react"
import "./search.css"

const Search = () => {
  const [value, setValue] = useState("")
  const handleChange = event => {
    setValue(event.target.value)
  }
  return (
    <div className="search">
      <div className="search__title">Search product</div>
      <div className="search__input">
        <input type="text" value={value} onChange={handleChange} />
        <div></div>
      </div>
    </div>
  )
}

export default Search
