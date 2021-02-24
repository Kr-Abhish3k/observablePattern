//extends Subject class. will call notify observers of Subject class with new state each time state get supdated

import Subject from './Subject';
class State  extends Subject {
    constructor() {
        super();
        this.state = {};
    }

    //update the state with proided data
    update(data={}) {
        this.state = Object.assign(this.state, data);
        // notify all the observers of update state
        this.notifyObervers(this.state);
    }

    //return the current state
    getState() {
        return this.state;
    }
}

export default State;