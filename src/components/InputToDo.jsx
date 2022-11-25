import PropTypes from 'prop-types'
import { useState } from 'react'

const handleSubmit = (e) => {
	e.preventDefault()
	console.log(e.target)
}

const InputToDo = (props) => {
	const [inputText, setInputText] = useState({
		title: '',
	})

	const { addTodoProps } = props
}

const InputComp = ({ title }) => {
	return (
		<div>
			<h2 className="text-center mb-4">{title}</h2>
			<form onSubmit={handleSubmit}>
				<input type="text" className="border-2" name="toDo" />
			</form>
		</div>
	)
}

InputComp.propTypes = {
	title: PropTypes.string,
}

export default InputComp
