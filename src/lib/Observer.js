class Observer {
    //gets called by Subject's notify method
    update(state) {
        this.render(state);
    }
}

export default Observer;