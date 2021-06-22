

function landingPage() {
    return {
        tasksList: []
    };
}

function Task(name, scheduledDate, state, currentLocation, userLocations) {
    this.name = name;
    this.scheduledDate = scheduledDate;
    
}

function Location(latitude, longitude, date) {

}