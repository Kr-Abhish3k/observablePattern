import Subject from "./Subject";

class State extends Subject {
    constructor() {
        super();
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