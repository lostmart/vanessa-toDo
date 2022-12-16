import { useState } from 'react'
import { FaTrashAlt, FaCheck } from 'react-icons/fa'

function App() {
	const [toDos, setToDos] = useState([])

	const [newToDo, setNewToDo] = useState('')

	const changeToDo = (e) => {
		setNewToDo(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setToDos((toDos) => [...toDos, { txt: newToDo, complete: false }])
		setNewToDo('')
	}

	const deleteTodo = (indx) => {
		setToDos((todo) => todo.filter((to, i) => i !== indx))
		setToDos((toDos) => [toDos])
	}

	const handleCompleteToDo = (task, i) => {
		const updatedTodoList = toDos.map((todo, indx) => {
			if (i === indx) {
				return { ...todo, complete: true }
			}

			return todo
		})

		setToDos(updatedTodoList)
	}

	return (
		<div className="App p-4 flex flex-col justify-center items-center">
			<header className="App-header">
				<h2 className="text-3xl my-4">To do app</h2>
			</header>
			<main>
				<form onSubmit={handleSubmit}>
					<input
						onChange={changeToDo}
						value={newToDo}
						className="border-2 mt-2 p-2"
						type="text"
					/>
					<p>{newToDo}</p>
				</form>
				<h2 className="text-lg">To do list</h2>
				<ul>
					{toDos.map((number, i) => (
						<li
							className={
								number.complete
									? 'border border-green-700 text-green-700 flex items-center justify-between mt-2 p-2 '
									: 'flex items-center justify-between border border-transparent mt-2 p-2'
							}
							key={i}>
							<div>
								<button onClick={() => handleCompleteToDo(number, i)}>
									<FaCheck className="mr-2" />
								</button>
								<span className="text-xl">{number.txt}</span>
							</div>
							<button onClick={() => deleteTodo(i)}>
								<FaTrashAlt />
							</button>
						</li>
					))}
				</ul>
			</main>
		</div>
	)
}

export default App
