class Subject {
    
    constructor() {
        this.observers =[]
    }

    //Add an observer to this.observers
    addObserver(observer) {
        this.observers.push(observer);
    }

    //Remove observer from the list of this.observers 
    removeObserver(observer) {
        const removeIndex = this.observers.findIndex(obsrvrs => obsrvrs === observer);

        if(removeIndex != -1)
            this.observers = this.observers.slice(removeIndex,1);
    }

}

export default Subject;