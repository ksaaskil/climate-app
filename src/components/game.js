import React, { useState, useEffect } from "react"
import "./game.css"

const tasks = ["Take a short shower", "Have a holiday close to you"]

const finished = {}

tasks.forEach(task => {
  finished[task] = false
})

const Task = ({ title, onFinish }) => {
  const [state, setState] = useState(false)
  const onClick = () => {
    setState(true)
    onFinish()
  }
  return (
    <div className={`game__task`} onClick={() => onClick()}>
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
  const [tasksLeft, setTasksLeft] = useState(Object.keys(finished).length)
  const onFinishTask = task => {
    const finishedCopy = { ...state, [task]: true }
    setState(finishedCopy)
  }

  useEffect(() => {
    const nTasksLeft = Object.values(state).filter(value => !value).length
    setTasksLeft(nTasksLeft)
    console.log("Updated value", nTasksLeft)
  }, [state])

  return (
    <div className="game">
      <div className="game__title">Climate game</div>
      <div className="tasks">
        {tasks.map(task => (
          <Task title={task} key={task} onFinish={() => onFinishTask(task)} />
        ))}
      </div>
      <div
        className={`game__status ${
          tasksLeft === 0 ? "game__status--finished" : "game__status-togo"
        }`}
      >
        {tasksLeft === 0
          ? "All tasks finished, you're awesome!"
          : `Keep going, only ${tasksLeft} task${
              tasksLeft > 1 ? "s" : ""
            } left!`}
      </div>
    </div>
  )
}

export default Game
