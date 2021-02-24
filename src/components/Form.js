class Form {

    createMarkup(state) {
        return(
            `<div>
                <form class="" id="">
                    <input type="text" id="" name="">
                    <button type="submit" name='add'>Add</button>
                </form>
            </div>`
        );
    }

    render(selector='App') {
        let markup = this.createMarkup();
        let parentNode = document.getElementById(selector);
        parentNode.innerHTML = markup;
    }


}

export default Form;