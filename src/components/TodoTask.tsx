import React from "react"
import { TaskType } from "../App"

interface Props {
	taskProps: TaskType
	handleCompleteTask: (taskNameToDelete: string) => void
}

const TodoTask = ({ taskProps, handleCompleteTask }: Props) => {
	const { taskName, deadline } = taskProps
	return (
		<div>
			<h2>{taskName ? taskName : "uh oh please input task..."}</h2>
			<h3>{deadline}</h3>
			<button onClick={() => handleCompleteTask(taskName)}>DONE</button>
		</div>
	)
}

export default TodoTask
