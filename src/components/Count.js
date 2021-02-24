class Count {
    createMockup(count) {
        return(`<p>${count}<p>`);
    }

    render(selector='App') {
        const markup = this.createMockup(4);
        const parentNode = document.getElementById(selector);

        parentNode.innerHTML = markup;
    }
}

export default Count;