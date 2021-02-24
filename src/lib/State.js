class State  {
    constructor() {
        this.state = {};
    }

    //update the state with proided data
    update(data={}) {
        this.state = Object.assign(this.state, data);
    }

    //return the current state
    getState() {
        return this.state;
    }
}

export default State;