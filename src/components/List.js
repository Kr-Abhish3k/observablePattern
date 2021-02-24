class List  {
    createMarkup(userList){
        return(
            `<ul> ${userList.users.map(user => `<li id=${user.id}>${user.name}</li>`).join('') } </ul>`
        );
    }

    render(state, selector='App') {
        const getMarkup = this.createMarkup(state);
        const parentNode = document.getElementById(selector);
        parentNode.innerHTML = getMarkup;
    }
}

export default List;