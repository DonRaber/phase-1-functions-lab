let headquarters = 42
function distanceFromHqInBlocks(address) {
    if (address >= headquarters) {
        return address - headquarters
    } else {
        return headquarters - address
    }
}

// distanceFromHqInBlocks(50)
// distanceFromHqInBlocks(43)

function distanceFromHqInFeet(address) {
    let distanceInFeet = distanceFromHqInBlocks(address)*264
    return distanceInFeet
}

function distanceTravelledInFeet(start, destination) {
    if (start >= destination) {
        return (start - destination)*264
    } else {
        return (destination - start)*264
    }
}

function calculatesFarePrice(start, destination) {
    let rate = distanceTravelledInFeet(start, destination)
    if (rate <= 400) {
        return 0
    } else if (rate <= 2000) {
        return (rate-400)*.02
    } else if (rate <= 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}