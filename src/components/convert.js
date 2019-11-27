import React, { useState } from "react"
import "./convert.css"

const Convert = () => {
  const [value, setValue] = useState("")
  const handleChange = event => {
    setValue(event.target.value)
  }
  return (
    <div className="convert">
      <div className="convert__title">Convert units</div>
      <div className="convert__input">
        <input type="text" value={value} onChange={handleChange} />
        <div>kg CO_2</div>
      </div>
      {value ? (
        <div className="convert__result">
          <div className="convert__result--item convert__result-average">
            {parseFloat(value) / 1000} km driving with a new car
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Convert
