import { ChangeEvent, FC, useEffect, useState } from "react"
import "./App.css"
import TodoTask from "./components/TodoTask"

export interface TaskType {
	taskName: string
	deadline: number
}
const App: FC = () => {
	const [task, setTask] = useState<string>("")
	const [deadline, setDeadline] = useState<number>(0)
	const [todoList, setTodoList] = useState<TaskType[]>([])

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
		if (event.target.name === "task") setTask(event.target.value)
		if (event.target.name === "deadline") setDeadline(Number(event.target.value))
	}

	const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault()
		setTodoList([...todoList, { taskName: task, deadline }])
		setTask("")
		setDeadline(0)
	}

	const handleCompleteTask = (taskNameToDelete: string): void => {
		const newTodoList = todoList.filter(todo => todo.taskName !== taskNameToDelete)
		setTodoList(newTodoList)
	}

	useEffect(() => {
		if (todoList.length > 0) console.log(todoList)
	}, [todoList])

	return (
		<div className="App">
			<header className="header">
				<form className="form">
					<input type="text" placeholder="Test..." value={task} name="task" onChange={e => handleInputChange(e)} />
					<input type="number" placeholder="Deadline..." value={deadline} name="deadline" onChange={e => handleInputChange(e)} />
					<button type="submit" onClick={e => handleSubmit(e)}>
						ADD NOTE
					</button>
				</form>
			</header>
			<main className="todoList">
				{todoList.map(todo => {
					return <TodoTask taskName={todo.taskName} deadline={todo.deadline} handleCompleteTask={handleCompleteTask} />
				})}
			</main>
		</div>
	)
}

export default App
