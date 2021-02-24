class List  {
    createMarkup(userList){
        return(
            `<ul> ${userList.map(user => `<li id=${user.id}>${user.name}</li>`).join('') } </ul>`
        );
    }

    render(selector='App') {
        const users = [
            {
              id: 1,
              name: "Jennifer"
            },
            {
              id: 2,
              name: "Jane"
            },
            {
              id: 3,
              name: "John"
            }
          ];
        const getMarkup = this.createMarkup(users);
        const parentNode = document.getElementById(selector);
        parentNode.innerHTML = getMarkup;
    }
}

export default List;