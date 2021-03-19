// Code your solution in this file!

const returnFirstTwoDrivers = (function(drivers){
    let firstDrivers = []
    firstDrivers.push(drivers[0], drivers[1])
    return firstDrivers
})

const returnLastTwoDrivers = (function(drivers){
    let lastDrivers = [] 
    lastDrivers.push(drivers.slice(-2)[0], drivers.slice(-1)[0])
    return lastDrivers
})

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multi) {
    let fare = multi
    return function(fare) {
        const newFare = fare * 5
        return newFare
    }

   

    
}

function fareDoubler(multi) {
    return multi * 2
}

function fareTripler(fare) {
    return fare * 3
}

function selectDifferentDrivers(drivers, selected) {
    if (selected == returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers)
    } else {
        return returnLastTwoDrivers(drivers) 
    }
}

let drivers = ["Ryan", "Kins", "Blake", "Dev", "Stella"]

function start() {
    selectDifferentDrivers(drivers, selectingDrivers)
}