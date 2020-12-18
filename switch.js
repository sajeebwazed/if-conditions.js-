var date = new Date()

// 0-sunday, 1-monday, 3-tuesday, 4-wednesday, 5-thursday, 6-friday

var today = date.getDay()

switch (today) {
    case 0:
        console.log('Today is sunday')
        break
    case 1:
        console.log('Today is Monday')
        break
    case 2:
        console.log('Today is Tuesday')
        break
    case 3:
        console.log('Today is Wednesday')
        break
    case 4:
        console.log('Today is Thursday')
        break
    case 5:
        console.log('Today is Friday')
        break
    case 6:
        console.log('Today is Saturday')
        break
}


var date = new Date()

// 0-sunday, 1-monday, 2-tuesday, 3-wednesday, 4-thursday, 5-friday, 6-saturday.

var today = date.getDay()

switch(today){
    case 0:
        console.log('Today is Sunday')
        break
    case 1:
        console.log('Today is Monday')
        break
    case 2:
        console.log('Today is Tuesday')
        break
    case 3:
        console.log('Today is Wednesday')
        break
    case 4:
        console.log('Today is Thursday')
        break
    case 5:
        console.log('Today is Friday')
        break
    case 6:
        console.log('Today is saturday')
        break 
}