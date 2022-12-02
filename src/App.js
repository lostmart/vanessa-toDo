import { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

function App() {
	const [toDos, setToDos] = useState([])

	const [newToDo, setNewToDo] = useState('')

	const changeToDo = (e) => {
		setNewToDo(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setToDos((toDos) => [...toDos, newToDo])
		setNewToDo('')
	}

	const deleteTodo = (indx) => {
		setToDos((todo) => todo.filter((to, i) => i !== indx))
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
						<li className="flex items-center justify-between" key={i}>
							{number}
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
