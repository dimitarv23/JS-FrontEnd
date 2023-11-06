function printTicketPrice (dayType, personAge) {
    let ticketPrice;

    if (dayType == 'Weekday') {
        if (personAge >= 0 && personAge <= 18) {
            ticketPrice = '12$';
        } else if (personAge > 18 && personAge <= 64) { 
            ticketPrice = '18$';
        } else if (personAge > 64 && personAge <= 122) { 
            ticketPrice = '12$';
        }
    } else if (dayType == 'Weekend') {
        if (personAge >= 0 && personAge <= 18) {
            ticketPrice = '15$';
        } else if (personAge > 18 && personAge <= 64) { 
            ticketPrice = '20$';
        } else if (personAge > 64 && personAge <= 122) { 
            ticketPrice = '15$';
        }
    } else if (dayType == 'Holiday') {
        if (personAge >= 0 && personAge <= 18) {
            ticketPrice = '5$';
        } else if (personAge > 18 && personAge <= 64) { 
            ticketPrice = '12$';
        } else if (personAge > 64 && personAge <= 122) { 
            ticketPrice = '10$';
        }
    }

    if (ticketPrice) {
        console.log(ticketPrice);
    } else {
        console.log('Error!');
    }
}

printTicketPrice('Weekday', 42);
printTicketPrice('Holiday', -12);
printTicketPrice('Holiday', 15);