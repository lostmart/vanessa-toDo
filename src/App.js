import { useState } from 'react'

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

		// setSearches((searches) => [...searches, query])
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
						<li key={i}>{number}</li>
					))}
				</ul>
			</main>
		</div>
	)
}

export default App
