import Observer from "../lib/Observer";
class Count extends Observer {

	createMockup(count) {
		return `<p>${count}<p>`;
	}

	render(state, selector = "user-count-container") {
		const markup = this.createMockup(state.users.length);
		const parentNode = document.getElementById(selector);

		parentNode.innerHTML = markup;
	}
}

export default Count;
