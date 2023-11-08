function calculateVacationPrice(groupCount, groupType, dayOfWeek) {
    let totalPrice = 0;

    if (groupType === "Students") {
        if (dayOfWeek === "Friday") {
            totalPrice = 8.45;
        } else if (dayOfWeek === "Saturday") {
            totalPrice = 9.8;
        } else if (dayOfWeek === "Sunday") {
            totalPrice = 10.46;
        }

        if (groupCount >= 30) {
            totalPrice *= 0.85;
        }
    } else if (groupType === "Business") {
        if (dayOfWeek === "Friday") {
            totalPrice = 10.9;
        } else if (dayOfWeek === "Saturday") {
            totalPrice = 15.6;
        } else if (dayOfWeek === "Sunday") {
            totalPrice = 16;
        }

        if (groupCount >= 100) {
            groupCount -= 10;
        }
    } else if (groupType === "Regular") {
        if (dayOfWeek === "Friday") {
            totalPrice = 15;
        } else if (dayOfWeek === "Saturday") {
            totalPrice = 20;
        } else if (dayOfWeek === "Sunday") {
            totalPrice = 22.5;
        }

        if (groupCount >= 10 && groupCount <= 20) {
            totalPrice *= 0.95;
        }
    }

    totalPrice *= groupCount;
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

calculateVacationPrice(30, "Students", "Sunday");
calculateVacationPrice(40, "Regular", "Saturday");
