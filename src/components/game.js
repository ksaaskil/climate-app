import React, { useState } from "react"
import Play from "./play"
import "./game.css"

const tasks = ["Take a short shower", "Have a holiday close to you"]

const finished = {}

tasks.forEach(task => {
  finished[task] = false
})

const Task = ({ title, onFinish }) => {
  const [state, setState] = useState(false)
  return (
    <div className={`game__task`} onClick={() => setState(true)}>
      <div
        className={`game__task-content ${
          state
            ? "game__task-content--finished"
            : "game__task-content--unfinished"
        }`}
      >
        <div className="game__task-content-title">{title}</div>
        <div className="game__task-content-status"></div>
      </div>
    </div>
  )
}

const Game = () => {
  const [state, setState] = useState(finished)

  const onFinish = task => {
    finished[task] = true
    setState(finished)
  }

  return (
    <div className="game">
      <div className="game__title">Play a climate game!</div>
      <div className="tasks">
        {tasks.map(task => (
          <Task title={task} key={task} onFinish={onFinish} />
        ))}
      </div>
    </div>
  )
}

export default Game
