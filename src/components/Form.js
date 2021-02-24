class Form {
    constructor(state={}) { //pass state object instance as an argument 
        this.appState = state;
        this.updateState = this.updateState.bind(this);
    }

    createMarkup() {
        return(
            `<div>
                <form class="" id="userForm">
                    <label for="username">Add a User</label>
                    <input id="username" type="text" name="name">
                    <button type="submit" name='add'>Add</button>
                </form>
            </div>`
        );
    }

    render(selector='App') {
        let markup = this.createMarkup();
        let parentNode = document.getElementById(selector);
        parentNode.innerHTML = markup;
        this.bindEvents();
    }

    bindEvents() {
        const userForm = document.getElementById('userForm');
        userForm.addEventListener('submit',this.updateState);
    }

    updateState(e) {
        e.preventDefault();
        const targetForm = e.target;
        const {value: name} = targetForm.name;

        if(!name)
            return;

        const state = this.appState.getState();

        const users= [ ...state.users , { id: state.users.length+1 , name } ];
        
        //empty name field
        targetForm.name.value ="";

        this.appState.update({users});
    }

}

export default Form;