class List  {
    createMarkup(state){
        return(
            `<ul> ${state.users.map(user => `<li id=${user.id}>${user.name}</li>`).join('') } </ul>`
        );
    }

    render(state,selector='App') {
        const getMarkup = this.createMarkup(state);
        const parentNode = document.getElementById(selector);
        parentNode.innerHTML = getMarkup;
    }

    update(state) {
      this.render(state,"user-list-container");
    }
}

export default List;