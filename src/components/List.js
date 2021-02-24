import Observer from "../lib/Observer";
class List extends Observer {

	createMarkup(state) {
		return `<ul> ${state.users
			.map((user) => `<li id=${user.id}>${user.name}</li>`)
			.join("")} </ul>`;
	}

	render(state, selector = "user-list-container") {
		const getMarkup = this.createMarkup(state);
		const parentNode = document.getElementById(selector);
		parentNode.innerHTML = getMarkup;
	}
}

export default List;
