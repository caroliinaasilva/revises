function informaDia (days) {
    switch (days) {
        case 1:
           return 'Sunday'
        case 2:
           return 'Monday'
        case 3:
            return 'Tuesday'
        case 4: 
            return 'Wednesday'
        case 5:
            return 'Thursday'
        case 6:
            return 'Friday'
        case 7:
            return 'Saturday'
        default: 
        return 'This number does not refer a week day'    
            
    
    
     }}

     console.log(informaDia(5))