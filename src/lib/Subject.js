class Subject {

    // methods of this class should be called with State class , not directly

    constructor() {
        this.observers = [];
    }

    // Add new listner to change
    addObservers(observer) {
        this.observers.push(observer);
    }

    // Remove  listner to change
    removeObserver(obsrvr) {
        const removeIndex = this.observers.findIndex(observer => observer === obsrvr);
        this.observers.slice(removeIndex,1);
    }

    // All the observers will have a method called update which will be called to get new state and render with new data
    // The state object will call this method everytime it is updated.
    notifyObervers(data) {
        this.observers.forEach(observer=>observer.update(data))
    }
}

export default Subject;