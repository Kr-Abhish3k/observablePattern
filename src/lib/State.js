//extends Subject class. will call notify observers of Subject class with new state each time state get supdated

import Listeners from './Subject';
class State  extends Listeners {
    constructor() {
        super();
        this.state = {};
    }

    //update the state with proided data
    update(data={}) {
        this.state = Object.assign(this.state, data);

        // notify all the Listeners of updated state
        this.notifyObervers(this.state);
    }

    //return the current state
    getState() {
        return this.state;
    }
}

export default State;