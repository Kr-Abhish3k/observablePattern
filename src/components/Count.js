class Count {
    createMockup(count) {
        return(`<p>${count}<p>`);
    }

    render(state,selector='App') {
        const markup = this.createMockup(state.users.length);
        const parentNode = document.getElementById(selector);

        parentNode.innerHTML = markup;
    }
}

export default Count;