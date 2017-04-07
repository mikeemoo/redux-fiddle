import React from "react";
import { connect } from "react-redux";
import { addNote } from "../../../shared/actions/notes";
import randomString from "random-string";

export class App extends React.Component {
	render() {
		const { notes, onFormSubmit } = this.props;
		let input;

		return <form onSubmit={e => {
			e.preventDefault();
			onFormSubmit(input.value);
			input.value = "";
		}}>
			<h2>Notes:</h2>
			<ul>{notes.map(note =>
				<li key={`note_${note.id}}`}>{note.text}</li>
			)}</ul>
			<h3>Add note:</h3>
			<input type="text" ref={node => input = node} />
		</form>;
	}
}

export default connect(
	state => ({
		notes: state.notes
	}),
	dispatch => ({
		onFormSubmit: text => dispatch(addNote({
			text,
			id: randomString()
		}))
	})
)(App);
